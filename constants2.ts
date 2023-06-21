interface PlaceHintAndSrc {
    hint: String,
    src: String
}

interface PlaceHintAndSrcs {
  [key:string]: PlaceHintAndSrc
}

// Places' hints and image src
const placesHintsAndSrc: PlaceHintAndSrcs = {
    home: { hint: "גלגל העזר נשא פרי", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/home_cropped.jpg?v=1686651291035" },
    shuk: { hint: "בחנת צליליי בלחם המלך", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/shuk.jpg?v=1686651280952" },
    davidka: { hint: "מספר אחד במרכז", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/Hadavidka.jpg?v=1685350622961" },
    jaffaCenter: { hint: "תפנית בעלילה בסיפור בו נתפסנו על חם", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/jaffa_center.jpg?v=1686652471103" },
    safra: { hint: "המלכה תהתה על הכלב שהביט מטה", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/safra.jpg?v=1686651889735" },
    shlomzion: { hint: "באופן עצמאי, למדנו להכיר אחת את השני", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/shlomzion.jpg?v=1686652096246" },
    atzmaut: { hint: "א-ב-ני-בי או-בו-ה-בב או-בו-ת-בך", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/Gan.jpg?v=1686651680091" },
    ymka: { hint: "פתרי את כתב הסתרים הבא בעזרת גימטריה", src: "https://cdn.glitch.global/78952961-21c9-451a-ba4e-b88c3ba28aed/ymka.jpg?v=1686651282071" }
}

export const ymkaName = 'YMKA Tower'

// Array of famous places, hints, and coordinates
export const places = [
  {
    name: "Gilo",
    title: "Test",
    hint: placesHintsAndSrc.home.hint,
    latitude: 31.73430243914346,
    longitude: 35.19685981853834,
    src: placesHintsAndSrc.home.src
  },
  {
    name: "Home",
    title: "רמז ראשון",
    hint: placesHintsAndSrc.home.hint,
    latitude: 31.788470632476976,
    longitude: 35.206377815419515,
    src: placesHintsAndSrc.home.src
  },
  {
    name: "HaShuk",
    title: "רמז שני",
    hint: placesHintsAndSrc.shuk.hint,
    latitude: 31.7857060,
    longitude: 35.2123219,
    src: placesHintsAndSrc.shuk.src
  },
  {
    name: "HaDavidka",
    title: "רמז שלישי",
    hint: placesHintsAndSrc.davidka.hint,
    latitude: 31.7849932,
    longitude: 35.2142648,
    src: placesHintsAndSrc.davidka.src
  },
  {
    name: "Jaffa Center",
    title: "רמז רביעי",
    hint: placesHintsAndSrc.jaffaCenter.hint,
    latitude: 31.7830071,
    longitude: 35.2181587,
    src: placesHintsAndSrc.jaffaCenter.src
  },
  {
    name: "Safra Square",
    title: "רמז חמישי",
    hint: placesHintsAndSrc.safra.hint,
    latitude: 31.7798575,
    longitude: 35.2240378,
    src: placesHintsAndSrc.safra.src
  },
  {
    name: "Shlomzion - Yoga",
    title: "רמז שישי",
    hint: placesHintsAndSrc.shlomzion.hint,
    latitude: 31.7793419,
    longitude: 35.2221948,
    src: placesHintsAndSrc.shlomzion.src
  },
  {
    name: "Gan Ha'Atzmaut",
    title: "רמז שביעי",
    hint: placesHintsAndSrc.atzmaut.hint,
    latitude: 31.7783819,
    longitude: 35.2184223,
    src: placesHintsAndSrc.atzmaut.src
  },
  {
    name: ymkaName,
    title: "רמז שמיני",
    hint: placesHintsAndSrc.ymka.hint,
    latitude: 31.7743483,
    longitude: 35.2215464,
    src: placesHintsAndSrc.ymka.src
  },
];
