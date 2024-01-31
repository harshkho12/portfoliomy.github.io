
function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');
    var taskbar = document.getElementById('taskbar');
    taskbar.classList.toggle('show');
}



let tablinks = document.getElementsByClassName("tab-links");

let tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {
    for (tab of tablinks) {
        tab.classList.remove("active-link");
    }
    for (content of tabcontent) {
        content.classList.remove("active-tab");

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }
      

}





//------------------- html type writing---------------------------------------------
const phrases = [
    "I A'm web developer.",
    "Frontend Developer",
    "Backend Developer",
    "Ux/UI Desgner",
    "Video & Photo Editor",
    "Creating websites."
];

const typingText = document.querySelector('.typing-text');
let currentPhraseIndex = 0;
let currentCharacterIndex = 0;

function type() {
    if (currentPhraseIndex === phrases.length) {
        currentPhraseIndex = 0;
    }

    const currentPhrase = phrases[currentPhraseIndex];
    const currentCharacter = currentPhrase[currentCharacterIndex];

    typingText.textContent += currentCharacter;
    currentCharacterIndex++;

    if (currentCharacterIndex < currentPhrase.length) {
        setTimeout(type, 120);
    } else {
        typingText.textContent = '';
        currentCharacterIndex = 0;
        currentPhraseIndex++;
        setTimeout(type, 1200);
    }
}

type();
