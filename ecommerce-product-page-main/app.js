const carrito = document.getElementsByClassName("img__cart");
const carritoCar = document.getElementsByClassName("carrito-car")
const carritoBox = document.getElementById("carrito-container")
const sumar = document.getElementsByClassName("botones__aniadir")
const restar = document.getElementsByClassName("botones__quitar")
const cantidad = document.getElementsByClassName("botones__cantidad")
const cantidadCarrito = document.getElementsByClassName("precio__carrito--cantidad")
const botonCarrito = document.getElementsByClassName("articulo__botones--carrito")
const imagenMiniatura = document.getElementsByClassName("lightbox__img--thumb")
const imagenPrincipal = document.getElementsByClassName("lightbox__img--main")
const lightbox = document.getElementsByClassName("lightbox__container")
const arrayDeImagenes = Array.from(imagenMiniatura);
const galeariaImagenes = imagenMiniatura
const cerrar = document.getElementById("close")
const borrar = document.getElementsByClassName("precio__delete")
const imagenMiniaturaLight = document.getElementsByClassName("lightbox__img--light")
const arrayMiniaturaLightbox = Array.from(imagenMiniaturaLight);


console.log(galeariaImagenes)
carrito[0].addEventListener("click",function(){
    // alert("hola")
    carritoBox.classList.toggle("activa")
})

function cambiarCantidad(){
    let click = 0;
    
    comprobarCarrito(click);

    sumar[0].addEventListener("click",function(){
        click++;
        // console.log(click)
        cantidad[0].innerHTML = click
        

    })
    restar[0].addEventListener("click",function(){
        if(click > 0){
            click--;
            // console.log(click)
            cantidad[0].innerHTML = click

        }
    })

    botonCarrito[0].addEventListener("click",function(){
        comprobarCarrito(click);
        cantidadCarrito[0].innerHTML = click;
        cantidad[0].innerHTML = 0;

    })

    borrar[0].addEventListener("click", function(){
        if(cantidadCarrito[0].innerHTML > 0){
            click--;
            cantidadCarrito[0].innerHTML = click;

            console.log(click)
        }
    
        comprobarCarrito(click);
    });
    


    // TENGO QUE CAMBIAR EL CODIGO, NO SE ACTUALIZA EL CARRITO
    // AL DARLE AL + O AL -, SE ACTUALIZA CUANDO LE DOY A 
    // ADD TO CART, CAMBIAR MAÑÑANA


}
function comprobarCarrito(click){
    if(click == 0){
        carritoCar[0].style.display = "none"
    } else {
        carritoCar[0].style.display = "flex"

    }
}

function actualizarCarrito(click){
    cantidadCarrito[0].innerHTML = click

}

cambiarCantidad();




const prev = document.getElementById("prev")
const next = document.getElementById("next")
const mainLightbox = document.getElementsByClassName("lightbox__img--contendora")

const imagen1 = 'images/image-product-1.jpg'
const imagen2 = 'images/image-product-2.jpg'
const imagen3 = 'images/image-product-3.jpg'
const imagen4 = 'images/image-product-4.jpg'

let arrayLightbox = [imagen1,imagen2,imagen3,imagen4]
let posicion = 0

next.addEventListener("click",function(){
    posicion++;
    if(posicion > 3){
        posicion = 0
    }
    mainLightbox[0].src = arrayLightbox[posicion]
})

prev.addEventListener("click",function(){
    posicion--;
    if(posicion < 0){
        posicion = 3
    }
    mainLightbox[0].src = arrayLightbox[posicion]
})

arrayDeImagenes.forEach(imagen => {
    // console.log(imagen);
    imagen.addEventListener("click",function(){
        lightbox[0].classList.add("activa");
        let strIMG = imagen.src.substr(50,imagen.src.length)
        mainLightbox[0].src = strIMG.substr(0,22)+".jpg"
        console.log(imagen)
        console.log(strIMG)
    })

    cerrar.addEventListener("click",function(){
        lightbox[0].classList.remove("activa");
    })
});

arrayMiniaturaLightbox.forEach(i => {
    i.addEventListener("click",function(){
        let strIMG = i.src.substr(50,i.src.length)
        mainLightbox[0].src = strIMG.substr(0,22)+".jpg"
    })
})

const prevMobile = document.getElementById('prev-mobile')
const nextMobile = document.getElementById('next-mobile')



function cargarImagenPrincipal() {
    if (window.innerWidth > 426) {
        imagenPrincipal[0].src = arrayLightbox[0];
    } else {
        // Aquí puedes colocar la lógica para dispositivos más pequeños, si es necesario.
        // Por ejemplo, puedes usar la primera imagen de tu array `arrayLightbox`.
        nextMobile.addEventListener("click",function(){
            posicion++;
            if(posicion > 3){
                posicion = 0
            }
            imagenPrincipal[0].src = arrayLightbox[posicion]
        })
        
        prevMobile.addEventListener("click",function(){
            posicion--;
            if(posicion < 0){
                posicion = 3
            }
            imagenPrincipal[0].src = arrayLightbox[posicion]
        })
    }
}

cargarImagenPrincipal(); 

