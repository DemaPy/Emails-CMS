import countries from "../../constance/countries";

export function incrementId(id) {
  const relativeIdToCountires = {};

  countries.forEach((country) => {
    relativeIdToCountires[country] = id;
    id++;
  });

  return relativeIdToCountires;
}
