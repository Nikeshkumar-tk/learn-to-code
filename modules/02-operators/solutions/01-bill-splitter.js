// Solution 02.1
const billTotal = 87.5;
const tipPercent = 15;
const people = 3;

const tipAmount = billTotal * (tipPercent / 100);
const totalWithTip = billTotal + tipAmount;
const perPerson = Math.round((totalWithTip / people) * 100) / 100;

console.log(`Each person pays $${perPerson}`);
