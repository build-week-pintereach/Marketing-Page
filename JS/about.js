var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var btn1 = document.getElementById("tim");
var btn2 = document.getElementById("michael");
var btn3 = document.getElementById("ken");
var btn4 = document.getElementById("jacob");
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3 = document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

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

span.onclick = function() {
        modal1.style.display = 'none';
    }

span2.onclick = function() {
        modal2.style.display = 'none';
    }

span3.onclick = function() {
        modal3.style.display = 'none';
    }

span4.onclick = function() {
        modal4.style.display = 'none';
    }