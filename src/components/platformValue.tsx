import LinkIcon from "./linkIcon";

type PlatformValueProps = {
  title: string;
  icon: string;
};

const PlatformValue = ({ title, icon }: PlatformValueProps) => {
  return (
    <div className="flex gap-2 items-center text-[#737373]">
      <div className="pt-[0.2rem]">
        <LinkIcon pathString={icon} />
      </div>
      <span className="inline-block text-md pt-1">{title}</span>
    </div>
  );
};

export default PlatformValue;
