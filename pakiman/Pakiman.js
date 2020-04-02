class Pakiman{
    constructor(nombre, vida, ataque){
        this.images = new Image();
        this.nombre = nombre;
        this.vida =vida;
        this.ataque=ataque;

        this.images.src = image[nombre]; 

    }

    mostrar(){
        document.write("<br>")
        document.body.appendChild(this.images);       
        document.write("<p>");
        document.write(`<strong>${this.nombre.toUpperCase()}</strong> <br>`);
        document.write(`Vida: <strong>${this.vida}</strong> <br>`);
        document.write(`Ataque: <strong>${this.ataque}</strong> <hr>`);
        document.write("</p>");
        
    }
}