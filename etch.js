function createDivs() {
    let div = document.createElement('div')
    let container = document.getElementById('grid')
    container.appendChild(div)
}

function clearGrid() {
    let container = document.getElementById('grid')
    container.innerHTML = '';
    makeNewGrid();
}

function makeNewGrid() {
    let numberOfRows = prompt("How many rows would you like?")
    for (i=0; i < numberOfRows; i++) {
        for (j=0; j<numberOfRows; j++) {
            createDivs();
        }
    }
    let grid = document.getElementById('grid')
    grid.style.gridTemplateColumns = (`repeat(${numberOfRows}, 0fr`)
}


let grid = document.getElementById('grid')
grid.addEventListener("mouseover", function(event) {
    event.target.style.background = "purple";
    setTimeout(function() {
        event.target.style.background = "";
    }, 500);
}, false);

for (i=0; i < 16; i++) {
    for (j=0; j<16; j++) {
        createDivs();
    }
}