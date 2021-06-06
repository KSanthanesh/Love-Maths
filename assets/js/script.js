// wait for the DOM to finish loading before running the game
//Get the button elements and add event listeners to them.

document.addEventListener ("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })

    }
    runGame("addition");
})

/**
 * The main game "loop", called when script if first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    // creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if(gameType === "addition") {
        displayAdditionQuestion(num1,num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}, Aborting!`
    }

}
/**
 * checks the answer against the first element in
 * the returned calculatecorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculatecorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if(isCorrect) {
        alert("Hey! you got it right! :D");

    } else {
        alert(`awww...You answered ${userAnswer}. The correct Answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);

}
/**
 * Gets the operands(the number) and the operator (plus,minus etc)
 * directly from the dom, and return the correct answer
 */

function calculateCheckAnswer() {

    let operant1 = parseInt(document.getElementById("operand1").innerText);
    let operant2 = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+") {
        return[operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

function incrementScore() {

}

function incrementWrongScore() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaysubtractQuestion() {

}

function displayMultiplyQuestion() {

}