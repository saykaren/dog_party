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

/*
function myFunction(){
    var x= document.getElementById("dogForm");
    var text = "";
    var i;
    for(i=0; i< x.clientHeight; i++){
        text += x.elements[i].value + "<br>";
    } document.getElementById("nameChange").innerHTML = text;
}
*/