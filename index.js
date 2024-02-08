// Text Typing Animation Functionality
document.addEventListener("DOMContentLoaded", function() {
    const introText = document.getElementById('introText');
    const paragraphs = [
        "你現在正在翻閱的是...",
        "小T的美妝日記",
        "阿你問小T是素隨?",
        "Ahaha~就是本小姐我拉",
        "來一起看看我2023年的日記",
        "並幫我做決定吧!",
        "❤️❤️❤️"
    ];

    let index = 0;
    let paragraphIndex = 0;

    function typeWriter() {
        if (paragraphIndex < paragraphs.length) {
            if (index < paragraphs[paragraphIndex].length) {
                introText.innerHTML += paragraphs[paragraphIndex].charAt(index);
                index++;
                setTimeout(typeWriter, 50); // 调整打字速度（毫秒）
            } else {
                introText.innerHTML += '<br>';
                paragraphIndex++;
                index = 0;
                setTimeout(typeWriter, 50);
            }
        } else {
            fadeInButton();
        }
    }

    setTimeout(typeWriter, 1000);

    function fadeInButton() {
        const startButton = document.getElementById('startButton');
        let opacity = 0;
        const fadeInInterval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.05; // 调整淡入速度
                startButton.style.opacity = opacity;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 50); // 调整淡入间隔（毫秒）
    }
});

// Redirect to Question 1 Functionality
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', function() {
        window.location.href = 'index2023.html';
    });
});
