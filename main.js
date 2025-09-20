document.addEventListener('DOMContentLoaded', (e)=> {
    const carrito = document.getElementById('carrito')
    carrito.addEventListener('mouseover', ()=> {
        console.log('Pasaste por encima del carrito'); 
        setTimeout( () => {
            const mostarCarrito = document.querySelector('.mostrar-carrito')
            mostarCarrito.style.display = "block"; 
        })
    }); 

        carrito.addEventListener('mouseleave', () => {
            console.log('Pasaste por encima del carrito'); 
            const mostrarCarrito = document.querySelector('.mostrar-carrito')
            mostrarCarrito.style.display = "none"; 
        })
},3000); 

const botones = document.querySelectorAll('.btn-primary'); 
botones.forEach( () => {
    botones.addEventListener('click', ()=> {
        setTimeout( ()=> {
            botones.textContent = "Agregando al carrito"; 
            botones.classList.remove('.btn-primary'); 
        })
    })
})