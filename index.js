 // log("nirav kyada");
var readlineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;
const color = chalk.hex;

var score = 0;
questions = [
{question : '1. What were the names of Bruce Wayne\'s parents?\n1. George & Elaine\n2. James & Elizabeth\n3. Thomas & Martha\n4. Wayne & Alice', answer : '3'},
{question : '2. Who was the super villain once broke Batman\'s back and made him crippled?\n1. Joker\n2. Bane\n3. Killer Crock\n4. Mr. Freeze', answer : '2'},
{question : '3. Who was the Batman\'s Butler?\n1. Alfred\n2. Willson\n3. Godman\n4. Gordon', answer : '1'},
{question : '4. Who was the daughter of Batman and Catwoman ( on Earth-2 )?\n1. Oracle\n2. Katana\n3. Huntress\n4. Lady Shiva', answer : '3'},
{question : '5. With wich character Bruce Wayne had a son?\n1. Lady Shiva\n2. Talia Al Gul\n3. Catwoman\n4. Poison Ivy', answer : '2'},
{question : '6. Who was the District Attorney, became the villian know as Two-Face?\n1. Jason Blood\n2. Jason Todd\n3. Floyd Lawton\n4. Harvey Dent', answer : '4'},
{question : '7. Who killed Jason Todd?\n1. Bane\n2. Two-Face\n3. Trickster\n4. Joker', answer : '4'},
{question : '8. Which Batman Villan lost his beloved wife to a terminal illness?\n1. Ra\'s Al Gul\n2. Mr. Freeze\n3. Scarecrow\n4. Two-Face', answer : '2'},
{question : '9. Which Batman Villan played by Arnold in Batman & Robin movie?\n1. Killer Croc\n2. Mr. Freeze\n3. Bane\n4. Penguine', answer : '2'},
{question : '10. What superpower does the villian Joker have?\n1. Poision Breath\n2. Super Strength\n3. Super Intelligence\n4. None', answer : '4'},
]

greetings();
showquestions();


function greetings(){
    var welcomeMsg = readlineSync.question("Hey ?!!! Greetings!!! What should I call you?\n");
    log(chalk.bold('------------------------------------------\n'))
    log('Welcome ',chalk.bold.underline(welcomeMsg), ' to the Batman Quiz\n')
    log('------------------------------------------\n')
    log('If your answer will be correct then you will get +1 score for each,\nif wrong you will get -1 score\n')
    readlineSync.question('Press Enter to continue the game... Good Luck')
    log('------------------------------------------\n')
    log('------------------------------------------\n')
}

function showquestions(){
    for(var i=0;i<questions.length;i++){
       currentQuestion = questions[i];
    log("------ Question : ",(i+1),'------------------------------\n')
    log(chalk.blue.bold(currentQuestion.question,'\n'))
    var usrAns = readlineSync.question("Your answer is : ")
    log('------------------------------------------')
    if (usrAns === currentQuestion.answer){
        log(chalk.green.bold('Your answer is correct...\n'))
        score++
        log('current score : ',score)
    }else{
        log(chalk.red.bold("Your answer is wrong...\n Be careful next time.. we want you to win!!!"))
        score = score - 1
        log('current score : ',score)
    }

    log('------------------------------------------\n')
    
    }
}
