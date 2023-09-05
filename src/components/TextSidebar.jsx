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

const TextSidebar = () => {
  const [country, setCountry] = useCountryContext();
  const [textError, setTextError] = useState("");
  const [idx, setIdx] = useSelectedIndexContext();
  const [{ text }, setData] = useDataContext();
  const handleTextSave = (ev) => {
    try {
      const jsonText = JSON.parse(ev.target.value);
      setData((prev) => ({ ...prev, text: jsonText }));
      setTextError("");
    } catch (error) {
      setTextError(error);
    }
  };

  return (
    <>
      {text ? (
        <div className="flex items-start gap-2">
          <div className="w-full">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-2">
                <AccordionTrigger>Translations</AccordionTrigger>
                {text[country].map((item, idx) => {
                  return (
                    <AccordionContent key={idx}>
                      <div className="flex items-center gap-2">
                        <div>
                          <TextSelectionIcon
                            onClick={() => setIdx({ id: idx, type: "text" })}
                            className="w-4 h-4 cursor-pointer"
                          />
                        </div>
                        <p className="text-xs whitespace-normal">{item}</p>
                      </div>
                    </AccordionContent>
                  );
                })}
              </AccordionItem>
            </Accordion>
          </div>
          <div className="mt-6">
            <TrashIcon
              onClick={() => setData((prev) => ({ ...prev, text: null }))}
              className="w-4 h-4 cursor-pointer"
            />
          </div>
        </div>
      ) : (
        <Textarea
          onChange={handleTextSave}
          placeholder="text json..."
          id="message"
          className="resize-none min-h-[200px]"
        />
      )}
      {textError?.message && (
        <Popover>
          <PopoverTrigger>
            <Button variant="secondary">Error</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p>{textError.message}</p>
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
    </>
  );
};

export default TextSidebar;
