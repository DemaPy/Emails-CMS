import { useCallback, useMemo, useState } from "react";
import { useSelectedIndexContext } from "../../hooks";
import CampaignIds from "../../components/CampaignIds";
import SelectOrigin from "../../components/SelectOrigin";
import Link from "../../components/Link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import origins from "../../constance/origins";
import { TextSelectionIcon, TrashIcon } from "lucide-react";

const LinkConstructor = ({
  setId,
  setIds,
  campaignIds,
  filters,
  filterNames,
  country,
  links,
  setData,
  categories,
  error,
  setError,
  handleChangedLink,
  isNewsletter,
  template,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [origin, setOrigin] = useState("");
  const [value, setValue] = useState("");
  const [idx, setIdx] = useSelectedIndexContext();

  const handleLinkAdd = (name) => {
    const generatedLink = {
      origin,
      name,
      link: handleChangedLink(origin, name),
    };

    setData((prev) => ({ ...prev, links: [...prev.links, generatedLink] }));
  };

  const handleDelete = (index) => {
    setData((prev) => {
      return {
        ...prev,
        links: prev.links.filter((link, i) => i !== index),
      };
    });
  };

  const addQueryParams = (link) => {
    link.searchParams.append("utm_source", "newsletter");
    link.searchParams.append("utm_medium", "email");
    link.searchParams.append("utm_campaign", campaignIds[country]);
    return link;
  };

  const handleLink = useMemo(() => {
    setError("");
    if (!campaignIds) return;
    if (origin === "category") {
      try {
        const url = new URL(value);
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
      return (
        `https://www.beliani.${country.toLowerCase()}/content/` +
        value +
        isNewsletter()
      );
    }
    if (origin === "beliani") {
      return (
        `https://www.beliani.${country.toLowerCase()}/` + value + isNewsletter()
      );
    }
    if (origin === "custom") {
      try {
        const link = new URL(value);
        return template === "newsletter" ? addQueryParams(link).href : value;
      } catch (error) {
        setError(error);
      }
    }
  }, [country, origin, value, template]);

  return (
    <div>
      <CampaignIds setIds={setIds} campaignIds={campaignIds} country={country} setId={setId} />
      {campaignIds && (
        <div className="flex w-full items-center space-x-1 mt-3">
          <SelectOrigin onSelect={setOrigin} />
          <Link
            error={error}
            value={value}
            setValue={setValue}
            setLink={handleLinkAdd}
          />
        </div>
      )}
      {(origin || value) && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Hide" : "Show"} link to be generated
            </AccordionTrigger>
            <AccordionContent>{handleLink}</AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
      {links.length > 0 && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Links</AccordionTrigger>
            {links.map((item, idx) => {
              return (
                <AccordionContent key={idx}>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <TrashIcon
                        onClick={() => handleDelete(idx)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <TextSelectionIcon
                        onClick={() => setIdx({ id: idx, type: "link" })}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </div>
                    <p className="text-xs truncate md:max-w-full max-w-[320px]">
                      {item.link}
                    </p>
                  </div>
                </AccordionContent>
              );
            })}
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
};

export default LinkConstructor;
