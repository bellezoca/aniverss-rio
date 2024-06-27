document.getElementById('birthdayButton').addEventListener('click', function() {
    const confettiContainer = document.getElementById('confettiContainer');

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
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
