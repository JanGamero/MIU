document.getElementById('email').addEventListener('click', function() {
    copyToClipboard('email@example.com');
    alert('Correu electrònic copiat al porta-retalls!');
});

document.getElementById('phone').addEventListener('click', function() {
    copyToClipboard('123 456 789');
    alert('Telèfon copiat al porta-retalls!');
});

function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = text;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
}
// Obtenim totes les targetes interactives
const flipCards = document.querySelectorAll('.flip-card');

flipCards.forEach(card => {
    card.addEventListener('mouseout', function() {
        // Comprovar si la targeta ja ha estat girada
        if (card.getAttribute('data-flipped') === 'false') {
            // Afegir la classe 'flipped' per girar la targeta
            card.classList.add('flipped');
            card.setAttribute('data-flipped', 'true');
        }
        else {
            // Afegir la classe 'flipped' per girar la targeta
            card.classList.remove('flipped');
            card.setAttribute('data-flipped', 'false');
        }
    });
});

