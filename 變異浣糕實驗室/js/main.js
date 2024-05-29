const startButton = document.getElementById("start-button");
const homePage = document.getElementById("home");
const quizForm = document.getElementById("quiz-form");
const preface = document.getElementById("preface");
const ready = document.getElementById("ready");
const questions = quizForm.querySelectorAll(".question");
const submitButton = quizForm.querySelector('input[type="submit"]');
const answer = document.getElementById("answer");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const resultImage = document.getElementById("result-image");
const restartButton = document.getElementById("restart-button");
const downloada = document.getElementById("download");
const instergram = document.getElementById("instergram");
let currentQuestionIndex = 0;
let score = 0;

startButton.addEventListener("click", function () {
  // 隱藏首頁，顯示測驗表單
  homePage.style.display = "none";
  preface.style.display = "block";
});

var music = document.getElementById("background-music");
var startbutton = document.getElementById("start-button");
var musictwo = document.getElementById("preface-music");
var readyButton = document.getElementById("ready");
var answerbutton = document.getElementById("answer");
var musicthree = document.getElementById("submit-music");
var restart = document.getElementById("restart-button");

startbutton.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    startbutton.innerHTML = "START";
  } else {
    music.pause();
    startbutton.innerHTML = "START";
  }
});
answerbutton.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    answerbutton.innerHTML = "我準備好了";
  } else {
    music.pause();
    answerbutton.innerHTML = "我準備好了";
  }
});
restart.addEventListener("click", function () {
  if (music.paused) {
    music.play();
    restart.innerHTML = "[再測一次]";
  } else {
    music.pause();
    restart.innerHTML = "[再測一次]";
  }
});
answerbutton.addEventListener("click", function () {
  if (musicthree.paused) {
    musicthree.play();
    answerbutton.innerHTML = "查看結果";
  } else {
    musicthree.pause();
    answerbutton.innerHTML = "查看結果";
  }
});

ready.addEventListener("click", function () {
  // 隱藏首頁，顯示測驗表單
  preface.style.display = "none";
  quizForm.style.display = "block";
  // 開始測驗，顯示第一個問題
});
answer.addEventListener("click", function () {
  // 隱藏提交，顯示結果
  submit.style.display = "none";
  result.style.display = "block";
  // 显示结果页面和重新测试按钮
});

// 監聽選項的點擊事件，並跳到下一題
questions.forEach((question) => {
  const options = question.querySelectorAll('input[type="radio"]');
  options.forEach((option) => {
    option.addEventListener("click", function () {
      const nextQuestionNumber = parseInt(
        option.getAttribute("data-next-question")
      );
      showQuestion(nextQuestionNumber);
    });
  });
});

function showQuestion(questionNumber) {
  questions.forEach((question) => {
    const questionData = parseInt(question.getAttribute("data-question"));
    if (questionData === questionNumber) {
      question.style.display = "block";
    } else {
      question.style.display = "none";
    }
  });
}

quizForm.addEventListener("submit", function (e) {
  e.preventDefault(); // 防止表單提交
  calculateAndDisplayResult();
});

// 開始測驗，顯示第一個問題
showQuestion(1);

