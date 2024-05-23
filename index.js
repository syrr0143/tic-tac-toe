let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.querySelector('.msg-container');
let winnigPattern = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]];
let turnPlayerO = true;
let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        count++;
        if (turnPlayerO) {
            box.innerHTML = 'O';
            box.classList.add('o')
            turnPlayerO = false;
        }
        else {
            box.innerHTML = "X"
            box.classList.add('x')
            turnPlayerO = true;
        }
        box.disabled = true;
        if (count === 9 && !checkWinner()) {
            msg.innerText = `Game is DRAW `;
            msg.classList.remove("hide");
            disbalebtns();
        }
    })
});
const disbalebtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enablebtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = ''
    }
}
const showwinner = (e) => {
    msg.innerText = `CONGRATULATIONS ${e} `;
    msg.classList.remove("hide");
    disbalebtns();
}
const checkWinner = () => {
    for (pattern of winnigPattern) {
        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;
        if (pos1value !== '' && pos2value !== '' && pos3value !== '') {
            if (pos1value === pos2value && pos2value === pos3value) {
                showwinner(pos1value);
            }
        }
    };
}
const resetgame = () => {
    turnPlayerO = true;
    enablebtns();
    msg.classList.add("hide");
};
resetBtn.addEventListener("click", (e) => {
    resetgame();
})