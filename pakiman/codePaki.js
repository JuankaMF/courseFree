var button = document.getElementById("boton");
var field = document.getElementById("campo");

button.addEventListener("click", eventButton);

function eventButton(){
    var number = parseInt(field.value);
    var collection =[];
    document.write("<h1>Estos son los Pakimans que Atrapase!</h1>")
    for(var i=0; i<number; i++){
        collection.push(new Pakiman("Cauchin", 100, 50));
        collection.push(new Pakiman("Pokacho", 50, 80));
        collection.push(new Pakiman("Tocinauro", 80, 60));
    }

    for(var pakin of collection){ // in para indice, of para objeto
        pakin.mostrar();
    }
}

var image = [];
 image["Cauchin"]="vaca.webp"
 image["Pokacho"]="pollo.webp"
 image["Tocinauro"]="cerdo.webp"  // array asociativo

// for(var x in collection[0]){
//     console.log(x);
// }