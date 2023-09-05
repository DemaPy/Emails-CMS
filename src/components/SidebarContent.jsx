import { TabsContent } from "../components/ui/tabs";
import ProductsSidebar from "./ProductsSidebar";
import TextSidebar from "./TextSidebar";
import ImageLinkConstructor from "../constructors/Image/ImageLinkConstructor";
import LinkConstructor from "../constructors/Link/LinkConstructor";
import {
  useCampaignIdsContext,
  useCategory,
  useCountryContext,
  useDataContext,
  useFilterNames,
  useFilters,
  useTemplateTypeContext,
} from "../hooks";
import origins from "../constance/origins";
import { useEffect, useState } from "react";
import { incrementId } from "../lib/utils/increment_id";
import { CATEGORIES_URL } from "../constance/categoriesURL";
import { FILTERNAMES_URL } from "../constance/filterNamesURL";
import { FILTERS_URL } from "../constance/filtersURL";

const SidebarContent = () => {
  const [categories, isCategoryLoading, isCategoryError] =
    useCategory(CATEGORIES_URL);
  const [filterNames, isFilterNamesLoading, isFilterNamesError] =
    useFilterNames(FILTERNAMES_URL);
  const [filters, isFilterLoading, isFilterError] =
    useFilters(FILTERS_URL);
  const [campaignIds, setIds] = useCampaignIdsContext();
  const [{ images, links }, setData] = useDataContext();
  const [country, setCountry] = useCountryContext();
  const [template, setTemplate] = useTemplateTypeContext();
  const [campaignId, setId] = useState(null);
  const [error, setError] = useState("");

  const handleChangedImageLink = (server, name, isWithCoutry, type) => {
    if (isWithCoutry) {
      return server + country.toLowerCase() + name + type;
    } else {
      return server + name + type;
    }
  };
  const addQueryParams = (link) => {
    link.searchParams.append("utm_source", "newsletter");
    link.searchParams.append("utm_medium", "email");
    link.searchParams.append("utm_campaign", campaignIds[country]);
    return link;
  };

  const isNewsletter = () =>
    template === "newsletter"
      ? "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
        campaignIds[country]
      : "";

  const handleChangedLink = (origin, name) => {
    if (!campaignIds) return;
    setError("");

    if (origin === "category") {
      try {
        const url = new URL(name);
        const categoriesArr = url.pathname
          .split("/")
          .filter((item) => item.length > 0);

        let collectedCategory = origins[country];
        categoriesArr.forEach((element) => {
          if (element in categories) {
            collectedCategory +=
              categories[element][country.toUpperCase()] + "/";
          } else {
            setError({ message: "Category: " + element + " not found." });
          }
        });
        const generatedLink = new URL(collectedCategory);
        if (url.searchParams) {
          for (const [key, value] of url.searchParams.entries()) {
            if (key.toLowerCase() in filterNames) {
              const newKey = filterNames[key.toLocaleLowerCase()][country];
              const newValue = filters[value.toLocaleLowerCase()][country];
              generatedLink.searchParams.delete(key, value);
              generatedLink.searchParams.set(newKey, newValue);
            }
          }
        }
        return template === "newsletter"
          ? addQueryParams(generatedLink).href
          : generatedLink.href;
      } catch (error) {
        setError(error);
      }
    }

    if (origin === "content") {
      return origins[country] + "content/" + name + isNewsletter();
    }

    if (origin === "beliani") {
      return origins[country] + name + isNewsletter();
    }

    if (origin === "custom") {
      try {
        const link = new URL(name);
        link.searchParams.append("utm_source", "newsletter");
        link.searchParams.append("utm_medium", "email");
        link.searchParams.append("utm_campaign", campaignIds[country]);
        return template === "newsletter" ? link.href : name;
      } catch (error) {
        setError(error);
      }
    }
  };

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      images: prev.images.map((item) => ({
        ...item,
        link: handleChangedImageLink(
          item.server,
          item.value,
          item.isWithCoutry,
          item.file_type
        ),
      })),
    }));
  }, [country]);

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      links: prev.links.map((item) => ({
        ...item,
        link: handleChangedLink(item.origin, item.name),
      })),
    }));
  }, [country, template]);

  useEffect(() => {
    if (campaignId) {
      setIds(incrementId(campaignId));
    }
  }, [campaignId]);

  return (
    <>
      <TabsContent
        value="translations"
        className="border-none p-0 outline-none">
        <TextSidebar />
      </TabsContent>
      <TabsContent
        value="links_constructor"
        className="border-none p-0 outline-none">
        <LinkConstructor
          campaignIds={campaignIds}
          setIds={setIds}
          links={links}
          country={country}
          setData={setData}
          setId={setId}
          setError={setError}
          error={error}
          filterNames={filterNames}
          filters={filters}
          categories={categories}
          template={template}
          isNewsletter={isNewsletter}
          handleChangedLink={handleChangedLink}
        />
      </TabsContent>
      <TabsContent
        value="image_links_constructor"
        className="border-none p-0 outline-none">
        <ImageLinkConstructor
          country={country}
          images={images}
          setData={setData}
        />
      </TabsContent>
      <TabsContent value="products" className="border-none p-0 outline-none">
        <ProductsSidebar />
      </TabsContent>
    </>
  );
};

export default SidebarContent;
