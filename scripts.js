const container = document.getElementById("container");

function makeGrid() {
    for (var i = 0; i < (169); i++) {
        var box = document.createElement('div');
        box.className = "box";
        document.getElementById('container').appendChild(box);
    }
}

window.onload(makeGrid());

