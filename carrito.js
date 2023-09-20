const cantidadCarrito = document.querySelector('#cantidadCarrito')

    

const cargarCarrito = () => {
    
    modalContenedor.innerHTML = '';
    modalContenedor.style.display = 'block';
    const modalHeader = document.createElement("div");
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h1 class="modal-header-titulo">Carrito</h1>
    `;
    modalContenedor.append(modalHeader);

    if (carrito.length === 0) {
        carritoVacio();
         // Llama a la función carritoVacio si el carrito está vacío
    } else {
        const modalButton = document.createElement('h1');
        modalButton.innerText = 'X';
        modalButton.className = 'modal-header-boton';
        modalButton.addEventListener('click', () => {
            modalContenedor.style.display = 'none';
            
        });
        modalContenedor.append(modalButton);

        carrito.forEach((product) => {
            let carritoContent = document.createElement('div');
            carritoContent.className = 'modal-content';
            carritoContent.innerHTML = `
                <img class="imagenCarrito" src="${product.cardImg}">
                <h3>${product.name}</h3>
                <p>${product.precio} $</p>
                <span class="menos">-</span>
                <p>${product.cantidad}</p>
                <span class="mas">+</span>
                
            `;
          
            modalHeader.appendChild(modalButton);
            modalContenedor.append(carritoContent);

            let mas= carritoContent.querySelector('.mas')
            mas.addEventListener('click', () =>{
                product.cantidad++;
                cargarCarrito();
                mostrarCantidad()
                guardarLocalStorage()
            })

            let restar = carritoContent.querySelector('.menos')
            restar.addEventListener('click', () =>{
                if(product.cantidad ===0){
                    eliminarProducto(product.id)
                }else{
                    product.cantidad--;
                cargarCarrito();
                mostrarCantidad()
                guardarLocalStorage()
                }
                
            })

          

            let eliminar = document.createElement("span");
            eliminar.innerText = "❌";
            eliminar.className = "borrar-producto";
            carritoContent.appendChild(eliminar);
            eliminar.addEventListener('click', () => eliminarProducto(product.id));
        });

        const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

        const totalBuying = document.createElement("div");
        totalBuying.className = 'total-content';
        totalBuying.innerHTML = `Total a pagar: ${total} $`;
        modalContenedor.append(totalBuying);
    }
}

const eliminarProducto = (productId) => {
    carrito = carrito.filter(product => product.id !== productId);
    cargarCarrito();
    mostrarCantidad()
    guardarLocalStorage()
}

const carritoVacio = () => {
    modalContenedor.innerHTML = '';
    modalContenedor.style.display = 'block';
    const modalHeader = document.createElement("div");
    modalHeader.className = 'modal-mensaje';
    modalHeader.innerHTML = `
        <h1 class="modal-header-titulo">Carrito vacío</h1>
    `;
    const modalButton2 = document.createElement('h1');
        modalButton2.innerText = 'X';
        modalButton2.className = 'modal-header-boton';
        modalButton2.addEventListener('click', () => {
            modalContenedor.style.display = 'none';
        });
        modalHeader.appendChild(modalButton2)
    modalContenedor.append(modalHeader);
}

const mostrarCantidad = () =>
{
    cantidadCarrito.innerText = '0'
    cantidadCarrito.style.display= 'block'
    
    cantidadCarrito.innerText = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    localStorage.setItem('cantidad', cantidadCarrito.innerText); // Actualiza la cantidad en el localStorage

  
}


/*const pintarCarrito = (event) =>{
    event.preventDefault();
    modalContenedor.innerHTML =''
    modalContenedor.style.display = 'block'
    const modalHeader = document.createElement("div")
    modalHeader.className = 'modal-header'
    modalHeader.innerHTML = `
    
    <h1 class="modal-header-titulo">Carrito</h1>
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
    modalHeader.appendChild(modalButton)
    modalContenedor.append(carritoContent)

    let eliminar = document.createElement("span");
    eliminar.innerText = "❌"
    eliminar.className = "borrar-producto"
    carritoContent.append(eliminar);
    eliminar.addEventListener('click', eliminarProducto)


    });

    const eliminarProducto = () =>{
        const encontrarId = carrito.find((element) => element.id)
        carrito = carrito.filter((id)=>{
            return id !== encontrarId;
        })
    }
    
    const total = carrito.reduce((acc,el) => acc + el.precio, 0)
    
    const totalBuying = document.createElement("div")
    totalBuying.className = 'total-content'
    totalBuying.innerHTML = `total a pagar: ${total} $`
    modalContenedor.append(totalBuying)

    modalContenedor.style.display = 'block';
}
        
verCarrito.addEventListener('click', pintarCarrito)*/
