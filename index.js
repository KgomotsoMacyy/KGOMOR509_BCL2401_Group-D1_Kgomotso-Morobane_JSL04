// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

// Assuming userPreference variable holds the user's preferred type of Monster Energy drink
let userPreference = prompt("Enter your preferred type of Monster Energy drink (Regular/Sugar-free): ");

// Convert user input to lowercase for case-insensitive comparison
userPreference = userPreference.toLowerCase();

// Check user preference and print accordingly
if (userPreference === "sugar-free") {
    console.log("You prefer Sugar-free Monster Energy.");
} else {
    console.log("You prefer Regular Monster Energy.");
}

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

// Assuming cansLeft variable holds the number of Monster Energy cans left in the fridge
let cansLeft = 31; // For example, let's assume there are 31 cans left

// Using a ternary operator to determine the message based on the number of cans left
let message = (cansLeft < 5) ? "Time to restock!" : "We're stocked!";

// Print the message
console.log(message);


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

// Assuming currentHeartRate variable holds the user's current heart rate in bpm (beats per minute)
let currentHeartRate = 900; // For example, let's assume the current heart rate is 900 bpm

// Determine if the user should drink a Monster Energy drink based on their heart rate
let result = (currentHeartRate < 100) ? "Boost needed!" : "Energy levels are high!";

// Print the message
console.log(result);


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!" 
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C.

// Assuming currentTemperature variable holds the current temperature in Celsius
let currentTemperature = 12; // For example, let's assume the current temperature is 12°C

// Determine if the Monster Energy drink is chilled to perfection or needs a cooler
let report = (currentTemperature <= 5) ? "Chilled to perfection!" : "Needs a cooler!";

// Print the message
console.log(report);


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = new Date().getHours();

// Determine if it's a good idea to have a Monster Energy drink based on the current hour
let outcome = (currentHour >= 20 && currentHour < 24) ? "Unleash the beast!" : "Better stick to water.";

// Print the message
console.log(outcome); 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."






// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.