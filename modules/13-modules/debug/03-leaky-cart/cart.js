// One cart module, used by the "web" and "mobile" features for DIFFERENT customers.
export const items = [];

export function addItem(item) {
  items.push(item);
}
