var vp = document.getElementById("villaPlatzi");
var lienzo = vp.getContext("2d");

var background = {
    url:"tile.webp",
    cargaOK:false        // Objeto Literal
}
var cow = {
    url:"vaca.webp",
    cargaOk:false
}
var hog = {
    url:"cerdo.webp",
    cargaOK:false
}
var chicken = {
    url:"pollo.webp",
    cargaOK:false
}

background.image = new Image();
background.image.src=background.url;
background.image.addEventListener("load", loadBackground);

cow.image = new Image();
cow.image.src=cow.url;
cow.image.addEventListener("load", loadCow);

hog.image = new Image();
hog.image.src=hog.url;
hog.image.addEventListener("load", loadHog);

chicken.image = new Image();
chicken.image.src=chicken.url;
chicken.image.addEventListener("load", loadChicken);

var n = random(5,20);

var key_walk={
    W:87,
    A:65,
    S:83,
    D:68
}

var buttonCow= document.getElementById("bCow");
buttonCow.addEventListener("click", vaca);
document.addEventListener("keydown", move_hog);

var x=420;
var y=310;

function vaca(){
    x=420;
    y=310;
    
    lienzo.drawImage(background.image,0,0);      
    lienzo.drawImage(cow.image,420,250);
    lienzo.drawImage(hog.image,x,y);
    lienzo.drawImage(chicken.image,420,210);
}

function move_hog(data){
   var move=5;
   switch(data.keyCode){
        case key_walk.A:
            x-=move;
            backDraw();    
        break;
        case key_walk.W:
            y-=move;
            backDraw();
        break;
        case key_walk.S:
            y+=move;
            backDraw();
        break;
        case key_walk.D:
            x+=move;
            backDraw();
        break;
   }  
}

function backDraw(){
    lienzo.drawImage(background.image,0,0);      
    lienzo.drawImage(cow.image,420,250);
    lienzo.drawImage(hog.image,x,y);
    lienzo.drawImage(chicken.image,420,210);
}

function loadBackground(){
    background.cargaOK=true;
    draw();
}
function loadCow(){
    cow.cargaOk=true;
    draw();
}
function loadHog(){
    hog.cargaOK=true;
    draw();
}
function loadChicken(){
    chicken.cargaOK=true;
    draw();
}

function draw(){
    if(background.cargaOK){
        lienzo.drawImage(background.image,0,0);      
    }
    if(cow.cargaOk){
        for(var i=0; i<n; i++){
            var a = random(0,7);
            var b = random(0,7);
            lienzo.drawImage(cow.image,a*60,b*60);       
        }
    }
    if(hog.cargaOK){
        lienzo.drawImage(hog.image,x,y);
              
    }
    if(chicken.cargaOK){
        lienzo.drawImage(chicken.image,x,y-100);      
    }
}


function random(min, max){
    var resultado = Math.floor(Math.random()*(max-min+1)+min);
    return resultado;
}