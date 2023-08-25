
        // MODELO
        var peliculas = [
            {video:"video/TRAILER1.mp4",Titulo:"DOTA SANGRE DE DRAGON", img:"img/SERIE1.jpg",director:"Park So-young Kim Eui-jeong"},
            {video:"video/trailer2.mp4",Titulo:"THE WALKING DEAD", img:"img/SERIE2.jpg",director:"Robert Kirkman Tony Moore"},
            {video:"video/trailer3.mp4",Titulo:"CASTLEVANIA", img:"img/SERIE3.jpg",director:"Konami Corporation"},
            {video:"video/trailer4.mp4",Titulo:"ONE PIECE", img:"img/SERIE4.jpg",director:" Eiichirō Oda"}
            ];
    
            
    
            // VISTAS
            //funcion que recorre todo el array
            function RecorrerSeries (pelis) {
                var    i=0,   html = "";   
                for(i=0;i < pelis.length;i+1) {
                  html = html + `<div class="principal"> 
                    <div class="series">
                    <h3> ${pelis[i].Titulo}</h3>
                     <img  src="${pelis[i].img}"class="imagenes" >
                      <h3> ${pelis[i].director}</h3>
                      <button onclick="Detalles(${i})">VER</button>
                      <button onclick="actualizar(${i})">EDITAR</button>
                      <button id="delete" data-my-id="${i}">BORRAR</button>
                    </div> 
                </div>
                    `;
                  i = i + 1;
                };
               
                return html ;
            };
    
    
            //funcion para ver detalles de la pelicula video 
    
            function Detalles (pelis) {
                  var peli=peliculas[pelis];
              
                  document.getElementById("main").innerHTML= `<div class="principal"> 
                    <div class="series">
                    <h3>SERIE: ${peli.Titulo}</h3>
                    
                      <h3>DERECTOR DE LA SERIE: ${peli.director}</h3>
                      <video width="50%" height="50%" controls autoplay>
                        <source src="${peli.video}" type="video/mp4">
                       </video>
                    </div> 
                    <button onclick="MostrarSeries()">Volver</button>
                </div>
                
                    
                    `
            };
    
            function newView () {
                return `Introducir nueva pelicula:
                 <input type="text" id="peli"> 
                 Introdusca director<input type="text" id="director"> 
                 Direccion img: <input type="text" id="imgs"> 
                 Direccion video: <input type="text" id="videos"> 
                 <button id="create">Añadir</button>
                 <button onclick="MostrarSeries()">Volver</button>`
                 
            };
            //funcion mostrar
            function detallesver(){docuemnte.getElementById("main").innerHTML=Detalles(peliculas);};
    
            // CONTROLADORES
            function MostrarSeries() { document.getElementById("main").innerHTML = RecorrerSeries(peliculas);};
            function newContr() { document.getElementById("main").innerHTML = newView();};
    
            //funcion nueva pelicula
            function createContr() {
                peliculas.push({
                Titulo: document.getElementById("peli").value,
                director: document.getElementById("director").value,
                video:document.getElementById("videos").value,
                img:document.getElementById("imgs").value});
                
                MostrarSeries();
            };
            function deleteContr(i) {
                peliculas.splice(i,1);
                MostrarSeries();
            };
            //funcion de actualizar contiene los campos de la actualizacion
    
            function actualizar(i){
               document.getElementById("main").innerHTML= `
                <div class="ActualizarP">
                    <div class="ActualizarS">
                    <h3>ACTUALIZAR DATOS SERIE</h3>
                    <input type="texto"  placeholder="ingrese Nombre Serie" id="nombreA">
                    <input type="texto"  placeholder="ingrese Direcctor" id="directorA">
                    <input type="texto"  placeholder="ingrese url de la imagen" id="imgA">
                    <input type="texto"  placeholder="ingrese url de la video" id="videoA">
                    <button onclick="Actualizacionss(${i})">EDITAR</button>
                    <button onclick="MostrarSeries()">Volver</button>
                    </div>
                </div>
                `
    
            }
            //funcion Actualizar datos de pelicula 
            function Actualizacionss(pelis){
                peliculas.splice(pelis,1,{Titulo: document.getElementById("nombreA").value,
                director: document.getElementById("directorA").value,
                img:document.getElementById("imgA").value, 
                video:document.getElementById("videoA").value});
                MostrarSeries();
            }
          
            // EVENTOS
            document.addEventListener('DOMContentLoaded', ev => MostrarSeries());
            document.addEventListener('click', ev => {
                if      (ev.target.matches('#new'))    newContr();
                else if (ev.target.matches('#create')) createContr();
                else if (ev.target.matches('#delete')) deleteContr(ev.target.dataset.myId);
            })


           //funcion refrescar 
           function Refres(){
            location.reload();
           }