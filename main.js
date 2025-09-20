document.addEventListener('DOMContentLoaded', (e)=> {
    const carrito = document.getElementById('carrito')
    carrito.addEventListener('mouseover', ()=> {
            console.log('Pasaste por encima del carrito'); 
            setTimeout( () => {
             const mostrarCarrito = document.querySelector('.mostrar-carrito')
             mostrarCarrito.style.display = "block"; 
        })
    }); 

        carrito.addEventListener('mouseleave', ()=> {
            console.log('Pasaste por encima del carrito'); 
            const mostrarCarrito = document.querySelector('.mostrar-carrito')
            mostrarCarrito.style.display = "none"; 
        }); 
},3000);

const botones = document.querySelectorAll('.btn-primary'); 
botones.forEach( (boton) => {
    boton.addEventListener("click", (e)=> {
        setTimeout( () => {
            boton.classList.remove("btn-primary"); 
            boton.textContent = "Agregando al carrito"; 
            boton.classList.add("btn-info"); 
        },1000)

        setTimeout(() => {
            boton.classList.remove("btn-info"); 
            boton.textContent = "Agregado al carrito"; 
            boton.classList.add("btn-primary"); 
        },3000)

        setTimeout(() => {
            boton.textContent = "Agregar al carrito"; 
        },5000)

        const productos = e.target.closest('.productos');
        console.log(productos);
    }); 

})
