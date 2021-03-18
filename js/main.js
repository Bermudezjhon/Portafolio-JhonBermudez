function contActive(){
    var selector = document.getElementById("cont-chameleon");
    var selector2 = document.getElementById("temcam");
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}


function Activeteampurple(){
    var selector = document.getElementById("body");
    selector.className=''
    selector.classList.toggle("purple");
}
function Activeteamwhite(){
    var selector = document.getElementById("body");
    selector.className=''
    selector.classList.toggle("white");
}
function Activeteamred(){
    var selector = document.getElementById("body");
    selector.className=''
    selector.classList.toggle("red");
}
function Activeteamblue(){
    var selector = document.getElementById("body");
    selector.className=''
    selector.classList.toggle("blue");
}
function Activeteamdark(){
    var selector = document.getElementById("body");
    selector.className=''
    selector.classList.toggle("dark");
}
























const grid =new Muuri(".grid" , {
    layout: {
        rounding: false
      }
});
window.addEventListener("load", ()=> {
    grid.refreshItems().layout();
    document.getElementById("grid").classList.add("imagenes-cargadas");
  

    const enlaces=document.querySelectorAll("#categorias a");
    enlaces.forEach(   (elemento) =>{
        elemento.addEventListener("click", (evento)=> {
            evento.preventDefault();
            enlaces.forEach( (enlace) => enlace.classList.remove("activo"));
            evento.target.classList.add("activo");


            const categoria = evento.target.innerHTML.toLowerCase();
            categoria === "todos" ? grid.filter("[data-categoria]") : grid.filter(`[data-categoria ="${categoria}"]`) ;
        }   );
    });


    document.querySelector("#barra-busqueda").addEventListener("input" , (evento) => {
      const busqueda =  evento.target.value;
      grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda)  );
    });
}  );