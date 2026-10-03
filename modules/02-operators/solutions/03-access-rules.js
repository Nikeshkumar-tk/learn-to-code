// Solution 02.3
const age = 23;
const hasLicense = true;
const hasUnpaidFines = false;
const isMember = false;
const rentalDays = 2;

const isOldEnough = age >= 21;
const canRent = isOldEnough && hasLicense && !hasUnpaidFines;
const getsDiscount = isMember || rentalDays >= 7;
const needsDeposit = !isMember && rentalDays < 3;

console.log({ isOldEnough, canRent, getsDiscount, needsDeposit });
