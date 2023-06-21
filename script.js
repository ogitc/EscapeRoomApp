import { places, ymkaName } from "./constants";

let currentHint = 'ברוכה הבאה! בואי נפעיל מיקום ונצא לדרך!';
const imageFrontElement = document.querySelector('.front-image');
const imageBackElement = document.querySelector('.back-image');
const card = document.querySelector('.card');
const hintElement = document.querySelector('.hint-text');
const cryptoDiv =  document.getElementById('crypto')

// Function to display the hint based on user's location
function displayHint(position) {
  const userLatitude = position.coords.latitude;
  const userLongitude = position.coords.longitude;

  places.forEach(place => {
    const distance = getDistance(userLatitude, userLongitude, place.latitude, place.longitude);
    if (distance < 0.05) { // Adjust the distance threshold as needed
      imageFrontElement.src = place.src;
      imageBackElement.src = place.src;
      currentHint = place.hint;
      if (place.name == ymkaName) {
        cryptoDiv.classList.remove('hidden');
      } else {
        cryptoDiv.classList.add('hidden');
      }
    }
  });
}

// Function to calculate the distance between two coordinates using the Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
  const radius = 6371; // Radius of the Earth in kilometers

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = radius * c;
  return distance;
}

// Function to convert degrees to radians
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// Function to increment the progress counter
function incrementProgress() {
  const progressElement = document.getElementById("progress");
  const progress = parseInt(progressElement.textContent);
  const totalHints = places.length;

  if (progress < totalHints) {
    progressElement.textContent = progress + 1;
  }
}

let completedIndexes = {'תעלי': [], 'למעלה': []};

function handleCharacterInput(event, targetWord, placeholderName) {
  const inputElement = event.target;
  const character = inputElement.textContent.trim();

  // Check if the entered character is a Hebrew letter
  const isHebrewLetter = character.match(/^[\u0590-\u05FF]+$/);
  const isSpace = character === ' ';

  if (!isHebrewLetter || isSpace) {
    inputElement.textContent = '';
    return;
  } else if (character.length > 1) {
    inputElement.textContent = character.charAt(0);
  }

  const placeholders = document.getElementsByClassName(placeholderName);
  const currentIndex = Array.from(placeholders).indexOf(inputElement);
  var nextIndex = (currentIndex + 1) % placeholders.length;
  var nextElement = placeholders[nextIndex];
  
  while (nextIndex !== currentIndex) {
    if (nextElement.getAttribute('contenteditable') === 'true') {
      nextElement.focus();
      break;
    }
    nextIndex = (nextIndex + 1) % placeholders.length;
    nextElement = placeholders[nextIndex];
  }

  Array.from(placeholders).forEach((placeholder, index) => {
    const enteredChar = placeholder.textContent.trim();
    if (!completedIndexes[targetWord].includes(index)) {
      if (enteredChar === targetWord[index]) {
        placeholder.style.color = 'green';
        inputElement.setAttribute('contenteditable', 'false');
        completedIndexes[targetWord].push(index);
      }
    }
  });

  const enteredWord = Array.from(placeholders)
    .map(placeholder => placeholder.textContent.trim())
    .join('');

  if (enteredWord === targetWord) {
    return 1;
  }
  return 0;
}

let counter = 0;

function handlePlaceHolders(event, targetWord, placeholderName) {
  counter += handleCharacterInput(event, targetWord, placeholderName);
  if (counter === 2) {
    document.getElementById('message').textContent = 'מחכה לך פה 😍, תגידי לשומר: ';
  } 
}

// Request location and call the displayHint function
if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(displayHint);
} else {
  console.log("Geolocation is not supported by this browser.");
}


// flip
card.addEventListener('click', function() {
  card.classList.toggle('flipped'); // Toggle the 'flipped' class on click

  // Check if the card is flipped or not
  if (card.classList.contains('flipped')) {
    // var currentLocation = places[currentIndex];
    // var hint = currentLocation.hint;
    hintElement.textContent = currentHint;
  } else {
    hintElement.textContent = '';
  }
});
