// question.js

// 定义一个变量来存储用户的总分
let totalScore = 0;

// 定义一个函数，用于处理用户选择答案后的逻辑
function submitAnswer(selectedOption) {
  // 将用户选择的答案转换为分数并累加到总分中
  switch (selectedOption) {
    case "A":
      totalScore += 1;
      break;
    case "B":
      totalScore += 2;
      break;
    case "C":
      totalScore += 3;
      break;
    case "D":
      totalScore += 4;
      break;
  }
  console.log(`当前totalScore：${totalScore}`);
  
  localStorage.setItem('totalScore', totalScore);
	
  // 跳转到下一个问题或答案页面
  const currentQuestionNumber = getCurrentQuestionNumber();
  const nextQuestionNumber = currentQuestionNumber + 1;

  if (nextQuestionNumber <= 9) {
    // 如果还有下一个问题，跳转到下一个问题
    window.location.href = "question" + nextQuestionNumber + ".html";
  } else {
    // 如果是最后一个问题，跳转到相应的答案页面
    redirectToAnswerPage();
  }

  // 调用更新分数显示的函数
  updateScoreDisplay();
}


 

// 定义一个函数，用于获取当前问题的编号
function getCurrentQuestionNumber() {
  const currentUrl = window.location.href;
  const questionNumberIndex = currentUrl.lastIndexOf("question") + 8;
  return parseInt(currentUrl.substring(questionNumberIndex));
}

// 定义一个函数，用于根据总分跳转到相应的答案页面
function redirectToAnswerPage() {
  let answerPage = "";

  if (totalScore >= 9 && totalScore <= 15) {
    answerPage = "answer1.html";
  } else if (totalScore >= 16 && totalScore <= 22) {
    answerPage = "answer2.html";
  } else if (totalScore >= 23 && totalScore <= 29) {
    answerPage = "answer3.html";
  } else if (totalScore >= 30 && totalScore <= 36) {
    answerPage = "answer4.html";
  }

  // 跳转到相应的答案页面
  window.location.href = answerPage;
}

// 定义一个函数，用于更新分数显示
function updateScoreDisplay() {
  // 获取用于显示分数的元素
  const scoreDisplay = document.getElementById("user-score");

  // 更新显示的分数
  scoreDisplay.innerText = `小T的保養知識已增長：${totalScore} 分`;
}

document.addEventListener("DOMContentLoaded", function() {
  // 从本地存储中获取totalScore
  totalScore = parseInt(localStorage.getItem('totalScore')) || 0;

  // 调用更新分数显示的函数
  updateScoreDisplay();
});