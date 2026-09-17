import type { Link } from "../domain/user";

export const reorderLinks = (links: Link[], movedLink: Link) => {
  const withoutMoved = links.filter((link) => link.id !== movedLink.id);
  const updated = withoutMoved.map((link) => {
    const currentOrder = link.displayOrder;
    const oldOrder =
      links.find((link) => link.id === movedLink.id)?.displayOrder ??
      currentOrder;
    const newOrder = movedLink.displayOrder;
    if (currentOrder > oldOrder && currentOrder <= newOrder) {
      return { ...link, displayOrder: currentOrder - 1 };
    }
    if (currentOrder < oldOrder && currentOrder >= newOrder) {
      return { ...link, displayOrder: currentOrder + 1 };
    }
    return link;
  });

  return [...updated, movedLink].sort(
    (a, b) => a.displayOrder - b.displayOrder,
  );
};
