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
}

let questionTwoGuess = prompt('Do you think I have a dog?').toLocaleLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n') {
  // console.log('Ahhhh wrong!');
  alert('Ahhhh wrong!');
}

let questionThreeGuess = prompt('Did I serve in the military?').toLocaleLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(questionThreeGuess === 'no' ||questionThreeGuess === 'n') {
  // console.log('Ahhhh wrong!');
  alert('Ahhhh wrong!');
}

let questionFourGuess = prompt('Is pizza my favorite food?').toLocaleLowerCase();

if(questionFourGuess === 'yes' || questionFourGuess === 'y') {
  // console.log('You are correct!');
  alert('You are correct!');
} else if(questionFourGuess === 'no' || questionFourGuess === 'n') {
  // console.log('Ahhhh wrong!');
  alert('Ahhhh wrong!');
}

let questionFiveGuess = prompt('Am I not the greatest coder ever?').toLocaleLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
  // console.log('You are most definitely correct!');
  alert('You are most definitely correct!');
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n') {
  // console.log('You are dead wrong!!');
  alert('You are dead wrong!!');
}

alert(`Thanks for playing ${userName}.`);




