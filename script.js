const messages = [
    { text: "Ты уверена?", jp: "本当に？" },
    { text: "Серьёзно?", jp: "マジで？" },
    { text: "Ты точно уверена?", jp: "本当に大丈夫？" },
    { text: "Милка, пожалуйста...", jp: "お願い、ミルカ..." },
    { text: "Просто подумай об этом!", jp: "ちょっと考えてみて！" },
    { text: "Если ты скажешь 'нет', я буду очень грустный...", jp: "もし『いいえ』って言ったら、すごく悲しくなる..." },
    { text: "Я буду очень грустный...", jp: "すごく悲しくなる..." },
    { text: "Я буду очень-очень грустный...", jp: "すごくすごく悲しくなる..." },
    { text: "Ладно, я перестану спрашивать...", jp: "わかった、もう聞かない..." },
    { text: "Шучу, скажи 'да' пожалуйста! ❤️", jp: "冗談だよ、お願いだから『はい』って言って！❤️" }
];

let messageIndex = 0;

function handleNoClick() {
    const jpTextElement = document.querySelector('.jp-text');
    const yesButton = document.querySelector('.yes-button');
    const currentMessage = messages[messageIndex];

    
    jpTextElement.textContent = currentMessage.jp;

   
    messageIndex = (messageIndex + 1) % messages.length;

    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}


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
audio.volume = 0.03; 


audio.play().then(() => {
    console.log("Музыка начала играть автоматически.");
}).catch((error) => {
    console.log("Автовоспроизведение заблокировано. Ждем взаимодействия пользователя.");
    
    document.addEventListener('click', () => {
        audio.play();
    });
});


var duration = 15 * 1000; 
var animationEnd = Date.now() + duration;
var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

var interval = setInterval(function() {
  var timeLeft = animationEnd - Date.now();

  if (timeLeft <= 0) {
    return clearInterval(interval);
  }

  var particleCount = 50 * (timeLeft / duration);
  
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
  confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
}, 250);