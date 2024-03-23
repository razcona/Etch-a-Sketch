const canvas = document.querySelector("#canvas");
const size = document.querySelector("#size");
const submit = document.querySelector("#submit");

function createGrid(size) {
    canvas.style.width = `${size * 25}px`;
    let row;
    let box;
    for (let i = 0; i < size; i++) {
        row = document.createElement("div");
        row.classList = "row";
        for (let j = 0; j < size; j++) {
            box = document.createElement("div");
            box.classList = "box";
            row.appendChild(box);
        }

        canvas.appendChild(row);
    }

}

function deleteGrid() {
    const grid = document.querySelector("#canvas");
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

canvas.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
});



submit.addEventListener("click", () => {
    deleteGrid();
    let getUserInput = Number(size.value);
    if (isNaN(getUserInput)) {
        alert("You did not enter a valid number! please enter a number from 1 - 100!");
    }
    else if (getUserInput > 100) {
        alert("Grid size is too large! Please enter a number no greater than 100!");
    }

    else createGrid(getUserInput);
})

size.addEventListener("click", () => size.value = "");
