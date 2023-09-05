let boton = document.getElementById("icono");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function(e){
    e.preventDefault();
    if(contador === 0){
        enlaces.classList.remove("uno");
        enlaces.classList.add("dos");
        contador = 1;
    } else {
        enlaces.classList.remove("dos");
        enlaces.classList.add("uno");
        contador = 0;
    }
});
