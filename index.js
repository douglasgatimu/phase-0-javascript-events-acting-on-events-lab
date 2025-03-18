// Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById('game');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    //attempt1->const right = game.offsetWidth - (left + dodger.offsetWidth);
    //attempt2->const maxLeft = game.offsetWidth - dodger.offsetWidth;

    //attempt1->if (right > 0) {
    //attempt2->if (left < maxLeft) {
    if (left < 360){
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});