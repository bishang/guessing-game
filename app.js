'use strict';

var twin = prompt('Does Bessie have a twin?');
console.log('Twin Guess:', twin);

if(twin.toUpperCase() === 'YES' || twin.toLowerCase() === 'y') {
  alert('Yes! She has a twin sister!');
} else if(twin.toUpperCase() === 'NO' || twin.toLowerCase() === 'n') {
  alert('Wrong! She has a twin sister.');
} else {
  alert('Sorry, I didn\'t recognize your answer.')
}

var drive = prompt('Does Bessie drive a Range rover?');
console.log('Car guess:', drive);

if(drive.toUpperCase() === 'NO' || drive.toLowerCase() === 'n') {
  alert('Correct, she drives a KIA Soul.');
} else if(drive.toUpperCase() === 'YES' || drive.toLowerCase() === 'y') {
  alert('Wrong! That car is way too expensive!');
} else {
  alert('Sorry, I didn\'t recognize your answer.')
}

var travel = prompt('Has Bessie ever traveled outside of the country?');
console.log('Travel guess:', travel);

if(travel.toUpperCase() === 'YES' || travel.toLowerCase() === 'y') {
  alert('Correct! She has been to the Philippines.');
} else if(travel.toUpperCase() === 'NO' || travel.toLowerCase() === 'n') {
  alert('WRONG! She\'s been to The Phillpines and Canada.');
} else {
  alert('Sorry, I didn\'t recognize your answer.')
}

var born = prompt('Was Bessie born in Seattle?');
console.log('Born guess:', born)

if(born.toUpperCase() === 'YES' || born.toLowerCase() === 'y') {
  alert('Yes! She was born at the UWMC.');
} else if(born.toUpperCase() === 'NO' || born.toLowerCase() === 'n') {
  alert('You guessed wrong, she was born at UWMC.');
} else {
  alert('Sorry, I didn\'t recognize your answer.')
}

var dog = prompt('Is Bessie\'s favorite dog the Belgian Malinois?');
console.log('Dog guess:', dog);

if(drive.toUpperCase() === 'NO' || drive.toLowerCase() === 'n') {
  alert('Correct, her favorite dog is the Welsh Pembroke Corgi.');
} else if(drive.toUpperCase() === 'YES' || drive.toLowerCase() === 'y') {
  alert('No way! She LOVES corgis.');
} else {
  alert('Sorry, I didn\'t recognize your answer.')
}

var year;

for (var i = 0; i < 4; i++) {
  year = parseInt(prompt('What year did Bessie get her drivers license?'));
  console.log('Year guessed:', year);

  if (year === 2006) {
    alert('Correct!');
    break;
  } else if (year < 2006) {
    alert('Sorry, she got it after that year.');
  } else if (year > 2006) {
    alert('Sorry, she got it before that year.');
  } else if (isNaN(year) || year === null) {
    alert('That isn\'t a year.');
  }
}

var food = ['pizza', 'mac and cheese', 'sphaghetti', 'ramen']
var answer = prompt('What is one of my favorite foods?');
var flag;

for (var i = 0; i < 6; i++) {
  if (answer === food[i]) {
    alert('Correct!');
    break;
    flag = true;
  } if (!flag) {
    alert('Oops! Try again.');
  }
}
