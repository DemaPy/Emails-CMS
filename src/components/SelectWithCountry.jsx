import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const SelectWithCountry = ({ onSelect }) => {
    return (
      <div className="flex md:w-fit w-full md:mb-0 mb-2">
        <Select onValueChange={onSelect}>
          <SelectTrigger className="md:w-[130px] w-full">
            <SelectValue
              defaultValue={"content"}
              placeholder="With country?"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={true}>With</SelectItem>
            <SelectItem value={false}>Without</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
}

export default SelectWithCountry