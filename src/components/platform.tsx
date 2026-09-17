import { SelectItem } from "./ui/select";

import LinkIcon from "./linkIcon";
type PlatformProps = {
  title: string;
  icon: string;
};
const Platform = ({ title, icon }: PlatformProps) => {
  return (
    <SelectItem value={title} className="py-2">
      <div className="flex gap-2 items-center text-[#737373]">
        <div className="pt-[0.2rem]">
          <LinkIcon pathString={icon} />
        </div>

        <span className="inline-block text-md pt-1">{title}</span>
      </div>
    </SelectItem>
  );
};

export default Platform;
