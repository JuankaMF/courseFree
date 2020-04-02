var drew=document.getElementById("dibujo");
var sheet=drew.getContext("2d");
var button1=document.getElementById("boton1");
var button2=document.getElementById("boton2");
var button3=document.getElementById("boton3");


document.addEventListener("mousemove", drewKeyboard);
button2.addEventListener("click", cRed);
button3.addEventListener("click", cYellow);
button1.addEventListener("click", cBrown);


var colorcito="red";

function cRed(){
    colorcito="red"
}
function cYellow(){
    colorcito="yellow"
}
function cBrown(){
    colorcito="brown"
}
function drewKeyboard(data){  
    var col=colorcito;
    var move=1;

    if(data.buttons == 1){
        drewLine(col,data.layerX,data.layerY,data.layerX+move,data.layerY+move,sheet);
    }
}
function drewLine(color, xStart, yStart, xEnd, yEnd, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.lineWidth=3;
    lienzo.moveTo(xStart, yStart);
    lienzo.lineTo(xEnd, yEnd);
    lienzo.stroke();
    lienzo.closePath();
}