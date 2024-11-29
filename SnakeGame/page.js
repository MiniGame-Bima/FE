// HTML 요소 가져오기
const snakeButton = document.getElementById("snakeButton");
const ticTacToeButton = document.getElementById("ticTacToeButton");
const brickButton = document.getElementById("brickButton");
const zetButton = document.getElementById("zetButton");
const tetrisButton = document.getElementById("tetrisButton");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const closePopupButton = document.getElementById("closePopup");

// 게임별 규칙 정의
const gameRules = {
  snakePopup: {
    title: "Snake Game 🐍",
    description: `
      Snake Game에 오신 것을 환영합니다! <br>
      1. 방향 키를 사용해 뱀을 움직입니다.<br>
      2. 사과를 먹으면 점수가 올라갑니다.<br>
      3. 뱀이 벽에 부딪히거나 폭탄을 먹으면 게임이 종료됩니다!
    `,
  },
  ticTacToePopup: {
    title: "Tic-Tac-Toe Game ✖️⭕",
    description: `
      Tic-tac-toe Game에 오신 것을 환영합니다! <br>
      1. 3x3 칸에 교대로 X와 O를 놓습니다.<br>
      2. 가로, 세로 또는 대각선으로 3개를 먼저 연결하면 승리합니다.<br>
      3. 무승부 시 게임이 종료됩니다!
    `,
  },
  brickPopup: {
    title: "Brick Game 🧱",
    description: `
      Brick Game에 오신 것을 환영합니다! <br>
      1. 패들을 움직여서 공을 이동 시킵니다. <br>
      2. 공이 벽돌에 부딪히면 벽돌이 사라진다.<br>
      3. 공이 바닥으로 떨어지면 게임이 종료됩니다.
    `,
  },
  zetPopup: {
    title: "Zet Game ✈️ ",
    description: `
      Zet Game에 오신 것을 환영합니다! <br>
      1. 날아오는 전투기를 피합니다.<br>
      2. 전투기에 3번 부딪히면 게임이 종료됩니다.
    `,
  },
  tetrisPopup: {
    title: "Tetris Game 🧩",
    description: `
      Tetris Game에 오신 것을 환영합니다! <br>
      1. 떨어지는 블록들을 회전시켜서 빈 공간에 맞춰 넣습니다.<br>
      2. 가로 줄이 완성되면 그 줄이 사라지고 점수가 올라갑니다.
    `,
  },
};

// 팝업 열기 함수
function openPopup(popupId) {
  const { title, description } = gameRules[popupId];
  popupTitle.innerHTML = title;
  popupDescription.innerHTML = description;
  popup.style.display = 'block'; // 팝업 표시
}

// 팝업 닫기 함수
function closePopup() {
  popup.style.display = 'none'; // 팝업 숨기기
}

// 팝업 닫기 버튼 클릭 이벤트
closePopupButton.addEventListener("click", closePopup);

// 각 게임 버튼 클릭 시 설명 창 열기
snakeButton.addEventListener("click", () => openPopup("snakePopup"));
ticTacToeButton.addEventListener("click", () => openPopup("ticTacToePopup"));
brickButton.addEventListener("click", () => openPopup("brickPopup"));
zetButton.addEventListener("click", () => openPopup("zetPopup"));
tetrisButton.addEventListener("click", () => openPopup("tetrisPopup"));

const pyloopLogo = document.getElementById("pylooplogo");

pyloopLogo.addEventListener("click", () => {
  window.location.href = "index.html"; // 클릭 시 index.html로 이동
});
