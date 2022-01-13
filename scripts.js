const container = document.getElementById("container");

function makeGrid() {
    for (var i = 0; i<(8 * 8); i++) {
        var box = document.createElement('div');
        box.className = "box";
    }
}