const greetings = ["Whats up", "Heya", "Howdy"];
const subjects = ["world", "friend", "fellas"];
const actions = ["Im really enjoying coding!", "wanna meet for some coffee?", "have a great day!"];

function getRandomArray (array) {
    return Math.floor(Math.random() * array.length);
};

function generateMessage() {
    const greeting = greetings[getRandomArray(greetings)];
    const subject = subjects[getRandomArray(subjects)];
    const action = actions[getRandomArray(actions)];

    return `${greeting} ${subject}, ${action}`;
}

console.log(generateMessage());