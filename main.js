let navBar = document.querySelector("nav a");
let trigram = document.getElementById("trigram");
let tracker = 1;


function navButton() {
    if (tracker === 1) {
        navBar.classList.add("navbar");
        navBar.style.display = "flex";
        trigram.style.display = "none";
        tracker = 0;
    }
    else if (tracker === 0) {
        navBar.classList.remove("navbar");
        trigram.style.display = "block";
        tracker = 1;
    }
}