let navBar = document.querySelector("nav");
let trigram = document.getElementById("trigram");
let tracker = 1;


function navButton() {
    if (tracker === 1) {
        navBar.style.display = "block";
        trigram.style.display = "none";
        tracker = 0;
    }
    else if (tracker === 0) {
        navBar.classList.remove("navbar");
        trigram.style.display = "block";
        tracker = 1;
    }
}