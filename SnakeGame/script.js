// HTML 요소 가져오기
const snakeButton = document.getElementById("Snake");
const tikButton = document.getElementById("tikButton");
const etcButton = document.getElementById("EtcButton");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupDescription = document.getElementById("popup-description");
const closePopupButton = document.getElementById("closePopup");

// 게임별 규칙 정의
const gameRules = {
  Snake: {
    title: "Rule 🐍",
    description: `
      Snake Game에 오신 것을 환영합니다! <br>
      1. 방향 키를 사용해 뱀을 움직입니다.<br>
      2. 사과를 먹으면 점수가 올라갑니다.<br>
      3. 뱀이 벽에 부딪히거나 폭탄을 먹으면 게임이 종료됩니다!
    `,
  },
  Tik: {
    title: "Rule ✖️⭕",
    description: `
      Tic-tac-toe Game에 오신 것을 환영합니다! <br>
      1. 3x3 칸에 교대로 X와 O를 놓습니다.<br>
      2. 가로, 세로 또는 대각선으로 3개를 먼저 연결하면 승리합니다.<br>
      3. 무승부 시 게임이 종료됩니다!
    `,
  },
  Etc: {
    title: "Rule 🧱",
    description: `
      Brick Game에 오신 것을 환영합니다! <br>
      1. 패들을 움직여서 공을 이동 시킵니다. <br>
      2. 공이 벽돌에 부딪히면 벽돌이 사라진다.<br>
      3. 공이 바닥으로 떨어지면 게임이 종료됩니다.
    `,
  },
};

// 팝업 열기 함수
function openPopup(game) {
  const { title, description } = gameRules[game];
  popupTitle.innerHTML = title;
  popupDescription.innerHTML = description;
  popup.classList.remove("hidden");
}

// 팝업 닫기 이벤트
closePopupButton.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// 버튼 클릭 이벤트 추가
snakeButton.addEventListener("click", () => openPopup("Snake"));
tikButton.addEventListener("click", () => openPopup("Tik"));
etcButton.addEventListener("click", () => openPopup("Etc"));
