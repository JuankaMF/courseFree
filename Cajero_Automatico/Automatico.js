var remove  = document.getElementById("retiro");
var newRemove = document.getElementById("nuevoRetiro");
var field  = document.getElementById("campo");
var resultFinish= document.getElementById("resultado");
var cash=document.getElementById("disponible");
remove.addEventListener("click", retiro);


var caja=[];
caja.push(new Billetes("two_hundred",200,5));
caja.push(new Billetes("one_hundred",100,3));
caja.push(new Billetes("fifty",50,3));
caja.push(new Billetes("twenty",20,2));
caja.push(new Billetes("ten",10,2));

var entregado=[];
var result,papeles;
var disponible=0;
    
for(var i in caja){
    disponible += caja[i].cantidad * caja[i].valor;
}

cash.innerHTML=`El dinero disponible es de: Bs.<strong>${disponible}</strong>`
document.addEventListener("keyup", reset);

function reset(data){
    if(data.keyCode == 27){
        var father;
        for(var r of entregado){
            if(r.cantidad !== 0){
                father = r.images.parentNode;
                father.removeChild(r.images);
            }
        }

        // father = newRemove.parentNode;
        // father.removeChild(newRemove);
        
        // father = resultFinish.parentNode;
        // father.removeChild(resultFinish);
        
        // var p = document.createElement("p");
        // p.id = "nuevoRetiro"
        // document.body.appendChild(p);

        // var p1 = document.createElement("p");
        // p1.id = "resultado"
        // document.body.appendChild(p1);

        newRemove.innerHTML=" ";
        cash.innerHTML=" ";
        resultFinish.innerHTML=" ";
        entregado=[];
        cash.innerHTML=`El dinero disponible es de: Bs.<strong>${disponible}</strong>`
        field.value=""

    }
}
function retiro(){
    var dinero=parseInt(field.value);
    var control=0;
    disponible=0;
    
    for(var i in caja){
        disponible += caja[i].cantidad * caja[i].valor;
    }

    for (var pagos of caja){
        if(dinero > 0 && dinero<=disponible && dinero%5 ==0){
            result = Math.floor(dinero/pagos.valor);
            if(result <= pagos.cantidad){
                papeles = result;
            } else{
                papeles = pagos.cantidad;
            }
            dinero -= pagos.valor *papeles;
            entregado.push(new Billetes(pagos.name ,pagos.valor,papeles));
            control=10;
        }
    }
    
    if(dinero == 0 && control == 10){
        for(var e of entregado){    
            if(e.cantidad !== 0 ){
                document.body.appendChild(e.images);
                resultFinish.innerHTML += `. . . . . . . (${e.cantidad}) . . . . . . `;
            }
        } 
        newRemove.innerHTML="Se realizo el retiro con éxito. <br>Para relizar un nuevo retiro presione la techa <strong>\"ESC\"</strong>";

        for(var c in entregado){
            caja[c].cantidad -= entregado[c].cantidad;
            disponible -= entregado[c].valor * entregado[c].cantidad; 
        }

        cash.innerHTML=`El dinero disponible es de: Bs.<strong>${disponible}</strong>`


    } else if(dinero%10 != 0 && dinero > 0){
        resultFinish.innerHTML = "Solo hay billetes de 10, 20 y 50";
    } else if(dinero>disponible){
        resultFinish.innerHTML = `El dinero disponible es de Bs.${disponible}`;
    } else if(dinero < 0){
        resultFinish.innerHTML = "Solo de admite valores positivos";
    } else{
        resultFinish.innerHTML = "Tiene que retirar almenos Bs.10";
    }

}