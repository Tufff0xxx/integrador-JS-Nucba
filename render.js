// Tu archivo render.js
const modalContenedor = document.getElementById('modal-contenedor');
const verCarrito = document.getElementById('carrito');
const contenedor = document.getElementById('contenedor');
const btnTodos = document.getElementById('btnTodos');
const btnBatman = document.getElementById('btnBatman');
const btnMarvel = document.getElementById('btnMarvel');
const btnSerie = document.getElementById('btnSerie');
const btnDC = document.getElementById('btnDC');
const btnVerMas = document.getElementById('btnVerMas');

let productosMostrados = 3;
let categoriaActual = 'Todos';

// Función para mostrar productos según la categoría y la cantidad especificada
function mostrarProductos(categoria, cantidad) {
    contenedor.innerHTML = '';

    let productosFiltrados = productsData.filter(producto => categoria === 'Todos' || producto.category === categoria);
    productosFiltrados.slice(0, cantidad).forEach(producto => {
        contenedor.innerHTML += `<div class="funko">
            <img src="${producto.cardImg}">
            <div class="hero-card-info">
                <div class="hero-card-top">
                    <h3>${producto.name}</h3>
                </div>
                <div class="hero-card-button">
                    <div class="hero-card-creator">
                        <img class="logo" src="${producto.logo}">
                    </div>
                    <div class="hero-card-price">
                        <span>${producto.category}</span>
                        <span>${producto.precio}</span>
                        <button class="comprar" data-id="${producto.id}">COMPRAR</button>
                    </div>
                </div>
            </div>
        </div>`;
    });

    if (productosFiltrados.length <= cantidad) {
        btnVerMas.style.display = 'none';
    } else {
        btnVerMas.style.display = 'block';
    }
}

contenedor.addEventListener('click', (event) => {
    if (event.target.classList.contains('comprar')) {
        const productId = event.target.getAttribute('data-id');
        const productoSeleccionado = productsData.find(producto => producto.id === parseInt(productId, 10));

        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            console.log('Producto agregado al carrito:', productoSeleccionado);
            // Puedes realizar otras acciones aquí, como actualizar la visualización del carrito.
        }
    }
});

verCarrito.addEventListener('click', (event) =>{
    event.preventDefault();
    modalContenedor.innerHTML =''
    const modalHeader = document.createElement("div")
    modalHeader.className = 'modal-header'
    modalHeader.innerHTML = `
    
    <h1 class="modal-header-titulo">Carrito</>
    `
    modalContenedor.append(modalHeader)

   const modalButton = document.createElement('h1')
    modalButton.innerText = 'X'
    modalButton.className = 'modal-header-boton'
    modalButton.addEventListener('click', () =>{
        modalContenedor.style.display = 'none'
    })
    modalContenedor.append(modalButton)

    carrito.forEach((product) => {
        let carritoContent = document.createElement('div')
    carritoContent.className = 'modal-content'
    carritoContent.innerHTML = `
    <img class="imagenCarrito" src="${product.cardImg}">
    <h3>${product.name}</h3>
    <p>${product.precio} $</p>

    `;
    modalContenedor.append(carritoContent)

    });
    
    const total = carrito.reduce((acc,el) => acc + el.precio, 0)
    
    const totalBuying = document.createElement("div")
    totalBuying.className = 'total-content'
    totalBuying.innerHTML = `total a pagar: ${total} $`
    modalContenedor.append(totalBuying)

    modalContenedor.style.display = 'block';

    
})



btnTodos.addEventListener('click', () => {
    productosMostrados = 3;
    categoriaActual = 'Todos';
    mostrarProductos('Todos', productosMostrados);
});

btnBatman.addEventListener('click', () => {
    productosMostrados = 3;
    categoriaActual = 'Batman';
    mostrarProductos('Batman', productosMostrados);
});

btnMarvel.addEventListener('click', () => {
    productosMostrados = 3;
    categoriaActual = 'Marvel';
    mostrarProductos('Marvel', productosMostrados);
});

btnSerie.addEventListener('click', () => {
    productosMostrados = 3;
    categoriaActual = 'Serie';
    mostrarProductos('Serie', productosMostrados);
});

btnDC.addEventListener('click', () => {
    productosMostrados = 3;
    categoriaActual = 'DC';
    mostrarProductos('DC', productosMostrados);
});

btnVerMas.addEventListener('click', () => {
    productosMostrados += 3;
    mostrarProductos(categoriaActual, productosMostrados);
});

mostrarProductos('Todos', productosMostrados);



const init = () =>{
    btnTodos.addEventListener('click', () => {
        productosMostrados = 3;
        categoriaActual = 'Todos';
        mostrarProductos('Todos', productosMostrados);
    });
    
    btnBatman.addEventListener('click', () => {
        productosMostrados = 3;
        categoriaActual = 'Batman';
        mostrarProductos('Batman', productosMostrados);
    });
    
    btnMarvel.addEventListener('click', () => {
        productosMostrados = 3;
        categoriaActual = 'Marvel';
        mostrarProductos('Marvel', productosMostrados);
    });
    
    btnSerie.addEventListener('click', () => {
        productosMostrados = 3;
        categoriaActual = 'Serie';
        mostrarProductos('Serie', productosMostrados);
    });
    
    btnDC.addEventListener('click', () => {
        productosMostrados = 3;
        categoriaActual = 'DC';
        mostrarProductos('DC', productosMostrados);
    });
    
    btnVerMas.addEventListener('click', () => {
        productosMostrados += 3;
        mostrarProductos(categoriaActual, productosMostrados);
    });
    
    mostrarProductos('Todos', productosMostrados);
}

init ()








