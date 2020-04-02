var button = document.getElementById("boton");
var field = document.getElementById("campo");
button.addEventListener("click", run);

function run(){
    var number=parseInt(field.value);
    document.write("<br>ESTE ES EL DESPLIEGO DE LOS "+ number + " NUMERON <br><br>")
    for(var i=1; i<=number; i++){
        residuo=false;
        if(isDivisible(i,3)){
            document.write("Fizz");
        }
        if(isDivisible(i,5)){
            document.write("Buzz");
        } 
        if(!isDivisible(i,3) && !isDivisible(i,5)){
             document.write(i);
        } 
        document.write("<br>");
    }
    
}

function isDivisible(num, divisor){
    if(num % divisor == 0){
        return true;
    } else{
        return false;
    }
}
