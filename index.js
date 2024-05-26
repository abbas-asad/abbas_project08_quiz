#! /usr/bin/env node
import inquirer from "inquirer";
let points = 0;
let mcqs = 10;
let answer1 = await inquirer.prompt([
    {
        name: "Q1",
        type: "list",
        message: "What is TypeScript primarily used for?",
        choices: [
            "Building web servers",
            "Adding static typing to JavaScript",
            "Writing client-side JavaScript code",
            "Creating databases",
        ],
    },
]);
if (answer1.Q1 === "Adding static typing to JavaScript") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer2 = await inquirer.prompt([
    {
        name: "Q2",
        type: "list",
        message: "Which command is used to install TypeScript globally via npm?",
        choices: [
            "npm install typescript",
            "npm typescript -g",
            "npm add typescript -g",
            "npm install -g typescript",
        ],
    },
]);
if (answer2.Q2 === "npm install -g typescript") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer3 = await inquirer.prompt([
    {
        name: "Q3",
        type: "list",
        message: "What does 'tsc' stand for in TypeScript?",
        choices: [
            "Type System Checker",
            "Type Scripting Console",
            "TypeScript Compiler",
            "TypeScript Checker",
        ],
    },
]);
if (answer3.Q3 === "TypeScript Compiler") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer4 = await inquirer.prompt([
    {
        name: "Q4",
        type: "list",
        message: "Which file is used to configure TypeScript options for a project?",
        choices: ["webpack.config.js", "package.json", "tsconfig.json", "index.ts"],
    },
]);
if (answer4.Q4 === "tsconfig.json") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer5 = await inquirer.prompt([
    {
        name: "Q5",
        type: "list",
        message: "How can you specify the type of a variable in TypeScript?",
        choices: [
            "By using the 'var' keyword",
            "By adding a type annotation after the variable's name",
            "By using the 'type' keyword",
            "By enclosing the variable name in angle brackets (< >)",
        ],
    },
]);
if (answer5.Q5 === "By adding a type annotation after the variable's name") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer6 = await inquirer.prompt([
    {
        name: "Q6",
        type: "list",
        message: "What is the default visibility modifier for class members in TypeScript?",
        choices: ["internal", "private", "protected", "public"],
    },
]);
if (answer6.Q6 === "public") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer7 = await inquirer.prompt([
    {
        name: "Q7",
        type: "list",
        message: "Which of the following is NOT a primitive data type in TypeScript?",
        choices: ["number", "array", "string", "boolean"],
    },
]);
if (answer7.Q7 === "array") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer8 = await inquirer.prompt([
    {
        name: "Q8",
        type: "list",
        message: "What does the 'any' type signify in TypeScript?",
        choices: [
            "It represents an empty value",
            "It represents any possible value",
            "It represents an anonymous function",
            "It represents a specific data type",
        ],
    },
]);
if (answer8.Q8 === "It represents any possible value") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer9 = await inquirer.prompt([
    {
        name: "Q9",
        type: "list",
        message: "Which operator is used for optional properties in TypeScript interfaces?",
        choices: ["/", "?", "*", "!"],
    },
]);
if (answer9.Q9 === "/") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
let answer10 = await inquirer.prompt([
    {
        name: "Q10",
        type: "list",
        message: "Which TypeScript feature allows you to reuse code across multiple projects?",
        choices: ["Classes", "Modules", "Interfaces", "Enums"],
    },
]);
if (answer10.Q10 === "Modules") {
    console.log("Correct!✔️");
    points++;
}
else {
    console.log("Incorrect!❌");
}
console.log(`\nTotal points: ${points}/${mcqs}`);
if (points >= 6) {
    console.log(`Congratulations! You have successfully completed the quiz! 🎉`);
}
else {
    console.log(`Don't give up! Remember, success comes from hard work and persistence. Keep pushing forward! 💪`);
}
