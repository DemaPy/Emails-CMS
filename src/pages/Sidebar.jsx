import SidebarTools from "../components/SidebarTools";
import { Tabs } from "../components/ui/tabs";
import SidebarContent from "../components/SidebarContent";

const Sidebar = () => {
  return (
    <div className="xl:col-span-3 lg:col-span-6 bg-red-200 lg:p-4 sm:p-2 p-1 bg-white">
      <div className="sticky" style={{ width: "inherit" }}>
        <Tabs defaultValue="links_constructor" className="h-full space-y-6">
          <SidebarTools />
          <SidebarContent />
        </Tabs>
      </div>
    </div>
  );
};

export default Sidebar;
