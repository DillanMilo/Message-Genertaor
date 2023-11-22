const greetings = ["Whats up", "Heya", "Howdy"];
const subjects = ["world", "friend", "fellas"];
const actions = ["Im really enjoying coding!", "wanna meet for some coffee?", "have a great day!"];

function getRandomArray (array) {
    return Math.floor(Math.random() * array.length);
};

function getAsciiArt() {
    return `
   _   _      _ _
  | | | | ___| | | ___
  | |_| |/ _ \\ | |/ _ \\
  |  _  |  __/ | | (_) |
  |_| |_|\\___|_|_|\\___/
    `;
}

function generateMessage() {
    const asciiArt = getAsciiArt();
    const greeting = greetings[getRandomArray(greetings)];
    const subject = subjects[getRandomArray(subjects)];
    const action = actions[getRandomArray(actions)];

    return `${asciiArt}${greeting} ${subject}, ${action}`;
}

console.log(generateMessage());