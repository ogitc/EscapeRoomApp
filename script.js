/*
  This is your site JavaScript code - you can add interactivity!
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
// console.log("Hello 🌎");

// /* 
// Make the "Click me!" button move when the visitor clicks it:
// - First add the button to the page by following the steps in the TODO 🚧
// */
// const btn = document.querySelector("button"); // Get the button from the page
// if (btn) { // Detect clicks on the button
//   btn.onclick = function () {
//     // The 'dipped' class in style.css changes the appearance on click
//     btn.classList.toggle("dipped");
//   };
// }


// // ----- GLITCH STARTER PROJECT HELPER CODE -----

// // Open file when the link in the preview is clicked
// let goto = (file, line) => {
//   window.parent.postMessage(
//     { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
//   );
// };
// // Get the file opening button from its class name
// const filer = document.querySelectorAll(".fileopener");
// filer.forEach((f) => {
//   f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
// });



// JavaScript code for the app

// Places' images
const homeImage        = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/home_cropped.jpg?v=1686651291035";
const shukImage        = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/shuk.jpg?v=1686651280952";
const davidkaImage     = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/Hadavidka.jpg?v=1685350622961";
const jaffaCenterImage = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/jaffa_center.jpg?v=1686652471103";
const safraImage       = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/safra.jpg?v=1686651889735";
const shlomzioImage    = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/shlomzion.jpg?v=1686652096246";
const atzmautImage     = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/Gan.jpg?v=1686651680091";
const ymkaImage        = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/ymka.jpg?v=1686651282071";
const giloImage        = homeImage;

// Places' hints
const homeHint        = "גלגל העזר נשא פרי";
const shukHint        = "בחנת צליליי בלחם המלך";
const davidkaHint     = "מספר אחד במרכז";
const jaffaCenterHint = "תפנית בעלילה בסיפור בו נתפסנו על חם";
const safraHint       = "המלכה תהתה על הכלב שהביט מטה";
const shlomzioHint    = "באופן עצמאי, למדנו להכיר אחת את השני";
const atzmautHint     = "א-ב-ני-בי או-בו-ה-בב או-בו-ת-בך";
const ymkaHint        = "פתרי את כתב הסתרים הבא בעזרת גימטריה";
const giloHint        = homeHint;

const ymkaName = 'YMKA Tower'

// Array of famous places, hints, and coordinates
const places = [
  {
    name: "Gilo",
    title: "Test",
    hint: giloHint,
    latitude: 31.73430243914346,
    longitude: 35.19685981853834,
    src: giloImage
  },
  {
    name: "Home",
    title: "רמז ראשון",
    hint: homeHint,
    latitude: 31.788470632476976,
    longitude: 35.206377815419515,
    src: homeImage
  },
  {
    name: "HaShuk",
    title: "רמז שני",
    hint: shukHint,
    latitude: 31.7857060,
    longitude: 35.2123219,
    src: shukImage
  },
  {
    name: "HaDavidka",
    title: "רמז שלישי",
    hint: davidkaHint,
    latitude: 31.7849932,
    longitude: 35.2142648,
    src: davidkaImage
  },
  {
    name: "Jaffa Center",
    title: "רמז רביעי",
    hint: jaffaCenterHint,
    latitude: 31.7830071,
    longitude: 35.2181587,
    src: jaffaCenterImage
  },
  {
    name: "Safra Square",
    title: "רמז חמישי",
    hint: safraHint,
    latitude: 31.7798575,
    longitude: 35.2240378,
    src: safraImage
  },
  {
    name: "Shlomzion - Yoga",
    title: "רמז שישי",
    hint: shlomzioHint,
    latitude: 31.7793419,
    longitude: 35.2221948,
    src: shlomzioImage
  },
  {
    name: "Gan Ha'Atzmaut",
    title: "רמז שביעי",
    hint: atzmautHint,
    latitude: 31.7783819,
    longitude: 35.2184223,
    src: atzmautImage
  },
  {
    name: ymkaName,
    title: "רמז שמיני",
    hint: ymkaHint,
    latitude: 31.7743483,
    longitude: 35.2215464,
    src: ymkaImage
  },
];

let currentHint = 'ברוכה הבאה! בואי נפעיל מיקום ונצא לדרך!';
let currentImageSRC = "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/Yaeli_img.jpg?v=1685350622961";
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
