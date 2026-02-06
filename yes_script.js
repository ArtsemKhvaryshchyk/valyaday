function createHearts() {
    const container = document.body;
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; 
        container.appendChild(heart);
    }
}
createHearts();

const audio = document.getElementById('background-music');
if (audio) {
    audio.volume = 0.03;
    audio.play().catch(() => {
        document.addEventListener('click', () => { audio.play(); }, { once: true });
    });
}

// Эффект конфетти
var duration = 15 * 1000;
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();
  if (timeLeft <= 0) return clearInterval(interval);
  var particleCount = 50 * (timeLeft / duration);
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
  confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
}, 250);
