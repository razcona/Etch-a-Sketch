const canvas = document.querySelector("#container");

let row = document.createElement("div");
row.classList = "row";
let box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
canvas.appendChild(row);

row = document.createElement("div");
row.classList = "row";
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
box = document.createElement("div");
box.classList = "box";
row.appendChild(box);
canvas.appendChild(row);

const draw = document.querySelectorAll(".box");

canvas.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "black";
});


/**
 * -- clean up the above code by making use of for loops.
 * -- introduce a text field that takes the user input for canvas size
 * -- create a variable limit of size 100x100 for the canvas
 * -- create a variable that takes the width size of the canvas and modifys it on the container
 *  
 *
 *
 *
 */
