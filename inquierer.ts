// npm i inquirer 
// @types/inquirer 
// install this before coding 


import inquirer from 'inquirer';



(async () => {
    let user = await inquirer.prompt([
        {
            type: "number",
            name: "firstNumber",
            message: "Kindly enter your first number"
        },
        {
            type: "number",
            name: "secondNumber",
            message: "Kindly enter your second number"
        },
        {
            type: "list",
            name: "operator",
            message: "Select your operator",
            choices: ["+", "-", "*", "/"]
        },
    ]);

    console.log(user);

    if (user.operator === "+")
        console.log(`Your answer of ${user.firstNumber + user.secondNumber}`);
    else if (user.operator === "-")
        console.log(`Your answer of ${user.firstNumber - user.secondNumber}`);
    else if (user.operator === "*")
        console.log(`Your answer of ${user.firstNumber * user.secondNumber}`);
    else if (user.operator === "/")
        console.log(`Your answer of ${user.firstNumber / user.secondNumber}`);
    else {
        console.log("Please select a valid operator (+, -, *, /)");
    }
})();
