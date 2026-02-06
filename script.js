const messages = [
    { text: "Ти впевнена?", jp: "本当に？" },
    { text: "Серйозно?", jp: "マジで？" },
    { text: "Ти точно впевнена?", jp: "本当に大丈夫？" },
    { text: "Мілко, будь ласка...", jp: "お願い、ミルカ..." },
    { text: "Просто подумай про це!", jp: "ちょっと考えてみて！" },
    { text: "Якщо ти скажеш 'ні', я буду дуже сумувати...", jp: "もし『いいえ』って言ったら、すごく悲しくなる..." },
    { text: "Я буду дуже сумувати...", jp: "すごく悲しくなる..." },
    { text: "Я буду дуже-дуже сумувати...", jp: "すごくすごく悲しくなる..." },
    { text: "Добре, я припиню питати...", jp: "わかった、もう聞かない..." },
    { text: "Жартую, скажи 'так' будь ласка! ❤️", jp: "冗談だよ、お願いだから『はい』って言って！❤️" }
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const jpTextElement = document.querySelector('.jp-text');
    
    noButton.textContent = messages[messageIndex].text;
    jpTextElement.textContent = messages[messageIndex].jp;
    
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

// Фоновая музыка и сердца
const audio = document.getElementById('background-music');
if (audio) {
    audio.volume = 0.03;
    document.addEventListener('click', () => {
        audio.play().catch(() => {});
    }, { once: true });
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
