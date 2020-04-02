function drew_line(color, x_start, y_start, x_end, y_end){
    lienzo.beginPath();
    lienzo.strokeStyle=color;
    lienzo.moveTo(x_start,y_start);
    lienzo.lineTo(x_end,y_end);
    lienzo.stroke();
    lienzo.closePath();
}

function drewForClick(){
    var line=parseInt(text.value);;
    for(l=0;l<line;l++){
        drew_line("red",0,((ancho/line)*l),(ancho/line)*(l+1),ancho);
    }
    for(l=0;l<line;l++){
        drew_line("red",((ancho/line)*l),0,ancho,(ancho/line)*(l+1));
    }
    for(l=0;l<line;l++){
        drew_line("red",0,(ancho-(((ancho/line)*l))),(ancho/line)*(l+1),0);
    }
    for(l=0;l<line;l++){
         drew_line("red",(((ancho/line)*l)),ancho,ancho,(ancho-(ancho/line)*(l+1)));
    }
    for(l=0;l<line;l++){
        drew_line("yellow",((ancho/line)*l),0,(ancho-(((ancho/line)*l))),ancho);
   }
}

function clearCanvas(){
   lienzo.clearRect(0,0,d.width,d.height)
}

var text = document.getElementById("text_line");
var button = document.getElementById("boton");
var clear = document.getElementById("borrar");
button.addEventListener("click",drewForClick);
clear.addEventListener("click",clearCanvas)

var d = document.getElementById("drews");
var ancho = d.width;
var lienzo = d.getContext("2d");



    