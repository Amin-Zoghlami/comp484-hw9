// ==========================
// Part 1: Date Display
// ==========================

// Creating a Date object
const currentDate = new Date();

// Extracting month (0-based so adding 1), day, and year
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

// If/else statement 1
// Checking whether today is a weekend (0 = Sunday, 6 = Saturday)
const dayOfWeek = currentDate.getDay();
let dayTypeMessage = "";
if (dayOfWeek === 0 || dayOfWeek === 6) {
  dayTypeMessage = "It's the weekend!";
} else {
  dayTypeMessage = "It's a weekday.";
}

// Add a leading zero to months and days with a single digit (1-9)
const formattedMonth = String(month).padStart(2, "0");
const formattedDay = String(day).padStart(2, "0");

// Building final string and displaying it
const dateMessage =
  "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

document.getElementById("dateOutput").textContent =
  dateMessage + ". " + dayTypeMessage;

// ==========================
// Part 2: Number Conversion
// ==========================

// Converting each value with Number() then checking with .isNaN() and .isInteger()
const value1 = "4";
const converted1 = Number(value1);
const result1 =
  "Original: '" +
  value1 +
  "' | Converted: " +
  converted1 +
  " | isNaN: " +
  Number.isNaN(converted1) +
  " | isInteger: " +
  Number.isInteger(converted1);

const value2 = "four";
const converted2 = Number(value2);
const result2 =
  "Original: '" +
  value2 +
  "' | Converted: " +
  converted2 +
  " | isNaN: " +
  Number.isNaN(converted2) +
  " | isInteger: " +
  Number.isInteger(converted2);

const value3 = "2.7";
const converted3 = Number(value3);
const result3 =
  "Original: '" +
  value3 +
  "' | Converted: " +
  converted3 +
  " | isNaN: " +
  Number.isNaN(converted3) +
  " | isInteger: " +
  Number.isInteger(converted3);

const value4 = "66";
const converted4 = Number(value4);
const result4 =
  "Original: '" +
  value4 +
  "' | Converted: " +
  converted4 +
  " | isNaN: " +
  Number.isNaN(converted4) +
  " | isInteger: " +
  Number.isInteger(converted4);

// Putting each result into a p element then adding it to display
const allResults =
  "<p>" +
  result1 +
  "</p>" +
  "<p>" +
  result2 +
  "</p>" +
  "<p>" +
  result3 +
  "</p>" +
  "<p>" +
  result4 +
  "</p>";

document.getElementById("numberConversionOutput").innerHTML = allResults;

// ==========================
// Part 3: Math & Formatting Option C
// ==========================

// Three largest country approximate populations in 2026
const indiaPopulation = 1476625576;
const chinaPopulation = 1412914089;
const unitedStatesPopulation = 349035494;

// Addition: total population of the three countries
const totalPopulation =
  indiaPopulation + chinaPopulation + unitedStatesPopulation;

// If/else statement 2 checking whether the total population of the countries is
// greater than or less than one third of the world population.
let sizeMessage = "";
const worldPopulation = 8324602927; // Approximate world population in 2026
if (totalPopulation > worldPopulation / 3) {
  sizeMessage =
    "(these countries make up MORE than a third of the world population)";
} else {
  sizeMessage =
    "(these countries make up LESS than a third of the world population)";
}

// Subtraction: difference between the two largest country populations
const populationDifference = indiaPopulation - chinaPopulation;

// Formatting with toLocaleString() to add commas
// Number.prototype.toLocaleString() converts a number to string
// with proper formatting based on region
const formattedIndiaPopulation = indiaPopulation.toLocaleString();
const formattedChinaPopulation = chinaPopulation.toLocaleString();
const formattedUnitedStatesPopulation = unitedStatesPopulation.toLocaleString();
const formattedTotal = totalPopulation.toLocaleString();
const formattedDifference = populationDifference.toLocaleString();

// Building the output string
const mathResults =
  "<p>India Population: " +
  formattedIndiaPopulation +
  "</p>" +
  "<p>China Population: " +
  formattedChinaPopulation +
  "</p>" +
  "<p>United States Population: " +
  formattedUnitedStatesPopulation +
  "</p>" +
  "<p>Combined Population: " +
  formattedTotal +
  " " +
  sizeMessage +
  "</p>" +
  "<p>Difference between India and China Population: " +
  formattedDifference +
  "</p>";

// Displaying on the page
document.getElementById("mathOutput").innerHTML = mathResults;
