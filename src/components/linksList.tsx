import { Reorder } from "motion/react";
import LinkItem from "@/components/linkItem.tsx";
import { containerVariants } from "@/helpers";
import { useUserContext } from "@/hooks/useUser";
import type { Link } from "@/domain/user";

export function LinksList() {
  const { user, dispatch } = useUserContext();
  const links = user?.links;

  const handleDragEnd = (newOrder: Link[]) => {
    if (!links) return;
    let movedLink: Link | undefined;
    let maxDelta = -1;
    newOrder.forEach((link, index) => {
      const oldIndex = links.findIndex((l) => l.id === link.id);
      const delta = Math.abs(index - oldIndex);
      if (delta > maxDelta) {
        maxDelta = delta;
        movedLink = { ...link, displayOrder: index };
      }
    });
    if (movedLink) {
      dispatch({
        type: "reorder_link",
        link: movedLink,
      });
    }
  };

  return (
    <Reorder.Group
      as="ul"
      axis="y"
      values={links!}
      onReorder={handleDragEnd}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="phone-content absolute lg:top-56 left-[50%] translate-x-[-50%] w-47.25 space-y-3 overflow-y-auto h-60"
    >
      {links?.map((link) => (
        <Reorder.Item
          key={link.id}
          value={link}
          className="cursor-grab active:cursor-grabbing"
        >
          <LinkItem
            id={link.id}
            platform={link.platform}
            url={link.url}
            displayOrder={link.displayOrder}
          />
        </Reorder.Item>
      ))}

      {[...Array(4)].map(
        (_, index) =>
          links!.length < index + 2 && (
            <li
              key={index}
              className="bg-[#d9d9d9] opacity-50 h-8 rounded-md"
            />
          ),
      )}
    </Reorder.Group>
  );
}
