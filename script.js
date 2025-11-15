const textElement = document.querySelector('.typing-text');
const words = ['DS (Sistemas)', 'Java & Python', 'Full Stack PHP'];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    textElement.textContent = currentText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 2000); // Pausa maior para leitura
    }
}

document.addEventListener('DOMContentLoaded', typeEffect);