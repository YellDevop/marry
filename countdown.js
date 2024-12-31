// Data target del countdown (ad esempio, 1 gennaio 2025)
const targetDate = new Date(Date.UTC(2025, 4, 17, 17, 0, 0)).getTime();

// Funzione per aggiornare il countdown
function updateCountdown() {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    // Calcola giorni, ore, minuti e secondi
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Mostra il countdown
    document.getElementById("time").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // Se il countdown è finito
    if (timeRemaining < 0) {
        document.getElementById("countdown").innerHTML = "Il tempo è scaduto!";
    }
}

// Aggiorna il countdown ogni secondo
setInterval(updateCountdown, 1000);

// Funzione per copiare il testo negli appunti
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Copiato negli appunti: " + text);
    });
}
