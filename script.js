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

// Array of famous locations, hints, and coordinates
const locations = [
  // {
  //   name: "Gilo",
  //   title: "מיקום גילה",
  //   hint: "בדיקה בדיקה",
  //   latitude: 31.734343754644314,
  //   longitude: 35.19690530660503
  // },
  {
    name: "Home",
    title: "רמז ראשון",
    hint: "לכי למקום בו עזרנו להרים עגלה שנפלה למישהי",
    latitude: 31.788470632476976,
    longitude: 35.206377815419515
  },
  {
    name: "HaShuk",
    title: "רמז שני",
    hint: "לכי למקום בו בחנת את הפלייליסט שלי",
    latitude: 31.785824,
    longitude: 35.212342
  },
  {
    name: "HaDavidka",
    title: "רמז שלישי",
    hint: "לכי למקום בו הכל התחיל",
    latitude: 31.7849932,
    longitude: 35.2142648
  },
  {
    name: "Jaffa Center",
    title: "רמז רביעי",
    hint: "לכי למקום בו נתפסנו על חם בפעם הראשונה",
    latitude: 31.7830071,
    longitude: 35.2181587
  },
  {
    name: "Safra Square",
    title: "רמז חמישי",
    hint: "לכי למקום בו עשינו יחד יוגה",
    latitude: 31.7798575,
    longitude: 35.2240378
  },
  {
    name: "Shlomzion - Yoga",
    title: "רמז שישי",
    hint: "לכי למקום בו שיחקנו את משחק הפתקים והשאלות",
    latitude: 31.7793419,
    longitude: 35.2221948
  },
  {
    name: "Gan Ha'Atzmaut",
    title: "רמז שביעי",
    hint: "לכיל מקום בו אמרתי לך שאני אוהב אותך בפעם הראשונה",
    latitude: 31.7783819,
    longitude: 35.2184223
  },
  {
    name: "YMKA Tower",
    title: "רמז שמיני",
    hint: "סדרי את המשפט הבא: ",
    latitude: 31.7743483,
    longitude: 35.2215464
  },
];

// Function to display the hint based on user's location
function displayHint(position) {
  const userLatitude = position.coords.latitude;
  const userLongitude = position.coords.longitude;
  console.log(userLatitude);

  places.forEach(place => {
    const distance = getDistance(userLatitude, userLongitude, place.latitude, place.longitude);
    if (distance < 0.05) { // Adjust the distance threshold as needed
      document.getElementById("hint-title").textContent = place.title;
      document.getElementById("hint-text").textContent = place.hint;
      incrementProgress();
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

// Request location and call the displayHint function
if ("geolocation" in navigator) {
  navigator.geolocation.watchPosition(displayHint);
} else {
  console.log("Geolocation is not supported by this browser.");
}