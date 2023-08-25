//Modelo
var SERIE1=["<h3>Director:</h3> Park So-young Kim Eui-jeong","<h3>Emision:</h3> 25 de marzo de 2021","<h3>Distribuidor:</h3> Netflix"];
var SERIE2=["<h3>Director:</h3>  Robert Kirkman Tony Moore","<h3>Emision:</h3> 31 de octubre de 2010","<h3>Distribuidor:</h3> Netflix"];
var SERIE3=["<h3>Director:</h3> Konami Corporation","<h3>Emision:</h3> 20 de septiembre de 2019 ","<h3>Distribuidor:</h3> Netflix"];
var SERIE4=["<h3>Director:</h3> Eiichirō Oda","<h3>Emision:</h3> 22 de julio de 1997","<h3>Distribuidor:</h3> Netflix"];

function Reccorer(serie){
    var i=0; html=" <ul>"
    for(i=0;i<serie.length;i+1){
        html=html+`<ul> ${serie[i]}<html>`;
        i=i+1;
    }
    return html+"</ul>"

}

function Serie1(){
    document.getElementById("main").innerHTML = Reccorer(SERIE1);
}
function Serie2(){
    document.getElementById("main").innerHTML = Reccorer(SERIE2);
}
function Serie3(){
    document.getElementById("main").innerHTML = Reccorer(SERIE3);
}
function Serie4(){
    document.getElementById("main").innerHTML = Reccorer(SERIE4);
}
function Trailer(){
    document.getElementById("Videos").style.display='block';
}
function cerrar(){
    document.getElementById("Videos").style.display='none';
}