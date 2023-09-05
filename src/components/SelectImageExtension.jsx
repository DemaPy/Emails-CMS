import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const SelectImageExtension = ({ onSelect }) => {
  return (
    <div className="flex">
      <Select onValueChange={onSelect}>
        <SelectTrigger className="w-[95px]">
          <SelectValue
            defaultValue={"content"}
            placeholder="File type"
          />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value=".jpg">jpg</SelectItem>
          <SelectItem value=".png">png</SelectItem>
          <SelectItem value=".gif">gif</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default SelectImageExtension;
