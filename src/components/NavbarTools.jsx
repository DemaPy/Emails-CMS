import { TabsList, TabsTrigger } from "./ui/tabs";
import { Copy } from "lucide-react";
import { DotsHorizontalIcon, ResetIcon } from "@radix-ui/react-icons";
import CountriesSelect from "./CountriesSelect";
import { Button } from "./ui/button";
import { useTemplateTypeContext } from "../hooks";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useWindowSize } from "@uidotdev/usehooks";
import OpenCampaign from "./OpenCampaign";

const NavbarTools = ({ campaignId, onCopy, onReset }) => {
  const [, setTemplate] = useTemplateTypeContext();
  const size = useWindowSize();

  return (
    <>
      <TabsList>
        <TabsTrigger
          onClick={() => setTemplate("newsletter")}
          value="newsletter"
          className="relative">
          Newsletter
        </TabsTrigger>
        <TabsTrigger onClick={() => setTemplate("landing")} value="Landing">
          Landing
        </TabsTrigger>
      </TabsList>

      {size.width < 640 ? (
        <div className="ml-auto">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button className="bg-white">
                <DotsHorizontalIcon className="text-black" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Countries</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <CountriesSelect />
              </DropdownMenuItem>
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Button className="ml-2 lg:ml-4" variant="outline" size="icon">
                  <Copy onClick={onCopy} className="h-4 w-4" />
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="ml-2 lg:ml-4" variant="outline" size="icon">
                  <ResetIcon onClick={onReset} className="h-4 w-4" />
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button
                  variant="outline"
                  onClick={() =>
                    window.open(
                      "https://www.prologistics.info/news_email.php?id=" +
                        campaignId,
                      "_blank"
                    )
                  }>
                  Open campaign
                  <OpenCampaign />
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <>
          <Button className="ml-2 lg:ml-4" variant="outline" size="icon">
            <Copy onClick={onCopy} className="h-4 w-4" />
          </Button>
          <Button className="ml-2 lg:ml-4" variant="outline" size="icon">
            <ResetIcon onClick={onReset} className="h-4 w-4" />
          </Button>
          <div className="ml-auto flex gap-2">
            <Button
              variant="outline"
              onClick={() =>
                window.open(
                  "https://www.prologistics.info/news_email.php?id=" +
                    campaignId,
                  "_blank"
                )
              }>
              Open campaign
              <OpenCampaign />
            </Button>
            <CountriesSelect />
          </div>
        </>
      )}
    </>
  );
};

export default NavbarTools;
