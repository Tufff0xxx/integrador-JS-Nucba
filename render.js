const modalContenedor = document.getElementById('modal-contenedor');
const verCarrito = document.getElementById('carrito');
const contenedor = document.getElementById('contenedor');
const btnTodos = document.getElementById('btnTodos');
const btnBatman = document.getElementById('btnBatman');
const btnMarvel = document.getElementById('btnMarvel');
const btnSerie = document.getElementById('btnSerie');
const btnDC = document.getElementById('btnDC');
const btnVerMas = document.getElementById('btnVerMas');
const botonesFiltro = document.querySelectorAll('.boton-filtro');
const menuHamburguesa = document.querySelector('#menu');
const navbarList = document.querySelector('.navbar-list');
const botonPagar = document.querySelector('.pagar');
const mensajeDiv = document.getElementById('mensaje'); // Elemento div para mensajes

const guardarLocalStorage = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
};

let carritoAbierto = false;
let productosMostrados = 3;
let categoriaActual = 'Todos';

function mostrarMensaje(mensaje, duracion = 3000) {
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.display = 'block';
    setTimeout(() => {
        mensajeDiv.style.display = 'none';
    }, duracion);
}

function mostrarProductos(categoria, cantidad) {
    contenedor.innerHTML = '';

    let productosFiltrados = productsData.filter(producto => categoria === 'Todos' || producto.category === categoria);
    productosFiltrados.slice(0, cantidad).forEach(producto => {
        contenedor.innerHTML += `<div class="funko">
            <img class="imagen-carta" src="${producto.cardImg}">
            <div class="hero-card-info">
                <div class="card-name">
                    <h3 class="funko-nombre">${producto.name}</h3>
                </div>
                <div class="hero-card-button">
                    <div class="hero-card-creator">
                        <img class="logo-carta" src="${producto.logo}">
                    </div>
                    <div class="hero-card-price">
                        <span class="funko-categoria">PRECIO $</span>
                        <span class="funko-precio">${producto.precio}</span>
                    </div>
                    <button class="comprar" data-id="${producto.id}">COMPRAR</button>
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
            const carritoItem = carrito.find(item => item.id === productoSeleccionado.id);

            if (carritoItem) {
                mostrarMensaje('Este producto ya está en el carrito');
            } else {
                carrito.push({ ...productoSeleccionado, cantidad: 1 });
                guardarLocalStorage();
                mostrarCantidad();
                mostrarMensaje('Producto agregado al carrito');
            }
        }
    }
});

const abrirMenu = () => {
    menuHamburguesa.addEventListener('click', () => {
        navbarList.classList.toggle('visible');
    });
};

abrirMenu();

const abrirCerrarModal = () => {
    if (modalContenedor.style.display === 'block') {
        modalContenedor.style.display = 'none';
    }
};

const init = () => {
    carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    mostrarCantidad();

    botonesFiltro.forEach((boton) => {
        boton.addEventListener('click', () => {
            botonesFiltro.forEach((btn) => {
                btn.classList.remove('activo');
            });

            boton.classList.add('activo');
        });
    });

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

    verCarrito.addEventListener('click', (event) => {
        event.preventDefault();
        abrirCerrarModal();
        if (carrito.length > 0) {
            cargarCarrito();
        } else {
            carritoVacio();
        }
        mostrarCantidad();
    });
};

init();
