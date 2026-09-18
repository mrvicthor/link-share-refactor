import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import EditForm from "@/components/form/editForm.tsx";
import LinkIcon from "./linkIcon";
import { getMatchingColor } from "../helpers/getMatchingColor";
import { PLATFORM_OPTIONS, type Platform } from "../domain/platform";

type Props = {
  id: string;
  platform: Platform;
  url: string;
  displayOrder: number;
};

const LinkItem = ({ id, url, platform, displayOrder }: Props) => {
  const option = PLATFORM_OPTIONS.find((option) => option.value === platform)!;
  const color = getMatchingColor(option.label);

  return (
    <li
      style={{ backgroundColor: color }}
      className={`p-2 rounded-md flex items-center cursor-pointer ${
        platform === "FRONTENDMENTOR" ? "border text-black" : "text-white"
      }`}
    >
      <Dialog>
        <DialogTrigger className="w-full flex gap-1 items-center">
          <LinkIcon
            color={platform === "FRONTENDMENTOR" ? "black" : "white"}
            pathString={option?.icon as string}
          />
          <span className=" block text-xs">{option?.label}</span>
        </DialogTrigger>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>Edit or Delete link</DialogTitle>
            <DialogDescription>
              Make changes to your link here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <EditForm
            id={id}
            platform={platform}
            url={url}
            displayOrder={displayOrder}
          />
        </DialogContent>
      </Dialog>
      <a
        href={`${url}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${
          platform === "FRONTENDMENTOR" ? "text-black" : "text-white"
        } ml-auto`}
      >
        <LinkIcon
          color={platform === "FRONTENDMENTOR" ? "black" : "white"}
          pathString="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
        />
      </a>
    </li>
  );
};

export default LinkItem;
