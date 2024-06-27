document.getElementById('birthdayButton').addEventListener('click', function() {
    const confettiContainer = document.getElementById('confettiContainer');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
        confetti.style.backgroundColor = 'yellow';
        confettiContainer.appendChild(confetti);
    }

    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        confettiContainer.appendChild(heart);
    }
});

const styles = `
    .confetti {
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: yellow;
        animation: fall linear infinite;
    }

    .heart {
        position: absolute;
        width: 20px;
        height: 20px;
        background-color: red;
        clip-path: polygon(50% 0%, 0% 40%, 50% 100%, 100% 40%);
        animation: fall linear infinite;
    }

    @keyframes fall {
        0% {
            transform: translateY(-100vh);
        }
        100% {
            transform: translateY(100vh);
        }
    }
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
