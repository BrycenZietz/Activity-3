// Activity 3: Dynamic Greeting Card

// Part A: Select the elements the app needs
const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");

// Part B: Greeting card data
const greetings = {
    birthday: {
        message: "It\'s your Birthday! Woot Woot!",
        image: "https://i.pinimg.com/originals/91/a0/7f/91a07f1a25119fa0e97fe852e7802b8c.jpg",
        alt: "Birthday celebration greeting"
    },
    holiday: {
        message: "Happy Holidays! Someone\'s thinking of you!",
        image: "https://www.lovethispic.com/uploaded_images/149028-Happy-Holidays.jpg",
        alt: "Holiday celebration greeting"
    },
    thankYou: {
        message: "Thank you for everything!",
        image: "https://th.bing.com/th/id/R.3824c64c77fa8dc345e95d5ba70127f6?rik=opbYtC0V3%2fPs%2bg&riu=http%3a%2f%2fclipartmag.com%2fimages%2fthank-you-images-40.jpg&ehk=MWG2lCj5ApjobSTRp6G1YMp5fUTDTiiUWg1h2F96Xgo%3d&risl=&pid=ImgRaw&r=0",
        alt: "Thank you greeting"
    },
    welcome: {
        message: "Welcome!",
        image: "https://static.vecteezy.com/system/resources/previews/011/976/274/non_2x/stick-figures-welcome-free-vector.jpg",
        alt: "Welcome greeting"
    }
};

// Remember the current greeting
let currentGreetingType = "welcome";

// Part C: Update the card from a greeting entry
function updateGreeting(type) {
    const greeting = greetings[type];

    if (greeting) {
        currentGreetingType = type;
        greetingMessage.textContent = greeting.message;

        greetingImage.setAttribute("src", greeting.image);
        greetingImage.setAttribute("alt", greeting.alt);

        // Log the change
        console.log(`Updated greeting to: ${type}`);
    } else {

        // Report an unknown greeting
        console.error(`Greeting type "${type}" not found`);
    }
}

// Part D: Greeting button functions
function setBirthdayGreeting() {
    updateGreeting("birthday");
}

function setHolidayGreeting() {
    updateGreeting("holiday");
}

function setThankYouGreeting() {
    updateGreeting("thankYou");
}

// Pick a random greeting
function setRandomGreeting() {
    const types = Object.keys(greetings);

    const randomType = types[Math.floor(Math.random() * types.length)];
    console.log(`Random greeting selected: ${randomType}`);
    updateGreeting(randomType);
}

// Part E: Personalize the current greeting
function personalizeGreeting() {
    const name = nameInput.value.trim(); // Remove extra spaces

    // Stop if no name was entered
    if (name === "") {
        alert("Please enter a name to personalize the greeting!");
        return;
    }

    // Keep the name as plain text
    const safeName = name.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

    // Add Dear above the greeting; <br> starts a new line.
    const currentMessage = greetings[currentGreetingType].message;
    greetingMessage.innerHTML = `Dear ${safeName},<br>${currentMessage}`;
    console.log(`Personalized greeting for: ${name}`);

    nameInput.value = ""; // Clear the field
}

// Confirm the app loaded
console.log("Dynamic Greeting Card application loaded");