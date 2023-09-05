import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import NavbarTools from "../components/NavbarTools";
import { Tabs, TabsContent } from "../components/ui/tabs";
import { useEffect, useRef } from "react";
import {
  useCampaignIdsContext,
  useCountryContext,
  useDataContext,
  useSelectedIndexContext,
  useTemplateTypeContext,
} from "../hooks";
import header from "../constance/header";
import footer from "../constance/footer";
import { parsePrice } from "../lib/utils/price";
import { useToast } from "../components/ui/use-toast";
import { Toaster } from "../components/ui/toaster";

const RenderArea = ({ html, setHtml, setStyle, style }) => {
  const ref = useRef(null);
  const { toast } = useToast();

  const [campaignIds, setIds] = useCampaignIdsContext();
  const [{ id, type }, setIdx] = useSelectedIndexContext();
  const [template, setTemplate] = useTemplateTypeContext();
  const [{ text, links, images, products }, setData] = useDataContext();
  const [country, setCountry] = useCountryContext();

  const findProductToUpdate = (id) => {
    return parsePrice(
      products.filter((product) => product.country === country)
    )[id];
  };

  const getProductsLength = () => {
    return products.filter((product) => product.country === country).length;
  };

  const isNewsletter = () =>
    template === "newsletter"
      ? "?utm_source=newsletter&utm_medium=email&utm_campaign=" +
        campaignIds[country]
      : "";

  useEffect(() => {
    if (!ref.current) return;

    function updateProduct(node) {
      const productData = findProductToUpdate(
        node.getAttribute("data-order-product")
      );

      const productHref = node.querySelector("#productHref");
      const productName = node.querySelector("#productTitle");
      const productPriceLow = node.querySelector("#productLowPrice");
      const productPriceHigh = node.querySelector("#productHighPrice");

      if (productHref) {
        productHref.href = productData.href + isNewsletter();
      }

      if (productName) {
        productName.innerText = productData.name;
      }

      if (productPriceLow) {
        productPriceLow.innerText = productData.lowPrice + " ";
      }
      if (productPriceHigh) {
        productPriceHigh.innerText = productData.highPrice || "";
      }
    }

    function handleClick(ev) {
      ev.preventDefault();

      if (ev.target.nodeName === "SPAN") {
        if (type === "text") {
          ev.target.setAttribute("data-order-text", id);
        }

        if (type === "product") {
          const product = ev.target.closest("#product");
          product.setAttribute("data-order-type", type);
          product.setAttribute("data-order-product", id);
        }

        if (type === "href") {
          ev.target.setAttribute("data-order-type", type);
          ev.target.setAttribute("data-order-product", id);
        }

        if (products) {
          if (getProductsLength() > 0) {
            const nodesToUpdate = Array.from(
              ref.current.querySelectorAll("[data-order-product]")
            );

            nodesToUpdate.forEach((node) => {
              updateProduct(node);
            });
          }
        }

        if (text) {
          if (text[country].length > 0) {
            const nodesToUpdate = Array.from(
              ref.current.querySelectorAll("[data-order-text]")
            );

            nodesToUpdate.forEach((node) => {
              node.innerText =
                text[country][node.getAttribute("data-order-text")];
            });
          }
        }
      }

      if (ev.target.nodeName === "IMG") {
        if (type === "image") {
          ev.target.setAttribute("data-order-image", id);
        }

        if (images.length > 0) {
          Array.from(
            ref.current.querySelectorAll("[data-order-image]")
          ).forEach((node) => {
            node.src = images[node.getAttribute("data-order-image")]?.link;
          });
        }
      }

      if (ev.target.nodeName === "A") {
        if (type === "text") {
          ev.target.setAttribute("data-order-text", id);
        }

        if (type === "link") {
          ev.target.setAttribute("data-order-link", id);
        }

        if (text) {
          if (text[country].length > 0) {
            Array.from(
              ref.current.querySelectorAll("[data-order-text]")
            ).forEach((node) => {
              node.innerText =
                text[country][node.getAttribute("data-order-text")];
            });
          }
        }

        if (links.length > 0) {
          Array.from(ref.current.querySelectorAll("[data-order-link]")).forEach(
            (node) => {
              node.href = links[node.getAttribute("data-order-link")]?.link;
            }
          );
        }
      }
    }

    function handleDBClick(ev) {
      if (ev.target.nodeName === "IMG") {
        const parentNode = ev.target.parentNode;
        if (parentNode.nodeName == "A") {
          if (type === "link") {
            parentNode.setAttribute("data-order-link", id);
          }

          if (type === "href") {
            parentNode.setAttribute("data-order-type", type);
            parentNode.setAttribute("data-order-product", id);
          }

          if (products) {
            if (getProductsLength() > 0) {
              const nodesToUpdate = Array.from(
                ref.current.querySelectorAll("[data-order-product]")
              );

              nodesToUpdate.forEach((node) => {
                node.href =
                  products[node.getAttribute("data-order-product")][
                    node.getAttribute("data-order-type")
                  ];
              });
            }
          }

          if (links.length > 0) {
            Array.from(
              ref.current.querySelectorAll("[data-order-link]")
            ).forEach((node) => {
              node.href = links[node.getAttribute("data-order-link")]?.link;
            });
          }
        }
      }
    }

    if (images.length > 0) {
      Array.from(ref.current.querySelectorAll("[data-order-image]")).forEach(
        (node) => {
          node.src = images[node.getAttribute("data-order-image")]?.link;
        }
      );
    }

    if (links.length > 0) {
      Array.from(ref.current.querySelectorAll("[data-order-link]")).forEach(
        (node) => {
          node.href = links[node.getAttribute("data-order-link")]?.link;
        }
      );
    }

    if (text) {
      if (text[country].length > 0) {
        const nodesToUpdate = Array.from(
          ref.current.querySelectorAll("[data-order-text]")
        );

        nodesToUpdate.forEach((node) => {
          node.innerText = text[country][node.getAttribute("data-order-text")];
        });
      }
    }

    if (products) {
      if (getProductsLength() > 0) {
        const nodesToUpdate = Array.from(
          ref.current.querySelectorAll("[data-order-product]")
        );

        nodesToUpdate.forEach((node) => {
          if (node.getAttribute("data-order-type") === "href") {
            node.href =
              products[node.getAttribute("data-order-product")][
                node.getAttribute("data-order-type")
              ];
          }

          if (node.getAttribute("data-order-type") === "product") {
            updateProduct(node);
          }
        });
      }
    }

    ref.current.addEventListener("click", handleClick);
    ref.current.addEventListener("dblclick", handleDBClick);

    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener("click", handleClick);
      ref.current.removeEventListener("dblclick", handleDBClick);
    };
  }, [html, id, text, links, country, images, products, template]);

  const handleReset = () => {
    setHtml("");
    setStyle("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      `
                    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
                          <head>
                              <title>Beliani</title>
                              <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                              <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic-ext,latin-ext" rel="stylesheet">
                              ${style}
                              <!--[if gte mso 9]>
                                      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                                          <v:fill type="tile" color="#ececec">
                                      </v:background>
                                  <![endif]-->
                              <!--[if gte mso 10]>
                                      <xml>
                                          <o:OfficeDocumentSettings>
                                          <o:AllowPNG/>
                                          <o:PixelsPerInch>96</o:PixelsPerInch>
                                          </o:OfficeDocumentSettings>
                                      </xml>
                                  <![endif]-->
                          </head>

                          <body class="body" width="100%" style="width:100% !important; padding:0 !important; margin:0 auto !important; font-family: 'Open Sans', sans-serif!important; font-size:13px; color:#000000; text-align:left; background-color:#ececec;">
                          ${header[country](template, campaignIds[country])}
                          ${ref.current.innerHTML}
                          ${footer[country]("", template, campaignIds[country])}
                          </body>
                      </html>
                  `
    );
    toast({
      description: "Newsletter successfully copied",
    });
  };

  return (
    <div className="xl:col-span-3 lg:col-span-6 bg-zinc-400 overflow-y-auto">
      <div className="p-2 lg:px-8">
        <Tabs defaultValue="newsletter" className="h-full space-y-6">
          <div className="space-between flex sticky top-4">
            {html && style && (
              <NavbarTools
                campaignId={campaignIds[country]}
                onCopy={handleCopy}
                onReset={handleReset}
              />
            )}
          </div>
          {html && style ? (
            <>
              <TabsContent
                value="newsletter"
                className="border-none p-0 outline-none">
                <div dangerouslySetInnerHTML={{ __html: style }}></div>
                <div dangerouslySetInnerHTML={{ __html: header[country](template, campaignIds[country]) }} />
                <div
                  ref={ref}
                  dangerouslySetInnerHTML={{
                    __html: html
                  }}
                />
                <div dangerouslySetInnerHTML={{ __html: footer[country]("", template, campaignIds[country]) }} />
              </TabsContent>
              <TabsContent
                value="Landing"
                className="border-none p-0 outline-none">
                <div ref={ref} dangerouslySetInnerHTML={{ __html: html }} />
              </TabsContent>
            </>
          ) : (
            <>
              {campaignIds && (
                <div className="grid w-full gap-4 pt-36">
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-4xl h-fit text-white font-bold">
                      Set html template
                    </Label>
                    <Textarea
                      onChange={(ev) => setHtml(ev.target.value)}
                      placeholder="html code..."
                      id="message"
                      className="resize-none min-h-[400px]"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="message"
                      className="text-4xl h-fit text-white font-bold">
                      Set style template
                    </Label>
                    <Textarea
                      onChange={(ev) => setStyle(ev.target.value)}
                      placeholder="style code..."
                      id="message"
                      className="resize-none min-h-[400px]"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </Tabs>
      </div>
      <Toaster />
    </div>
  );
};

export default RenderArea;
