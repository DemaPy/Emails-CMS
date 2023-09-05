import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const SelectOrigin = ({ onSelect }) => {
  return (
    <div className="flex">
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-[180px]">
          <SelectValue
            defaultValue={"content"}
            placeholder="Configure origin"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="custom">
            Custom
          </SelectItem>
          <SelectItem value="beliani">
            Beliani shop
          </SelectItem>
          <SelectItem value="content">
            Beliani content
          </SelectItem>
          <SelectItem value="category">
            Category
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectOrigin;
