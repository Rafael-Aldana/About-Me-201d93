'use strict';

console.log('Hi there!');



let userName = prompt('What is your name?').toLowerCase();

alert(`Hey there ${userName} welcome to my page! Please answer the following questions in a yes/no or y/n manner.`);
function questionOneFunc() {
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
}
questionOneFunc();

function questionTwoFunc() {
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
}
questionTwoFunc();

function questionThreeFunc() {
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
}
questionThreeFunc();

function questionFourFunc() {
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
}
questionFourFunc();

function questionFiveFunc() {
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
}
questionFiveFunc();

function questionSixFunc() {
  let myNum = 7;
  for(let i = 0; i < 4; i++) {
    let questionSixGuess = +prompt('Let\'s play a number guessing game now. What number 1-10 am I thinking of? You have 4 tries.');

    if(questionSixGuess > myNum){
      alert('Sorry too high');
    } else if(questionSixGuess < myNum) {
      alert('Sorry too low');
    } else if(questionSixGuess === myNum) {
      alert('By gum you are correct!');
      break;
    }
  }
}
questionSixFunc();
//if attempts === 0 -> alert the user know the correct answer.


function questionSevenFunc() {
  let favoriteFood = ['Pizza', 'burger', 'Spaghetti'];
  for(let i = 0; i < 6; i++) {
    let questionSevenGuess = prompt('Can you guess what is my favorite food?');

    for(let j = 0; j < favoriteFood.length; j++) {
      if (questionSevenGuess === favoriteFood[j]){
        alert('You are correct! That is one of my favorite kinds of foods.');
        i = 6;
        break;
      }
    }
  }
}
questionSevenFunc();

alert(`Thanks for playing ${userName}.`);




