const currencies = {
  euro: "€",
  swissFranc: "Fr.",
  poundSterling: "£",
  hungarianForint: "Ft",
  swedishKrona: "kr",
  danishKrona: "kr.",
  czechKrona: "Kč",
  norwegianKrone: ",-",
};
const relativePriceFormat = {
  DE: {
    currency: currencies.euro,
  },
  CHDE: {
    currency: currencies.swissFranc,
  },
  AT: {
    currency: currencies.euro,
  },
  FR: {
    currency: currencies.euro,
  },
  CHFR: {
    currency: currencies.swissFranc,
  },
  IT: {
    currency: currencies.euro,
  },
  UK: {
    currency: currencies.poundSterling,
  },
  ES: {
    currency: currencies.euro,
  },
  PT: {
    currency: currencies.euro,
  },
  PL: {
    currency: "",
  },
  HU: {
    currency: currencies.hungarianForint,
  },
  NL: {
    currency: currencies.euro,
  },
  SE: {
    currency: currencies.swedishKrona,
  },
  DK: {
    currency: currencies.danishKrona,
  },
  CZ: {
    currency: currencies.czechKrona,
  },
  FI: {
    currency: currencies.euro,
  },
  NO: {
    currency: currencies.norwegianKrone,
  },
  SK: {
    currency: currencies.euro,
  },
};
const priceFormats = {
  DE: (price) => {
    return normalize(price, "DE") + " " + relativePriceFormat.DE.currency;
  },
  CHDE: (price) => {
    return normalize(price, "CHDE") + " " + relativePriceFormat.CHDE.currency;
  },
  AT: (price) => {
    return normalize(price, "AT") + " " + relativePriceFormat.AT.currency;
  },
  FR: (price) => {
    return normalize(price, "FR") + " " + relativePriceFormat.FR.currency;
  },
  // NOT ACTIVE "country", FOR CHFR I RENDER CHDE PRICES
  CHFR: (price) => {
    return normalize(price, "CHFR") + " " + relativePriceFormat.CHFR.currency;
  },
  IT: (price) => {
    return normalize(price, "IT") + " " + relativePriceFormat.IT.currency;
  },
  UK: (price) => {
    return relativePriceFormat.UK.currency + normalize(price, "UK");
  },
  ES: (price) => {
    return normalize(price, "ES") + " " + relativePriceFormat.ES.currency;
  },
  PT: (price) => {
    return normalize(price, "PT") + " " + relativePriceFormat.PT.currency;
  },
  PL: (price) => {
    return normalize(price, "PL") + relativePriceFormat.PL.currency;
  },
  HU: (price) => {
    return normalize(price, "HU") + " " + relativePriceFormat.HU.currency;
  },
  NL: (price) => {
    return relativePriceFormat.NL.currency + " " + normalize(price, "NL");
  },
  SE: (price) => {
    return normalize(price, "SE") + " " + relativePriceFormat.SE.currency;
  },
  DK: (price) => {
    return normalize(price, "DK") + " " + relativePriceFormat.DK.currency;
  },
  CZ: (price) => {
    return normalize(price, "CZ") + " " + relativePriceFormat.CZ.currency;
  },
  FI: (price) => {
    return normalize(price, "FI") + " " + relativePriceFormat.FI.currency;
  },
  NO: (price) => {
    return normalize(price, "NO") + relativePriceFormat.NO.currency;
  },
  SK: (price) => {
    return normalize(price, "SK") + " " + relativePriceFormat.SK.currency;
  },
};
const formatPrice = {
  DE: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, ".").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, ".").join("")
      }

      return price;
  },
  CHDE: (price) => {
      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, "'").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, "'").join("")
      }

      return price;
  },
  AT: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, ".").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, ".").join("")
      }


      return price;
  },
  FR: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }


      return price;
  },
  // NOT ACTIVE "country", FOR CHFR I RENDER CHDE PRICES
  CHFR: (price) => {
      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, "'").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, "'").join("")
      }

      return price;
  },
  IT: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, ".").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, ".").join("")
      }

      return price;
  },
  UK: (price) => {
      
      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, ",").join("")
      }
      
      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, ",").join("")
      }
      
      return price
  },
  ES: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, ".").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, ".").join("")
      }

      return price;
  },
  PT: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")
      
      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, ".").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, ".").join("")
      }


      return price;
  },
  PL: (price) => {

      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }

      return price 
  },
  HU: (price) => {
      price = price.replace(".00", "")
      price = price.replace(".99", "")

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, " ").toSpliced(5, 0, " ").join("")
      }

      if (price.length === 6) {
          price = price.split("").toSpliced(3, 0, " ").join("")
      }

      if (price.length === 5) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 4) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }


      return price;
  },
  NL: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, ".").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, ".").join("")
      }

      return price;
  },
  SE: (price) => {
      price = price.replace(".00", "")

      if (price.length === 5) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 4) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }


      return price;
  },
  DK: (price) => {
      price = price.replace(".00", "")

      if (price.length === 5) {
          price = price.split("").toSpliced(2, 0, ".").join("")
      }

      if (price.length === 4) {
          price = price.split("").toSpliced(1, 0, ".").join("")
      }

      return price;
  },
  CZ: (price) => {
      price = price.replace(".00", "")

      if (price.length === 5) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 4) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }


      return price;
  },
  FI: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }

      return price;
  },
  NO: (price) => {
      price = price.replace(".00", "")

      if (price.length === 5) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 4) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }


      return price 
  },
  SK: (price) => {
      price = price.replace(".00", ",00")
      price = price.replace(".99", ",99")

      if (price.length === 8) {
          price = price.split("").toSpliced(2, 0, " ").join("")
      }

      if (price.length === 7) {
          price = price.split("").toSpliced(1, 0, " ").join("")
      }

      return price;
  },
}

function normalize(price, country) {
  return formatPrice[country](price)
}

export function parsePrice(pricesData) {

  for (const key in pricesData) {
    const product = pricesData[key];

    pricesData[key] = {
      ...product,
      "lowPrice": priceFormats[product.country](product.lowPrice),
      "highPrice": product.highPrice !== null ? priceFormats[product.country](product.highPrice): "",
    }
  }
  return pricesData
}

