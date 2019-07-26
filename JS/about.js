// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var btn1 = document.getElementById("tim");

var btn2 = document.getElementById("michael");

var btn3 = document.getElementById("ken");

var btn4 = document.getElementById("jacob");

btn1.onclick = function() {
  modal1.style.display = "block";
};

btn2.onclick = function() {
  modal2.style.display = "block";
};

btn3.onclick = function() {
  modal3.style.display = "block";
};

btn4.onclick = function() {
  modal4.style.display = "block";
};

window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
};
