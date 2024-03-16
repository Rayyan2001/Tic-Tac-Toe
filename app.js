let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset-btn")
let newBtn = document.querySelector("#new-btn")
let msg = document.querySelector("#msg")
let msgContainer = document.querySelector(".msg-container")
let turn0 = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        }
        else {
            box.innerText = "X";
            turn0 = true
        }

        box.disabled = true;

        checkWinner();
    })
})

const resetGame = () => {
    turn0 = true
    enableBoxes()
    msgContainer.classList.add("hide")
}

const disabledBoxes = () => {
    for (box of boxes) {
        box.disabled = true
    }
}
const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false
        box.innerText = ""
    }
}

const Winner = () => {
    msg.innerText = `Winner is ${pos1}`

    msgContainer.classList.remove("hide")
    disabledBoxes();
}

const checkWinner = () => {
    for (let pattern of winPattern) {
        pos1 = boxes[pattern[0]].innerText
        pos2 = boxes[pattern[1]].innerText;
        pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== '' && pos2 !== "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                Winner(pos1)

            }
        }
    }
}

resetBtn.addEventListener("click", resetGame)
newBtn.addEventListener("click", resetGame)