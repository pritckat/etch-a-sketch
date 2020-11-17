function createDivs() {
    let div = document.createElement('div')
    let container = document.getElementById('grid')
    container.appendChild(div)
}

for (i=0; i < 16; i++) {
    for (j=0; j<16; j++) {
        createDivs();
    }
}

let grid = document.getElementById('grid')
grid.addEventListener("mouseover", function(event) {
    event.target.style.background = "purple";
    setTimeout(function() {
        event.target.style.background = "";
    }, 500);
}, false);
