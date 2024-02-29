// My Introduction.ts
console.log("My name is Raeesuddin my Roll no. is 00292605");
// Personal Message:.ts
var personName = "Eric";
var message = "Hello ".concat(personName, ", would you like to learn some Python today?");
console.log(message);
// Name Cases:.ts
// Store a person's name and print in different cases
var personName1 = "Eric";
// Convert to lowercase
var lowercaseName1 = personName1.toLowerCase();
// Convert to uppercase
var uppercaseName1 = personName1.toUpperCase();
// Convert to titlecase
var titlecaseName1 = toTitleCase(personName1);
// Print the results
console.log("Original Name 1:", personName1);
console.log("Lowercase Name 1:", lowercaseName1);
console.log("Uppercase Name 1:", uppercaseName1);
console.log("Titlecase Name 1:", titlecaseName1);
// Store another person's name and print in different cases
var personName2 = "John Doe";
// Convert to lowercase
var lowercaseName2 = personName2.toLowerCase();
// Convert to uppercase
var uppercaseName2 = personName2.toUpperCase();
// Convert to titlecase
var titlecaseName2 = toTitleCase(personName2);
// Print the results
console.log("Original Name 2:", personName2);
console.log("Lowercase Name 2:", lowercaseName2);
console.log("Uppercase Name 2:", uppercaseName2);
console.log("Titlecase Name 2:", titlecaseName2);
// Function to convert a string to titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Question3:.ts
// Function to print the famous quote
function printFamousQuote() {
    var quote = "A person who never made a mistake never tried anything new.";
    var author = "Albert Einstein";
    // Print the quote and its author
    console.log("".concat(author, " once said, \"").concat(quote, "\""));
}
// Call the function to execute the statement
printFamousQuote();
