import inquirer from 'inquirer';

const systemGeneratedNo = Math.floor(Math.random() * 10);

console.log(systemGeneratedNo)

type ansType = {
    userGuess: number
}

const answer : ansType = await inquirer.prompt([
    {
        type : "number",
        name : "userGuess",
        message : "Write Your Guess b/w 1 to 10:",
    }
])

const {userGuess} = answer;

console.log(userGuess, "userGuess" , systemGeneratedNo , "systemGeneratedNo");

if(userGuess === systemGeneratedNo) {
    console.log("Yeaaaa Your answer is correct \n You Win!");
} else {
    console.log("Please try again Better luck next time!"); 
}

