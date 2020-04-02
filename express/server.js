var exigir = require('express');
var application = exigir();

application.get("/", begin);
application.get("/cursos", course);

function begin(request, response){
    response.send("Este es el <strong>Home</strong>");
}   
function course(request, response){
    response.send("Estos son los <strong>cursos</strong> <br> Eres el puto amo");
}   

application.listen(8989);
