

//when user scrolls execute function
window.onscroll = function() {myFunction()};

var test = document.getElementById("navbar");
var sticky = test.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function dogFunction(){
     document.getElementById("nameChange").innerHTML = document.getElementById("name").value;
}
