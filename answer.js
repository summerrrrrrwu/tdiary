// 定义总分数变量
let totalScore = 0;

document.addEventListener("DOMContentLoaded", function() {
    const introText = document.getElementById('introText');
    const formGroups = document.querySelectorAll('.form-group');
    const startButton = document.getElementById('startButton');

    const paragraphs = [
        "謝謝你陪我一起看完我的2023回顧",
        "很精采吧!",
        "所以你是哪一類型的少年少女呢?",
        "可以截圖分享給你的好朋友一起玩",
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

document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const completionButton = document.getElementById('completionButton');

    // 监听填写完毕按钮的点击事件
    completionButton.addEventListener('click', function() {
        // 验证姓名和电子邮件是否都填写了
        if (nameInput.value !== '' && emailInput.value !== '') {
            // 发送 POST 请求到后端 Flask 服务
            fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: nameInput.value,
                    email: emailInput.value
                })
            }).then(response => {
                if (response.ok) {
                    alert('填写完毕！电子邮件已发送到 summerwu0624@gmail.com');
                } else {
                    alert('发生错误，请稍后再试！');
                }
            }).catch(error => {
                console.error('发生错误:', error);
                alert('发生错误，请稍后再试！');
            });
        } else {
            alert('请填写姓名和邮箱！');
        }
    });
});


