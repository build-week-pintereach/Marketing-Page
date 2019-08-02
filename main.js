let nav = document.querySelector("nav");
// let nav = document.querySelector(".navbar");
// let responsive = document.querySelector(".responsive");
let tracker = 1;

function navButton() {
    if (tracker === 1) {
        nav.classList.remove("navbar");
        createClass();
        tracker = 0;
    }
    else if (tracker === 0) {
        nav.classList.remove("responsive");
        nav.classList.add("navbar");
        document.querySelector(".exit").remove();
        tracker = 1;
    }
}

function createClass() {
    let node = document.createElement("a");
    let textnode = document.createTextNode("X");

    node.appendChild(textnode);
    node.style.cursor = "pointer";
    node.createElement
    node.setAttribute("class", "exit");
    node.setAttribute("onclick", "navButton()");
    nav.appendChild(node);
}