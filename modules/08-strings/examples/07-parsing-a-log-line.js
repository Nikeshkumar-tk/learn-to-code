// Putting it together: pull structured data out of a line of text.
const line = "2026-03-14 09:26:53 ERROR [payments] Card declined for order #A-1042";

const [date, time, level, ...rest] = line.split(" ");
const message = rest.join(" ");            // glue the remaining words back together

const service = message.slice(message.indexOf("[") + 1, message.indexOf("]"));
const orderId = message.slice(message.indexOf("#") + 1);

const entry = { date, time, level, service, orderId };
console.log(entry);

if (entry.level === "ERROR") {
  console.log(`🚨 ${service} failed for ${orderId} at ${time}`);
}
