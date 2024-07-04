const cards = [
    { question: 'Which symbol is used to open and close an HTML comment?', answer: '// and <>' },
    { question: 'How can you make a button appear disabled in CSS?', answer: 'Use the opacity property with a low value' },
    { question: 'All websites require images to function. (True or False)', answer: ' False' },
    { question: 'What does the abbreviation "www" stand for in a web address?', answer: ' World Wide Web' },
    { question: 'What tag do you use to add a new line while writing text content in an HTML element?', answer: 'Use the <br> tag' },


];

let currentCardIndex = 0;
const cardElement = document.querySelector('.card');
const frontElement = document.querySelector('.front p');
const backElement = document.querySelector('.back p');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateCard() {
    frontElement.textContent = cards[currentCardIndex].question;
    backElement.textContent = cards[currentCardIndex].answer;
    cardElement.classList.remove('flip');
}

function showNextCard() {
    if (currentCardIndex < cards.length - 1) {
        currentCardIndex++;
        updateCard();
        prevButton.disabled = false;
        if (currentCardIndex === cards.length - 1) {
            nextButton.disabled = true;
        }
    }
}

function showPrevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateCard();
        nextButton.disabled = false;
        if (currentCardIndex === 0) {
            prevButton.disabled = true;
        }
    }
}

cardElement.addEventListener('click', () => {
    cardElement.classList.toggle('flip');
});

prevButton.addEventListener('click', showPrevCard);
nextButton.addEventListener('click', showNextCard);

updateCard();
prevButton.disabled = true;
if (cards.length === 1) {
    nextButton.disabled = true;
}
