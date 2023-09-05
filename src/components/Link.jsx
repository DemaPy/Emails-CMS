import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

const Link = ({ error, setLink, value, setValue }) => {
  return (
    <div className="flex w-full items-center space-x-2">
      <div className="relative w-full">
        <Input
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
          type="text"
          placeholder="link to generate..."
        />
        <p className="text-xs mt-1 absolute text-red-300">{error.message}</p>
      </div>
      <Button
        disabled={value.length === 0}
        onClick={() => setLink(value)}
        type="submit"
        className="whitespace-nowrap">
        Save link
      </Button>
    </div>
  );
};

export default Link;
