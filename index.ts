#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 50000; //dollar

let myPin = 2233;


let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "hello welcome in our bank please enter your password",
            type: "number",
        },
        
        
    ]
);

//   12345 ==== 1234 - false

if (pinAnswer.pin === myPin)  {
    console.log("correct pin code!!! ");

    let operationAns =await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select option",
                type: "list",   
                choices: ["withdraw", "check balance", ]
            }
        ]
    );

    console.log(operationAns);

    if(operationAns.operation === "withdraw") {
        let amounAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                }
            ]
         );
         // =, -=, +=
         myBalance -= amounAns.amount;
         console.log("your remaining balance  is " + myBalance)
         
     } else if (operationAns.operation === "check balance"){
        console.log("your balance is: " + myBalance)
        
     }
} else {

    console.log("Sorry you try to incorrect pin number");
} 

//console.log(pinAnswer.q1);
