// Function to get the current Beijing time
function getBeijingTime() {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000; // UTC time
    const beijingOffset = 8 * 60 * 60 * 1000; // Beijing is UTC+8
    return new Date(utc + beijingOffset);
}

// Messages to display while counting down
const messages = [
    "Stay positive, the New Year is coming soon! 🌟",
    "Excitement is in the air, can you feel it? 🎆",
    "Almost there... just a little longer! 🕛",
    "Let’s make this New Year unforgettable! 🎉",
    "Your dreams are just about to begin! ✨",
    "The best is yet to come. Get ready! 🌟"
];

// Countdown logic
function startCountdown() {
    const countdownElement = document.getElementById('timer');
    const messageElement = document.getElementById('message');
    const targetDate = new Date('2025-01-01T00:00:00+08:00'); // Midnight, Beijing Time
    let messageIndex = 0;

    function updateCountdown() {
        const now = getBeijingTime();
        const timeDifference = targetDate - now;

        if (timeDifference > 0) {
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
            const seconds = Math.floor((timeDifference / 1000) % 60);

            countdownElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

            // Display messages while counting down
            messageElement.textContent = messages[messageIndex];

            // Update the message every 10 seconds
            if (seconds % 10 === 0 && messageIndex < messages.length - 1) {
                messageIndex++;
            }
        } else {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = `🎉 The Countdown is finally Over! Welcome, 2025! 🌟<br>
            As we step into this new year, let's embrace the endless opportunities it brings. <br> May 2025 be filled with new adventures, meaningful connections, and the strength to overcome any challenges. <br> Together, let's make this year unforgettable. Happy New Year to you and yours! 🎆`;
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initialize immediately
}

startCountdown();
