function myFunction(){
    var x= document.getElementById("dogForm");
    var text = "";
    var i;
    for(i=0; i< x.clientHeight; i++){
        text += x.elements[i].value + "<br>";
    } document.getElementById("nameChange").innerHTML = text;
}