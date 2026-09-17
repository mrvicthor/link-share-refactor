import { getMatchingColor } from "@/helpers/getMatchingColor.ts";
import { type Platform, PLATFORM_OPTIONS } from "@/domain/platform.ts";
import LinkIcon from "@/components/linkIcon.tsx";

type Props = {
  url: string;
  platform: Platform;
};
const CardLink = ({ url, platform }: Props) => {
  const option = PLATFORM_OPTIONS.find((option) => option.value === platform)!;
  const color = getMatchingColor(option.label);

  return (
    <li
      style={{ backgroundColor: color }}
      className={`p-2 rounded-md  cursor-pointer w-59.25 ${
        option?.label === "Frontend Mentor" ? "border text-black" : "text-white"
      }`}
    >
      <a
        href={`${url}`}
        target="_blank"
        rel="noopener"
        className={`flex items-center `}
      >
        <LinkIcon
          color={option?.label === "Frontend Mentor" ? "black" : "white"}
          pathString={option?.icon as string}
        />
        <span className="block text-xs">{option?.label}</span>
        <div className="ml-auto">
          <LinkIcon
            color={option?.label === "Frontend Mentor" ? "black" : "white"}
            pathString="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
          />
        </div>
      </a>
    </li>
  );
};

export default CardLink;
