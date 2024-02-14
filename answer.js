// 定义总分数变量
let totalScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    const introText = document.getElementById('introText');
    const formGroups = document.querySelectorAll('.form-group');
    const startButton = document.getElementById('startButton');
    const paragraphs = [
        "你做為小T，青春無敵的18歲女高中生，度過了最熱烈的一年",
        "很精采吧!",
        "所以你是哪一類型的少年少女呢?",
        "可以截圖分享給你的好朋友一起玩",
        "下面也留下你的名字跟email",
        "將這本日記一起成為我們共同撰寫的回憶📔",
		"      ",
		"P.S. 想了解更多台灣氣候的保養知識可以點擊下面的連結喔",
		"by.小T",
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
            fadeInForm(); // 当文本打字动画完成后，显示表单
        }
    }

    function fadeInForm() {
        let opacity = 0;
        const fadeInInterval = setInterval(function() {
            if (opacity < 1) {
                opacity += 0.05; // 调整淡入速度
                formGroups.forEach(function(formGroup) {
                    formGroup.style.opacity = opacity;
                });
                startButton.style.opacity = opacity;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 50); // 调整淡入间隔（毫秒）

         startButton.addEventListener('click', function() {
        // 清空总分数
        totalScore = 0;

        // 将总分数存储到本地存储中
        localStorage.setItem('totalScore', totalScore);

        // 重定向到 index.html
        window.location.href = 'index.html';
    });
}

    // 在类型动画完成后调用淡入表单和按钮
    setTimeout(typeWriter, 1000); // 延迟显示文本动画
});
