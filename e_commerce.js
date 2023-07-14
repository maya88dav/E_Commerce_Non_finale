let body = document.querySelector('body');
let apriCarello = document.querySelector('.imageCart');
let chiudiCarello = document.querySelector('.chiudiCarello');

//funzione per aprire il carrello cliccandoci sopra
apriCarello.addEventListener('click', ()=>{
    body.classList.add('active');
})

//funzione per chiudere il carrello cliccando sopra "chiudi"
chiudiCarello.addEventListener('click', ()=> {
    body.classList.remove('active');
})

//array prodotti
let products = [
    {
        id: 140,
        name: 'COMPUTER',
        image: 'computer1.png',
        price: 700, 
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
        },
    {
        id:401,
        name: 'COMPUTER',
        image: 'computer2.png',
        price: 600,
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
        },
    {
        id: 580,
        name: 'COMPUTER',
        image: 'computer3.png',
        price: 900,
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
    },
    {
        id: 425,
        name: 'COMPUTER',
        image: 'computer4.png',
        price: 400,
        offer: true,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
    },
    {
        id: 960,
        name: 'COMPUTER',
        image: 'computer5.png',
        price: 850,
        offer: false,
        details: [
            "Processore: xxxxx",
            "RAM: xxxx",
            "SSD: xxxx"
        ] 
    },

    {
        id: 901,
        name: 'NOTEBOOK',
        image: 'computer1.png',
        price: 1500, 
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
        },
    {
        id: 604,
        name: 'NOTEBOOK',
        image: 'computer2.png',
        price: 2000,
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
        },
    {
        id: 961,
        name: 'NOTEBOOK',
        image: 'computer3.png',
        price: 900,
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
    },
    {
        id: 520,
        name: 'NOTEBOOK',
        image: 'computer4.png',
        price: 400,
        offer: true,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
    },
    {
        id: 901,
        name: 'NOTEBOOK',
        image: 'computer5.png',
        price: 750,
        offer: false,
        details: [
            "Sistema operativo: xxxxx",
            "Capacità memoria: xxxx",
            "Dimensioni schermo: xxxx"
        ] 
    },
    {
        id: 695,
        name: 'SMARTPHONE',
        image: 'computer1.png',
        price: 400, 
        offer: true,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
        },
    {
        id: 741,
        name: 'SMARTPHONE',
        image: 'computer2.png',
        price: 800,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
        },
    {
        id: 852,
        name: 'SMARTPHONE',
        image: 'computer3.png',
        price: 700,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
    },
    {
        id: 639,
        name: 'SMARTPHONE',
        image: 'computer4.png',
        price: 600,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
    },
    {
        id: 456,
        name: 'SMARTPHONE',
        image: 'computer5.png',
        price: 500,
        offer: false,
        details: [
            "Capacità memoria: xxxxx",
            "Dimensioni schermo: xxxx",
            "Risoluzione display: xxxx"
        ] 
    },
];


//per menu dinamico, richiamo le voci del menu e il div dove mettere i prodotti
let menuComputer = document.querySelector('.computer');
let menuPortatile = document.querySelector('.portatili');
console.log( menuPortatile)
let menuSmartphone = document.querySelector('.smpartphone');
let productCellsDiv = document.querySelector('.productCells');




//apro la voce menu computer e inizializzo la funzione che inietta i prodotti del div dei prodotti
// menuComputer.addEventListener('click', ()=>{
//     productCellsDiv.classList.add('show')
//     InizialComputer();
// }
// );

//filtro l'array per scegliere i computer
let computer = products.filter(product => product.name === "COMPUTER");

//funzione per far apparire nel div dei prodotti i vari computer
function InizialComputer(){
    productCellsDiv.innerHTML = '';
    computer.forEach((value) => {
        let cellsDiv = document.createElement('div');
        cellsDiv.classList.add('items');
        if(value.offer === false){
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="CartAdd(${value.id})">Add to cart </button>
            <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>`;
            productCellsDiv.appendChild(cellsDiv);
        }else{
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="CartAdd(${value.id})">Add to cart</button>
            <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>
            <img id="scontoIcon" src="sconto5652111.png"/ width=50 heigth=50>`;
            productCellsDiv.appendChild(cellsDiv);   
        }
    });
};

function test(category){
    console.log(category)
    productCellsDiv.innerHTML = '';
    let data = products.filter(product => product.name === category);
    data.forEach((value) => {
        let cellsDiv = document.createElement('div');
        cellsDiv.classList.add('items');
        if(value.offer === false){
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="CartAdd(${value.id})">Add to cart </button>
            <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>`;
            productCellsDiv.appendChild(cellsDiv);
        }else{
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="CartAdd(${value.id})">Add to cart</button>
            <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>
            <img id="scontoIcon" src="sconto5652111.png"/ width=50 heigth=50>`;
            productCellsDiv.appendChild(cellsDiv);   
        }
    });
};



