





export const useUpdate = ({ dependencies, ref }) => {

  useEffect(() => {
    if (!ref.current) return;

    function handleClick(ev) {
      ev.preventDefault();

      if (ev.target.nodeName === "SPAN") {
        if (type === "text") {
          ev.target.setAttribute("data-order-text", index);
        }

        if (type === "lowPrice") {
          ev.target.setAttribute("data-order-type", type);
          ev.target.setAttribute("data-order-product", index);
        }

        if (type === "highPrice") {
          ev.target.setAttribute("data-order-type", type);
          ev.target.setAttribute("data-order-product", index);
        }

        if (type === "href") {
          ev.target.setAttribute("data-order-type", type);
          ev.target.setAttribute("data-order-product", index);
        }

        if (products.length > 0) {
          Array.from(
            ref.current.querySelectorAll("[data-order-product]")
          ).forEach((node) => {
            node.innerText =
              products[node.getAttribute("data-order-product")][
                node.getAttribute("data-order-type")
              ];
          });
        }

        if (translations.length > 0) {
          Array.from(ref.current.querySelectorAll("[data-order-text]")).forEach(
            (node) => {
              node.innerText =
                translations[node.getAttribute("data-order-text")];
            }
          );
        }
      }

      if (ev.target.nodeName === "IMG") {
        if (type === "image") {
          ev.target.setAttribute("data-order-image", index);
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
          ev.target.setAttribute("data-order-text", index);
        }

        if (type === "link") {
          ev.target.setAttribute("data-order-link", index);
        }

        if (translations.length > 0) {
          Array.from(ref.current.querySelectorAll("[data-order-text]")).forEach(
            (node) => {
              node.innerText =
                translations[node.getAttribute("data-order-text")];
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
      }
    }

    function handleDBClick(ev) {
      if (ev.target.nodeName === "IMG") {
        const parentNode = ev.target.parentNode;
        if (parentNode.nodeName == "A") {
          if (type === "link") {
            parentNode.setAttribute("data-order-link", index);
          }

          if (type === "href") {
            parentNode.setAttribute("data-order-type", type);
            parentNode.setAttribute("data-order-product", index);
          }

          if (products.length > 0) {
            Array.from(
              ref.current.querySelectorAll("[data-order-product]")
            ).forEach((node) => {
              node.href =
                products[node.getAttribute("data-order-product")][
                  node.getAttribute("data-order-type")
                ];
            });
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

    if (translations.length > 0) {
      Array.from(ref.current.querySelectorAll("[data-order-text]")).forEach(
        (node) => {
          node.innerText = translations[node.getAttribute("data-order-text")];
        }
      );
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

    if (products.length > 0) {
      Array.from(ref.current.querySelectorAll("[data-order-product]")).forEach(
        (node) => {
          if (node.getAttribute("data-order-type") === "href") {
            node.href =
              products[node.getAttribute("data-order-product")][
                node.getAttribute("data-order-type")
              ];
          }

          if (node.getAttribute("data-order-type") === "highPrice") {
            node.innerText =
              products[node.getAttribute("data-order-product")][
                node.getAttribute("data-order-type")
              ];
          }

          if (node.getAttribute("data-order-type") === "lowPrice") {
            node.innerText =
              products[node.getAttribute("data-order-product")][
                node.getAttribute("data-order-type")
              ];
          }
        }
      );
    }

    ref.current.addEventListener("click", handleClick);
    ref.current.addEventListener("dblclick", handleDBClick);

    return () => {
      if (!ref.current) return;
      ref.current.removeEventListener("click", handleClick);
      ref.current.removeEventListener("dblclick", handleDBClick);
    };
  }, [...dependencies]);
}