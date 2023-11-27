let colour = "black";

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numberDivs = size * size;

    for(let i=0; i < numberDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colourDiv);
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize() {
    let input = prompt("What would the size of the board be?");
    let message = document.querySelector("#message");
    if(input == "") {
        message.innerHTML = "Please provide a number";
    }
    else if(input < 1 || input > 100) {
        message.innerHTML = "Please provide number between 1 and 100";
    }
    else {
        message.innerHTML = "Create!";
        return input;
    }
}

function colourDiv(){
    if(colour == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = "black";
    }
}

function setColour(colourChoice) {
    colour = colourChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}