// Funkcja do przewijania
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Losowanie liczby
const randomNumberElement = document.getElementById('random-number');
const generateButton = document.getElementById('generate-button');

generateButton.addEventListener('click', () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    randomNumberElement.textContent = randomNumber;
});
