// My Introduction.ts
console.log("My name is Raeesuddin my Roll no. is 00292605")
// Personal Message:.ts
const personName: string = "Eric";
const message: string = `Hello ${personName}, would you like to learn some Python today?`;
console.log(message);
// Name Cases:.ts
// Store a person's name and print in different cases
const personName1: string = "Eric";

// Convert to lowercase
const lowercaseName1: string = personName1.toLowerCase();

// Convert to uppercase
const uppercaseName1: string = personName1.toUpperCase();

// Convert to titlecase
const titlecaseName1: string = toTitleCase(personName1);

// Print the results
console.log("Original Name 1:", personName1);
console.log("Lowercase Name 1:", lowercaseName1);
console.log("Uppercase Name 1:", uppercaseName1);
console.log("Titlecase Name 1:", titlecaseName1);

// Store another person's name and print in different cases
const personName2: string = "John Doe";

// Convert to lowercase
const lowercaseName2: string = personName2.toLowerCase();

// Convert to uppercase
const uppercaseName2: string = personName2.toUpperCase();

// Convert to titlecase
const titlecaseName2: string = toTitleCase(personName2);

// Print the results
console.log("Original Name 2:", personName2);
console.log("Lowercase Name 2:", lowercaseName2);
console.log("Uppercase Name 2:", uppercaseName2);
console.log("Titlecase Name 2:", titlecaseName2);

// Function to convert a string to titlecase
function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}
// Question3:.ts
// Function to print the famous quote
function printFamousQuote(): void {
    const quote: string = "A person who never made a mistake never tried anything new.";
    const author: string = "Albert Einstein";
    
    // Print the quote and its author
    console.log(`${author} once said, "${quote}"`);
}

// Call the function to execute the statement
printFamousQuote();

