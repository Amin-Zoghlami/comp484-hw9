// ==========================
// Part 1: Date Display
// ==========================

// Creating a Date object
const currentDate = new Date();

// Extracting month (0-based so adding 1), day, and year
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// Add a leading zero to months and days with a single digit (1-9)
const formattedMonth = String(month).padStart(2, "0");
const formattedDay = String(day).padStart(2, "0");

// Building final string and displaying it
const dateMessage =
  "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

document.getElementById("dateOutput").textContent = dateMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

const value1 = "4";
const value2 = "four";
const value3 = "2.7";
const value4 = "66";
