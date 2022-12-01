'use strict';

console.log('Hi there!');



let userName = prompt('What is your name?').toLowerCase();

alert(`Hey there ${userName} welcome to my page! Please answer the following questions in a yes/no or y/n manner.`);

let questionOneGuess = prompt('Do I like to travel?').toLocaleLowerCase();

if(questionOneGuess === 'yes' || questionOneGuess === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(questionOneGuess === 'no' || questionOneGuess === 'n') {
  // console.log('Ahhhh wrong!');
  alert('Ahhhh wrong!');
} else {
  alert('Hey play the game.');
}

let questionTwoGuess = prompt('Do you think I have a dog?').toLocaleLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  // console.log('Ahhhh wrong!');
  alert('Ahhhh wrong!');
} else {
  alert('Hey play the game.');
}

let questionThreeGuess = prompt('Did I serve in the military?').toLocaleLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(questionThreeGuess === 'no' ||questionThreeGuess === 'n') {
  // console.log('Ahhhh wrong!');
  alert('Ahhhh wrong!');
} else {
  alert('Hey play the game.');
}

let questionFourGuess = prompt('Is pizza my favorite food?').toLocaleLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(questionFourGuess === 'no' || questionFourGuess === 'n') {
  // console.log('Ahhhh wrong!');
  alert('Ahhhh wrong!');
} else {
  alert('Hey play the game.');
}

let questionFiveGuess = prompt('Am I not the greatest coder ever?').toLocaleLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  // console.log('You are most definitely correct!');
  alert('You are most definitely correct!');
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  // console.log('You are dead wrong!!');
  alert('You are dead wrong!!');
} else {
  alert('Hey play the game.');
}

alert('Let\'s play a number guessing game now. What number 1-10 am I thinking of? You have 4 tries.');

let questionSixAnswer = 3; 
let questionSix = prompt('What is your guess');

for(i=0; i<4; i++) {
  if(questionSixAnswer == questionSix) {
    alert('You are correct!')
  }
}



let questionSevenArray = ['Pizza', 'burger', 'Spaghetti'];
let questionSevenAttempts = 6;

let questionSevenGuess = prompt(`Can you guess what is my favorite food? You have ${questionSevenAttempts} guesses left.`);

let questionSevenIndex = questionSevenArray.indexOf(parseInt(questionSevenGuess));

if (questionSevenIndex === 'Pizza') {
  alert(`You are correct! That is one of my favorite foods. ${questionSevenArray}`);
} else if(questionSevenAttempts > 1) {
  alert('Good try! Keep guessing.');

}


alert(`Thanks for playing ${userName}.`);