//apro la voce menu smartphone e inizializzo la funzione che inietta i prodotti del div dei prodotti
// menuSmartphone.addEventListener('click', ()=>{
//     productCellsDiv.classList.add('show')
//    InizialSmartphone();
// }
// );



//filtro l'array per scegliere gli smartphone
let smartphone = products.filter(product => product.name === "SMARTPHONE");


//funzione per far apparire nel div dei prodotti i vari smartphone
function InizialSmartphone(){
    
    productCellsDiv.innerHTML = '';
        smartphone.forEach((value ) => {
            let cellsDiv = document.createElement('div');
            cellsDiv.classList.add('items');
            if(value.offer === false){
                cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="CartAdd(${value.id})">Add to cart</button>
            <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>`;
            productCellsDiv.appendChild(cellsDiv);
        }else{
            cellsDiv.innerHTML = `
            <img src="${value.image}"/ width=100 heigth=100>
            <div class="nome">${value.name}</div>
            <div class="prezzo">${value.price}€</div>
            <button onclick="CartAdd(${value.id})">Add to cart</button>
            <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>
            <img id="scontoIcon" src="sconto5652111.png"/ width=50 heigth=50>`;
            productCellsDiv.appendChild(cellsDiv); 
              console.log(smartphone) 
        }
        });  
        
    };


 


    //apro la voce menu portatili e inizializzo la funzione che inietta i prodotti del div dei prodotti
// menuPortatile.addEventListener('click', ()=>{
//     productCellsDiv.classList.add('show')
//    InizialPortatili();
// }
// );

//filtro l'array per scegliere i portatili
let notebook = products.filter(product => product.name === "NOTEBOOK");

//funzione per far apparire nel div dei prodotti i vari tablet
function InizialPortatili(){
    productCellsDiv.innerHTML = '';
    notebook.forEach((value) => {
    let cellsDiv = document.createElement('div');
    cellsDiv.classList.add('items');
    if(value.offer === false){
        cellsDiv.innerHTML = `
        <img src="${value.image}"/ width=100 heigth=100>
        <div class="nome">${value.name}</div>
        <div class="prezzo">${value.price}€</div>
        <button onclick="CartAdd(${value.id})">Add to cart </button>
        <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>`;
        productCellsDiv.appendChild( cellsDiv);
    }else{
        cellsDiv.innerHTML = `
        <img src="${value.image}"/ width=100 heigth=100>
        <div class="nome">${value.name}</div>
        <div class="prezzo">${value.price}€</div>
        <button onclick="CartAdd(${value.id})">Add to cart </button>
        <button onclick="ApriModal(${value.id})" class="openModal">Product details</button>
        <img id="scontoIcon" src="sconto5652111.png"/ width=50 heigth=50>`;
        productCellsDiv.appendChild( cellsDiv);   
        }
    });
};
  
//targettizzo gli elementi del modal
//const openModal = document.querySelector('.openModal');
const productPopUp = document.querySelector('.productPopUp');
const chiudiModal = document.querySelector('.chiudiModal');
const modalPopUp = document.querySelector('.popup');

//funzione per aprire il modal richiamata nel bottone "Dettagli prodotto" creato dentro la funzione initApp()
function ApriModal(id) {

    // document.getElementById('productPopUp').style.display='block';
    // console.log( document.getElementById('productPopUp').style.display)
    productPopUp.classList.add('show');
   infoModal(id);
};


//funzione per inserire nel modal i dati del prodotto
function infoModal(id){
    let newLi = document.createElement('li');
    newLi.className='listaPopUp'
    modalPopUp.innerHTML = '';
    products.forEach((value) => {
    if(value.id === id) {
            newLi.innerHTML = `
            <img src="${value.image}"/width=30% >
            <div id="productName">${value.name}</div>
            <div> cod:${value.id}</div>
            <div>${value.details}</div>
            <div>${value.price.toLocaleString()}€</div>
            <button class="chiudiModal" onclick="closingModal()">Chiudi</button>
            `;
            modalPopUp.appendChild(newLi);
    }});
    console.log('fatto')
};

function closingModal() {
    productPopUp.classList.remove('show');
};

//CARRELLO
//targettizzo gli elementi che mi servono per far funzionare il carrello
let listaCarello = document.querySelector('.listaCarello');
let total = document.querySelector('.total');
let quantità = document.querySelector('.quantità');

//dichiaro un array vuoto dove andranno i prodotti del carrello
let CartProducts = [];


//funzione per caricare i prodotti nel carrello
var prezzoTotale = 0; prezzoTotale

function CartAdd(id){
    let calcola = 0;
    products.forEach((value) => {
        let contNuovo = document.createElement('li');
        contNuovo.id = id;
        if(value['id'] === id) {
            prezzoTotale = prezzoTotale + value.price;
            CartProducts.push(id)
            contNuovo.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div> ${value.name} </div>
                <div>cod: ${value.id}</div>
                <div> ${value.price}€</div>
            `;
            listaCarello.appendChild(contNuovo);
        }
    quantità.innerText = CartProducts.length;
    total.innerText = prezzoTotale.toLocaleString() + ' €';
    })
}
