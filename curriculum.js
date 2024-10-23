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
const flipCards = document.querySelectorAll('.flip-card');

// Variable per controlar el retard
const flipDelay = 1000; // Retard en milisegons (1 segon)

flipCards.forEach(card => {
    // Afegir l'esdeveniment 'mouseout' per girar la targeta
    card.addEventListener('mouseover', function() {
        // Comprovem si la targeta no està girada i no estem en retard
        if (card.getAttribute('data-flipped') === 'false' && !card.dataset.flipping) {
            card.dataset.flipping = 'true'; // Bloquegem el gir
            card.classList.add('flipped');
            card.setAttribute('data-flipped', 'true');
            
            // Afegir un retard per desbloquejar
            setTimeout(() => {
                delete card.dataset.flipping; // Desbloquegem el gir després del retard
            }, flipDelay);
        }
    });

    // Afegir l'esdeveniment 'click' per revertir el gir
    card.addEventListener('click', function() {
        // Tornem a girar la targeta si ja ha estat girada
        if (card.getAttribute('data-flipped') === 'true' && !card.dataset.flipping) {
            card.classList.remove('flipped');
            card.setAttribute('data-flipped', 'false');
            card.dataset.flipping = 'true'; // Bloquegem el gir en tornar
            
            // Afegir un retard per desbloquejar
            setTimeout(() => {
                delete card.dataset.flipping; // Desbloquegem el gir després del retard
            }, flipDelay);
        }
    });
});
