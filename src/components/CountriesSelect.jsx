import { useCountryContext } from "../hooks";
import countries from "../constance/countries";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { PlusCircledIcon } from "@radix-ui/react-icons";


const CountriesSelect = () => {
  const [country, setCountry] = useCountryContext();
  return (
    <Select onValueChange={(country) => setCountry(country)} defaultValue="PL" className="text-red">
      <SelectTrigger className="w-fit">
        <PlusCircledIcon className="mr-2 h-4 w-4" />
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        {countries.map((country) => (
          <SelectItem key={country} value={country}>
            {country}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default CountriesSelect;
