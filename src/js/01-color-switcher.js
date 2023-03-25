
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body');
const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");

let intervalId;

btnStart.addEventListener("click", onBtnStart);

function onBtnStart (event) {
    btnStart.disabled = true;
    intervalId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

btnStop.addEventListener("click", () => {
    btnStart.disabled = false;
    clearInterval(intervalId);
});