function calculateAndDisplayResult() {
  // 收集用戶的答案
  const answers = {
    q1: parseInt(document.querySelector('input[name="q1"]:checked').value),
    q2: parseInt(document.querySelector('input[name="q2"]:checked').value),
    q3: parseInt(document.querySelector('input[name="q3"]:checked').value),
    q4: parseInt(document.querySelector('input[name="q4"]:checked').value),
    q5: parseInt(document.querySelector('input[name="q5"]:checked').value),
    q6: parseInt(document.querySelector('input[name="q6"]:checked').value),
    q7: parseInt(document.querySelector('input[name="q7"]:checked').value),
    q8: parseInt(document.querySelector('input[name="q8"]:checked').value),
  };

  // 計算分數
  let score = 0;
  for (const key in answers) {
    if (answers.hasOwnProperty(key)) {
      score += answers[key];
    }
  }

  // 顯示結果
  document.getElementById("score").textContent = "";
  document.getElementById("interpretation").textContent = "";

  // 根據分數選擇要顯示的下載的結果圖片
  if (score >= 2265) {
    downloada.href = "./img/鯊魚.jpg";
  } else if (score >= 2263) {
    downloada.href = "./img/貓咪.jpg";
  } else if (score >= 2255) {
    downloada.href = "./img/鯊魚.jpg";
  } else if (score >= 2253) {
    downloada.href = "./img/貓咪.jpg";
  } else if (score >= 2245) {
    downloada.href = "./img/北極熊.jpg";
  } else if (score >= 2243) {
    downloada.href = "./img/河馬.jpg";
  } else if (score >= 2235) {
    downloada.href = "./img/北極熊.jpg";
  } else if (score >= 2233) {
    downloada.href = "./img/河馬.jpg";
  } else if (score >= 2165) {
    downloada.href = "./img/螞蟻.jpg";
  } else if (score >= 2163) {
    downloada.href = "./img/狐狸.jpg";
  } else if (score >= 2155) {
    downloada.href = "./img/螞蟻.jpg";
  } else if (score >= 2153) {
    downloada.href = "./img/狐狸.jpg";
  } else if (score >= 2145) {
    downloada.href = "./img/吉娃娃.jpg";
  } else if (score >= 2143) {
    downloada.href = "./img/貓熊.jpg";
  } else if (score >= 2135) {
    downloada.href = "./img/吉娃娃.jpg";
  } else if (score >= 2133) {
    downloada.href = "./img/貓熊.jpg";
  } else if (score >= 1265) {
    downloada.href = "./img/浣糕.jpg";
  } else if (score >= 1263) {
    downloada.href = "./img/鴨子.jpg";
  } else if (score >= 1255) {
    downloada.href = "./img/浣糕.jpg";
  } else if (score >= 1253) {
    downloada.href = "./img/鴨子.jpg";
  } else if (score >= 1245) {
    downloada.href = "./img/烏龜.jpg";
  } else if (score >= 1243) {
    downloada.href = "./img/老鼠.jpg";
  } else if (score >= 1235) {
    downloada.href = "./img/烏龜.jpg";
  } else if (score >= 1233) {
    downloada.href = "./img/老鼠.jpg";
  } else if (score >= 1165) {
    downloada.href = "./img/企鵝.jpg";
  } else if (score >= 1163) {
    downloada.href = "./img/糕利袋.jpg";
  } else if (score >= 1155) {
    downloada.href = "./img/企鵝.jpg";
  } else if (score >= 1153) {
    downloada.href = "./img/糕利袋.jpg";
  } else if (score >= 1145) {
    downloada.href = "./img/貓頭鷹.jpg";
  } else if (score >= 1143) {
    downloada.href = "./img/蜜蜂.jpg";
  } else if (score >= 1135) {
    downloada.href = "./img/貓頭鷹.jpg";
  } else if (score >= 1133) {
    downloada.href = "./img/蜜蜂.jpg";
  } else if (score > 0) {
    downloada.href = "./img/浣糕.jpg";
  }

  // 根據分數選擇要顯示的結果圖片
  if (score >= 2265) {
    resultImage.src = "./img/鯊魚.jpg";
  } else if (score >= 2263) {
    resultImage.src = "./img/貓咪.jpg";
  } else if (score >= 2255) {
    resultImage.src = "./img/鯊魚.jpg";
  } else if (score >= 2253) {
    resultImage.src = "./img/貓咪.jpg";
  } else if (score >= 2245) {
    resultImage.src = "./img/北極熊.jpg";
  } else if (score >= 2243) {
    resultImage.src = "./img/河馬.jpg";
  } else if (score >= 2235) {
    resultImage.src = "./img/北極熊.jpg";
  } else if (score >= 2233) {
    resultImage.src = "./img/河馬.jpg";
  } else if (score >= 2165) {
    resultImage.src = "./img/螞蟻.jpg";
  } else if (score >= 2163) {
    resultImage.src = "./img/狐狸.jpg";
  } else if (score >= 2155) {
    resultImage.src = "./img/螞蟻.jpg";
  } else if (score >= 2153) {
    resultImage.src = "./img/狐狸.jpg";
  } else if (score >= 2145) {
    resultImage.src = "./img/吉娃娃.jpg";
  } else if (score >= 2143) {
    resultImage.src = "./img/貓熊.jpg";
  } else if (score >= 2135) {
    resultImage.src = "./img/吉娃娃.jpg";
  } else if (score >= 2133) {
    resultImage.src = "./img/貓熊.jpg";
  } else if (score >= 1265) {
    resultImage.src = "./img/浣糕.jpg";
  } else if (score >= 1263) {
    resultImage.src = "./img/鴨子.jpg";
  } else if (score >= 1255) {
    resultImage.src = "./img/浣糕.jpg";
  } else if (score >= 1253) {
    resultImage.src = "./img/鴨子.jpg";
  } else if (score >= 1245) {
    resultImage.src = "./img/烏龜.jpg";
  } else if (score >= 1243) {
    resultImage.src = "./img/老鼠.jpg";
  } else if (score >= 1235) {
    resultImage.src = "./img/烏龜.jpg";
  } else if (score >= 1233) {
    resultImage.src = "./img/老鼠.jpg";
  } else if (score >= 1165) {
    resultImage.src = "./img/企鵝.jpg";
  } else if (score >= 1163) {
    resultImage.src = "./img/糕利袋.jpg";
  } else if (score >= 1155) {
    resultImage.src = "./img/企鵝.jpg";
  } else if (score >= 1153) {
    resultImage.src = "./img/糕利袋.jpg";
  } else if (score >= 1145) {
    resultImage.src = "./img/貓頭鷹.jpg";
  } else if (score >= 1143) {
    resultImage.src = "./img/蜜蜂.jpg";
  } else if (score >= 1135) {
    resultImage.src = "./img/貓頭鷹.jpg";
  } else if (score >= 1133) {
    resultImage.src = "./img/蜜蜂.jpg";
  } else if (score > 0) {
    resultImage.src = "./img/浣糕.jpg";
  }

  // 顯示結果圖片
  resultImage.style.display = "block";

  // 顯示結果區域
  document.getElementById("result").style.display = "block";
}

// 當按鈕被點擊時，執行導航函數
instergram.addEventListener("click", function () {
  // 使用 window.location.href 進行網頁導航
  window.location.href = "https://www.instagram.com/raccake222/";
});

// 添加重新测试按钮的点击事件
restartButton.addEventListener("click", function () {
  // 重置测试状态
  currentQuestionIndex = 0;
  score = 0;
  // 隐藏结果页面和结果图片
  result.style.display = "none";
  resultImage.style.display = "none";
  // 重新显示第一个问题
  quizForm.style.display = "block";
  // 隐藏提交按钮

  questions.forEach((question) => {
    const options = question.querySelectorAll('input[type="radio"]');

    // 將每個單選按鈕的選中狀態重置
    options.forEach((option) => {
      option.checked = false;
    });
  });
  showQuestion(1);
});
