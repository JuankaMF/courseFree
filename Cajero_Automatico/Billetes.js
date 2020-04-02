class Billetes{
    constructor(nombre, valor, cantidad){
        this.name=nombre;
        this.valor = valor;
        this.cantidad=cantidad;
        
        this.images = new Image();
        this.images.src = nombre + ".jpg";
        this.images.id = nombre;
    }
}