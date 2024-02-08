// Text Typing Animation Functionality
document.addEventListener("DOMContentLoaded", function() {
    const introText = document.getElementById('introText');
    const paragraphs = [
        "謝謝你陪我一起看完我的2023回顧",
		"很精采吧!",
		"所以你是哪一類型的少年少女呢?",
		"長按可以儲存圖片喔，記得分享給你的好朋友一起玩",
        "下面也留下你的名字跟email",
        "將這本日記一起成為我們共同撰寫的回憶📔",
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

document.addEventListener("DOMContentLoaded", function() {
    const formGroups = document.querySelectorAll('.form-group');

    function fadeInFormGroups() {
        let opacity = 0;
        formGroups.forEach(function(formGroup) {
            let intervalId = setInterval(function() {
                if (opacity < 1) {
                    opacity += 0.05; // 调整淡入速度
                    formGroup.style.opacity = opacity;
                } else {
                    clearInterval(intervalId);
                }
            }, 50); // 调整淡入间隔（毫秒）
        });
    }

    // 在类型动画完成后调用淡入表单组
    setTimeout(fadeInFormGroups, paragraphs.length * 50 + 1000); // 加上类型动画的持续时间

    // Redirect to Question 1 Functionality
    const startButton = document.getElementById('startButton');

    startButton.addEventListener('click', function() {
        window.location.href = 'index2023.html';
    });
});
