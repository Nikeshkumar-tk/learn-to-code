import { config } from "../config.js";

export function formatMoney(amount) {
  return `${config.currency}${amount.toFixed(2)}`;
}

export function sumBy(items, getNumber) {
  return items.reduce((sum, item) => sum + getNumber(item), 0);
}
