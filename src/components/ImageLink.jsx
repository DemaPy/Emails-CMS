import { Input } from "../components/ui/input"
import { Button } from "../components/ui/button"
import SelectImageExtension from "./SelectImageExtension"

const ImageLink = ({ isDisabled, onSelect, setLink, value, setValue }) => {
  return (
    <div className="flex w-full items-center space-x-1">
    <Input
      value={value}
      onChange={(ev) => setValue(ev.target.value)}
      type="text"
      placeholder="link to generate..."
    />
    <SelectImageExtension onSelect={onSelect} />
    <Button
      disabled={!isDisabled}
      onClick={() => setLink(value)}
      type="submit"
      className="whitespace-nowrap">
      Save
    </Button>
  </div>
  )
}

export default ImageLink