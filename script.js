
const gridFormSize = document.getElementById("gridForm");
const gridFormColor = document.getElementById("colorForm");

const grid = document.querySelector("#grid");

const eraser = document.querySelector("#easer");
const blackPen = document.querySelector("#black");


let currentColor = "Black";
let currentBoardSize = 16;

function clearGrid(){
    const childern = Array.from(grid.children);
    childern.forEach(element => {
        grid.removeChild(element)
    });
}

function createGrid(size){
    const side = 600/size - 2;
    for (let i=0; i < size*size; i++){
        let cell = document.createElement("div");
        cell.style.width = `${side}px`;
        cell.style.height = `${side}px`;
        cell.style.border = "1px solid black";
        cell.style.backgroundColor = "white";
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = `${currentColor}`;
        })
        grid.append(cell);

    } 

    

}

function setUpBoard(size){
    clearGrid();
    createGrid(size);
}

function changeColor(){
    const cells = Array.from(grid.childern);
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = `${currentColor}`;
        })
    })
}

gridFormSize.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData(gridFormSize);
    const size = form.get("size");
    currentBoardSize = size;
    setUpBoard(size)
})

gridFormColor.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = new FormData(gridFormColor);
    const size = form.get("color");
    currentColor = size;
    changeColor();

})


createGrid(16);

eraser.addEventListener("click", () => {
    currentColor = "white";
    changeColor();
})


blackPen.addEventListener("click", () => {
    currentColor = "Black";
    changeColor();
})
