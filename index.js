#! usr/bin/env node
import inquirer from "inquirer";
console.log(`n\t Wellcom to Mr Legend Currency Convertor \t\n`);
const currency = {
    "USD": 1,
    "INR": 74,
    "RMB": 4,
    "PKR": 280,
    "EURO": 0.90,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select currency to convert from",
        choices: ["USD", "INR", "RMB", "PKR", "EURO"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "INR", "RMB", "PKR", "EURO"],
    },
    {
        name: "amount",
        type: "input",
        message: "enter your amount ",
    }
]);
let fromamount = currency[user_answer.from_currency];
let toamount = currency[user_answer.to_currency];
let convert = user_answer.amount;
let baseamount = convert / fromamount;
let converted = baseamount * toamount;
console.log(`converted amount ${converted}`);
