/*const modalContenedor = document.getElementById('modal-contenedor')
const comprar = document.querySelectorAll('.comprar')
const verCarrito = document.getElementById('carrito')*/

const productsData = [
    {
      id: 1,
      name: "Batman Animated Series",
      category: "Batman",
      logo: "./imagen/logo-Batman.jpg",
      cardImg: "./imagen/BatmanAnimado.png",
      precio: 6000,
    },
    {
        id: 2,
        name: "Batinson",
        category: "Batman",
        logo: "./imagen/logo-Batman.jpg",
        cardImg: "./imagen/batinson.jpg",
        precio: 5000,
    },
    {
        id: 3,
        name: "Batinson",
        category: "Batman",
        logo: "./imagen/logo-Batman.jpg",
        cardImg: "./imagen/batflex.jpg",
        precio: 6000,
    },
        
    {
        id: 4,
        name: "Armored Batman",
        category: "Batman",
        logo: "./imagen/logo-Batman.jpg",
        cardImg: "./imagen/armored-batman.jpg",
        precio: 6000,
    },
    {
        id: 5,
        name: "Capitan America",
        category: "Marvel",
        logo: "./imagen/logo-Marvel.png",
        cardImg: "./imagen/captain-america.webp",
        precio: 6000,
    },
    {
        id: 6,
        name: "Spiderman",
        category: "Marvel",
        logo: "./imagen/logo-Marvel.png",
        cardImg: "./imagen/spiderman.webp",
        precio: 8000,
    },
    {
        id: 7,
        name: "Ironman",
        category: "Marvel",
        logo: "./imagen/logo-Marvel.png",
        cardImg: "./imagen/ironman.jpg",
        precio: 3000,
    },
    {
        id: 8,
        name: "Groot",
        category: "Marvel",
        logo: "./imagen/logo-Marvel.png",
        cardImg: "./imagen/groot.jpg",
        precio: 6080,
    },
    {
      id: 9,
      name: "11",
      category: "Serie",
      logo: "./imagen/logo-Stranger.png",
      cardImg: "./imagen/stranger-11.png",
      precio: 2500,
    },
    {
        id: 10,
        name: "Mike",
        category: "Serie",
        logo: "./imagen/logo-Stranger.png",
        cardImg: "./imagen/stranger-Mike.jpg",
        precio: 6000,
    },
    {
        id: 11,
        name: "Demogorgon",
        category: "Serie",
        logo: "./imagen/logo-Stranger.png",
        cardImg: "./imagen/stranger-Demogorgon.jpg",
        precio: 1000,
    },
    {
        id: 12,
        name: "Geralt",
        category: "Serie",
        logo: "./imagen/logo-Witcher.jpg",
        cardImg: "./imagen/witcher-Geralt.webp",
        precio: 6000,
    },
    {
        id: 12,
        name: "Ciri",
        category: "Serie",
        logo: "./imagen/logo-Witcher.jpg",
        cardImg: "./imagen/whitcher-Ciri.jpeg",
        precio: 4500,
    },
    {
        id: 13,
        name: "Geralt",
        category: "Serie",
        logo: "./imagen/logo-Witcher.jpg",
        cardImg: "./imagen/witcher-Jennefer.jpeg",
        precio: 6000,
    },
    {
        id: 14,
        name: "Superman",
        category: "DC",
        logo: "./imagen/logo-DC.png",
        cardImg: "./imagen/dc-Superman.webp",
        precio: 1200,
    },
    {
        id: 15,
        name: "Flash",
        category: "DC",
        logo: "./imagen/logo-DC.png",
        cardImg: "./imagen/dc-Flash.webp",
        precio: 6000,
    },
    {
        id: 16,
        name: "Wonder Woman",
        category: "DC",
        logo: "./imagen/logo-DC.png",
        cardImg: "./imagen/dc-WonderWoman.jpeg",
        precio: 3700,
    },
  ];

  let carrito = []


/*  document.querySelectorAll('.comprar').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Agregar el producto correspondiente al carrito
        carrito.push({
            id: productsData[index].id,
            name: productsData[index].name,
            category: productsData[index].category,
            logo: productsData[index].logo,
            cardImg: productsData[index].cardImg,
            precio: productsData[index].precio,
        });
    })
})*/

/* comprar.addEventListener("click",() => {
    carrito.push({
        id: productsData.id,
        name: productsData.name,
        category: productsData.category,
        logo: productsData.logo,
        cardImg : productsData.cardImg,
        precio: productsData.precio,
    })
    
  })

 /* const verCarrito =  document.getElementById('carrito',()=>{

    const modalHeader = document.createElement("div")
    modalHeader.className = 'modal-header'
    modalHeader.innerHTML = `
    <h1> class="modal-header-title">Carrito.</h1>
    `;
    const modalButton = document.createElement("h1");
    modalButton.innerText = "x"
    modalButton.className = "modal-header-button"
    modalHeader.append(modalButton)
  });*/

  







  /*const divideProductsInParts = (size) => {
    
    let productsList = []
    
    for (let i = 0; i < productsData.length; i+= size) {
      
      productsList.push(productsData.slice(i,i + size))
  
    }
    return productsList;
  }
  
  
  const appState = {
    products: divideProductsInParts(3), 
    currentProductsIndex: 0,
    productsLimit: divideProductsInParts(3).length,
    activeFilter: null
  }*/