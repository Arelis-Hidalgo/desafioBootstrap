var btnSalsa = document.getElementById("Salsa");
var btnTango = document.getElementById("Tango");
var btnBallet = document.getElementById("Ballet");
var btnCueca = document.getElementById("Cueca");
var btnVals = document.getElementById("Vals");
var info = document.getElementById("info");
var enviar = document.getElementById("enviar");
var nombre = document.getElementById("nombre");
var email = document.getElementById("email");
var opcionb = document.getElementById("opcionb");
var opcions = document.getElementById("opcions");

btnSalsa.addEventListener("click",function(){
    info.innerHTML= salsa;
});

btnTango.addEventListener("click",function(){
    info.innerHTML=tango;
});

btnBallet.addEventListener("click",function(){
    info.innerHTML=ballet;
});

btnCueca.addEventListener("click",function(){
    info.innerHTML=cueca;
});

btnVals.addEventListener("click",function(){
    info.innerHTML=vals;
});

var salsa = "Salsa <br> <br> La salsa es un conjunto de ritmos afrocaribeños" +
            " fusionados con jazz y otros estilos. Súbele el ritmo a tu vida aprendiendo "+
            "este estilo de baile. <br> <br> <img src='imagen/salsabaile.jpg' alt='salsa'>";

var tango ="Tango <br> <br> El tango es un género musical y una danza, característica"+
            " de la región del Río de la Plata y su zona de influencia, principalmente "+
            "de las ciudades de Buenos Aires y Montevideo. ¡¡Aprende este baile argentino con nosotros!!"+
            "<br> <br> <img src='imagen/tangobaile.jpg' alt='tango'>";

var ballet ="Ballet <br> <br> El ballet clásico o danza clásica es una forma de danza "+
            "cuyos movimientos se basan en el control total y absoluto del cuerpo."+
            " Disponible para grandes y chicos. <br><br> <img src='imagen/balletbaile.jpg' alt ='ballet'>";

var cueca= "Cueca <br> <br> Nuestro baile nacional, se considera un baile de conquista del"+
            " hombre a la mujer, aunque no necesariamente tiene un motivo amoroso. <br><br>"+
            " <img src='imagen/cuecabaile.jpg' alt ='cueca'>";

var vals= "Vals <br> <br> El vals es un ritmo de baile muy antiguo, referido a la forma de baile"+
        " tan particular y elegante, realizando giros en la pista. Especial para los novios. <br><br>"+
        "<img src='imagen/valsbaile.png' alt ='vals'>";

enviar.addEventListener("click",function(){
    alert("Datos enviados.");
    nombre.value = "";
    email.value = "";
    opcionb.option.item("1").selected = "selected";
    opcions.option.item("1").selected = "selected";
    
});
