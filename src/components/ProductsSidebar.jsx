import React, { useState } from "react";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Separator } from "@radix-ui/react-select";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { TextSelectionIcon, TrashIcon } from "lucide-react";
import {
  useCountryContext,
  useDataContext,
  useSelectedIndexContext,
} from "../hooks";

const ProductsSidebar = () => {
  const [idx, setIdx] = useSelectedIndexContext();
  const [country, setCountry] = useCountryContext();
  const [{ products }, setData] = useDataContext();
  const [productsError, setProductsError] = useState("");

  const handleProductsSave = (ev) => {
    try {
      const jsonProducts = JSON.parse(ev.target.value);
      setData((prev) => ({ ...prev, products: jsonProducts }));
      setProductsError("");
    } catch (error) {
      setProductsError(error);
    }
  };

  return (
    <>
      {products ? (
        <div className="flex items-start gap-2">
          <div className="w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>Products</AccordionTrigger>
                {products
                  .filter((product) => product.country === country)
                  .map((item, idx) => {
                    return (
                      <AccordionContent key={idx}>
                        <div className="flex items-center gap-2">
                          <TextSelectionIcon
                            onClick={() => setIdx({ id: idx, type: "product" })}
                            className="w-4 h-4 cursor-pointer"
                          />
                          <p className="text-xs">{item.name}</p>
                        </div>
                      </AccordionContent>
                    );
                  })}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-6">
            <TrashIcon
              onClick={() => setData((prev) => ({ ...prev, products: null }))}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <Textarea
          onChange={handleProductsSave}
          placeholder="products json..."
          id="message"
          className="resize-none min-h-[200px]"
        />
      )}
      <p className="text-sm text-muted-foreground mt-4 text-red-300">
        {productsError?.message && (
          <Popover>
            <PopoverTrigger>
              <Button variant="secondary">Error</Button>
            </PopoverTrigger>
            <PopoverContent>
              <p>{productsError.message}</p>
              <Separator className="my-3" />
              <Button className="w-full">
                <a
                  target="_blank"
                  href="https://jsonformatter.curiousconcept.com/#">
                  Open json formatter and fix JSON
                </a>
              </Button>
            </PopoverContent>
          </Popover>
        )}
      </p>
    </>
  );
};

export default ProductsSidebar;
