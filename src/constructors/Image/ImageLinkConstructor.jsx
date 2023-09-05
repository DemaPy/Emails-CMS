import SelectServer from "../../components/SelectServer";
import { useSelectedIndexContext } from "../../hooks";
import React, { useMemo, useState } from "react";
import SelectWithCountry from "../../components/SelectWithCountry";
import ImageLink from "../../components/ImageLink";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { TextSelectionIcon, TrashIcon } from "lucide-react";

const ImageLinkConstructor = ({ country, images, setData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [idx, setIdx] = useSelectedIndexContext();
  const [value, setValue] = useState("");
  const [file_type, setFileType] = useState("");
  const [isWithCoutry, setIsWithcountry] = useState(true);
  const [server, setServer] = useState("");

  const handleImageLinkAdd = () => {
    const generateImageLink = {
      server,
      isWithCoutry,
      file_type,
      value,
      link:
        server +
        (isWithCoutry
          ? country.toLowerCase() + value + file_type
          : value + file_type),
    };
    setData((prev) => ({
      ...prev,
      images: [...prev.images, generateImageLink],
    }));
  };

  const handleDelete = (index) => {
    setData((prev) => {
      return {
        ...prev,
        images: prev.images.filter((link, i) => i !== index),
      };
    });
  };

  const handleImageLink = useMemo(() => {
    if (isWithCoutry) {
      return server + country.toLowerCase() + value + file_type;
    } else {
      return server + value + file_type;
    }
  }, [country, isWithCoutry, server, value, file_type]);

  return (
    <div>
      <div className="flex md:flex-row flex-col w-full items-center space-x-1 mt-3">
        <SelectServer onSelect={setServer} />
        <SelectWithCountry onSelect={setIsWithcountry} />
        <ImageLink
          onSelect={(type) => setFileType(type)}
          value={value}
          setValue={setValue}
          setLink={handleImageLinkAdd}
          isDisabled={value.length > 0 && file_type.length > 0}
        />
      </div>

      {server && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? "Hide" : "Show"} image link to be generated
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex items-center md:flex-row flex-col">
                <div className="flex md:w-1/3 w-full md:mb-0 mb-4 md:mr-4 mr-0">
                  <img className="object-cover" src={handleImageLink} alt="" />
                </div>
                {handleImageLink}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}

      {images.length > 0 && (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Links</AccordionTrigger>
            {images.map((item, idx) => {
              return (
                <AccordionContent key={idx}>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-2">
                      <TrashIcon
                        onClick={() => handleDelete(idx)}
                        className="w-4 h-4 cursor-pointer"
                      />
                      <TextSelectionIcon
                        onClick={() => setIdx({ id: idx, type: "image" })}
                        className="w-4 h-4 cursor-pointer"
                      />
                    </div>
                    <p className="text-xs">{item.link}</p>
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

export default ImageLinkConstructor;
