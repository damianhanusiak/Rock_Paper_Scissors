// nav - text typing
const navText = document.querySelector('h1');
const text = '"rock, paper, scissors" game...';
let indexText = 0;
const time = 200;

const typing = () => {
    navText.textContent += text[indexText];
    indexText++;
    if (indexText == text.length) clearInterval(indexTyping);
}

const indexTyping = setInterval(typing, time);