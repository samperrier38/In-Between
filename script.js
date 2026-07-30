// =========================
// Select Elements
// =========================

const learnButton = document.getElementById("learnButton");
const message = document.getElementById("message");

const quoteButton = document.getElementById("quoteButton");
const quote = document.getElementById("quote");

const actionButton = document.getElementById("actionButton");
const actionMessage = document.getElementById("actionMessage");

// =========================
// Variables
// =========================

let reflectionShown = false;
let actionCompleted = false;

// =========================
// Learn More Button
// =========================

learnButton.addEventListener("click", function () {

    message.textContent =
        "Connection grows when we choose to understand one another. The space between people doesn't have to divide us—it can become a place where empathy, trust, and meaningful relationships are built.";

    learnButton.textContent = "Message Revealed";

});

// =========================
// Reflection Button
// =========================

function showReflection() {

    if (!reflectionShown) {

        quote.textContent =
            "\"Every meaningful relationship is built one conversation at a time.\"";

        quoteButton.textContent = "Hide Reflection";

        reflectionShown = true;

    } else {

        quote.textContent = "";

        quoteButton.textContent = "Show Reflection";

        reflectionShown = false;

    }

}

quoteButton.addEventListener("click", showReflection);

// =========================
// Call to Action Button
// =========================

actionButton.addEventListener("click", function () {

    if (!actionCompleted) {

        actionMessage.textContent =
            "Great choice! Even a simple message can make someone feel seen and valued.";

        actionButton.textContent = "Thanks for Making a Difference";

        actionCompleted = true;

    } else {

        actionMessage.textContent =
            "Keep looking for opportunities to strengthen your relationships.";

    }

});