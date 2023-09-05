import { TabsList, TabsTrigger } from "./ui/tabs";

const SidebarTools = () => {
  return (
    <TabsList className="w-full">
      <TabsTrigger value="translations" className="relative w-full">
        Translations
      </TabsTrigger>
      <TabsTrigger value="links_constructor" className="relative w-full">
        Links
      </TabsTrigger>
      <TabsTrigger value="image_links_constructor" className="w-full">Images</TabsTrigger>
      <TabsTrigger value="products" className="w-full">Products</TabsTrigger>
    </TabsList>
  );
};

export default SidebarTools;
