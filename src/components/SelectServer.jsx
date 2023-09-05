import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

const SelectServer = ({ onSelect }) => {
    return (
      <div className="flex md:w-fit w-full md:mb-0 mb-2">
        <Select onValueChange={onSelect}>
          <SelectTrigger className="md:w-fit w-full whitespace-nowrap">
            <SelectValue
              defaultValue={"content"}
              placeholder="Server"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="https://beliani.info/newsletter/2022/">Beliani info</SelectItem>
            <SelectItem value="https://upload.pictureserver.net/static/">Pictureserver</SelectItem>
          </SelectContent>
        </Select>
      </div>
    );
}

export default SelectServer