// ALWAYS use this → so other files can import it
export function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist")) || [];
}

export function addToWishlist(item) {
  const list = getWishlist();

  const normalizedId = String(item.id);

  // check if already exists
  const exists = list.some((w) => String(w.id) === normalizedId);

  if (!exists) {
    list.push({
      ...item,
      id: normalizedId,    // normalize id
    });

    localStorage.setItem("wishlist", JSON.stringify(list));
  }
}

export function removeFromWishlist(id) {
  const normalizedId = String(id);

  const updated = getWishlist().filter(
    (w) => String(w.id) !== normalizedId
  );

  localStorage.setItem("wishlist", JSON.stringify(updated));
}
