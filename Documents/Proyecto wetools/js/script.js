
const productos = [
    { nombre: "MOTOSIERRA K5220 PRO KUSHIRO", precio: 198436, stock: 5, marca: "PRO KUSHIRO" , imagen:"../assets/productos/ms_kushiro.jpg"},
    { nombre: "ASPIRADORA DE LÍQUIDOS Y SÓLIDOS STIHL SE 33", precio: 165127, stock: 18, marca: "STILL", imagen:"../assets/productos/aspiradora_still.jpg" },
    { nombre: "MOTOGUADAÑA DESMALEZADORA KUSHIRO 52 CC ARNES DOBLE", precio: 160632, stock: 8, marca: "KUSHIRO", imagen:"../assets/productos/motoguada.jpg" },
    { nombre: "BARREDORA INDUSTRIAL KARCHER KM 90/60 BP A BATERÍA", precio: 19590825, stock: 10, marca: "KARCHER" , imagen:"../assets/productos/barredora.jpg" },
    { nombre: "CHIPEADORA TRITURADORA SC 3013 ECHO", precio: 4098335, stock: 7, marca: "ECHO BEARCAT", imagen:"../assets/productos/trituradora.jpg" },
    { nombre: "CORTADORA DE CÉSPED ELÉCTRICA OLEO-MAC GE43 16 DE CORTE", precio: 301358, stock: 7, marca: "OLEO-MAC", imagen:"../assets/productos/cortadora_cesped.jpg" },
];
//

const searchInput = document.getElementById('search-input');
const productosContainer = document.getElementById('productos-container');

function mostrarProductos(productos) {
    if (productosContainer) {
        productosContainer.innerHTML = ''; 

        if (productos.length === 0) {
            
            productosContainer.innerHTML = '<p class="no-results">Upss... no encontramos el producto :(</p>';
        } else {
            
            productos.forEach(producto => {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.nombre}" class="card-img"> <!-- Imagen dinámica -->
                    <h3>${producto.nombre}</h3>
                    <p>Precio: $${producto.precio}</p>
                    <p>Stock: ${producto.stock}</p>
                    <p>Marca: ${producto.marca}</p>
                `;
                productosContainer.appendChild(card);
            });
        }
    }
}




function buscarProductos() {
    if (searchInput) {
        const textoBusqueda = searchInput.value.toLowerCase(); 

        const productosFiltrados = productos.filter(producto => {
            return (
                producto.nombre.toLowerCase().includes(textoBusqueda) ||
                producto.marca.toLowerCase().includes(textoBusqueda)
            );
        });

        mostrarProductos(productosFiltrados);
    }
}

if (productosContainer) {
    mostrarProductos(productos);
}

if (searchInput) {
    searchInput.addEventListener('input', buscarProductos);
}

if (document.getElementById('form-alta')) {
    const formAlta = document.getElementById('form-alta');

    function validateNombre() {
        const nombreInput = document.getElementById('nombre');
        const nombreError = document.getElementById('nombre-error');
        const regex = /^[A-Za-z\s]{0,15}$/; 

        if (nombreInput.value.trim() === "") {
            nombreInput.classList.remove('error');
            nombreError.style.display = 'none';
            return true; 
        } else if (!regex.test(nombreInput.value)) {
            nombreInput.classList.add('error');
            nombreError.textContent = 'Solo se permiten letras y espacios (máximo 15 caracteres).';
            nombreError.style.display = 'block';
            return false;
        } else {
            nombreInput.classList.remove('error');
            nombreError.style.display = 'none';
            return true;
        }
    }
    function validatePrecio() {
        const precioInput = document.getElementById('precio');
        const precioError = document.getElementById('precio-error');
        const regex = /^\d+(\.\d{1,2})?$/; 
        if (precioInput.value.trim() === "") {
            precioInput.classList.remove('error');
            precioError.style.display = 'none';
            return true; 
        } else if (!regex.test(precioInput.value)) {
            precioInput.classList.add('error');
            precioError.textContent = 'Solo se permiten números positivos.';
            precioError.style.display = 'block';
            return false;
        } else {
            precioInput.classList.remove('error');
            precioError.style.display = 'none';
            return true;
        }
    }

    function validateMarca() {
        const marcaInput = document.getElementById('marca');
        const marcaError = document.getElementById('marca-error');
        const regex = /^[A-Za-z0-9\s]{0,20}$/; 

        if (marcaInput.value.trim() === "") {
            marcaInput.classList.remove('error');
            marcaError.style.display = 'none';
            return true; 
        } else if (!regex.test(marcaInput.value)) {
            marcaInput.classList.add('error');
            marcaError.textContent = 'Solo se permiten letras, números y espacios (máximo 20 caracteres).';
            marcaError.style.display = 'block';
            return false;
        } else {
            marcaInput.classList.remove('error');
            marcaError.style.display = 'none';
            return true;
        }
    }

    
    function validateStock() {
        const stockInput = document.getElementById('stock');
        const stockError = document.getElementById('stock-error');
        const regex = /^\d+$/; 

        if (stockInput.value.trim() === "") {
            stockInput.classList.remove('error');
            stockError.style.display = 'none';
            return true; 
        } else if (!regex.test(stockInput.value)) {
            stockInput.classList.add('error');
            stockError.textContent = 'Solo se permiten números positivos.';
            stockError.style.display = 'block';
            return false;
        } else {
            stockInput.classList.remove('error');
            stockError.style.display = 'none';
            return true;
        }
    }

    document.getElementById('nombre').addEventListener('input', validateNombre);
    document.getElementById('precio').addEventListener('input', validatePrecio);
    document.getElementById('marca').addEventListener('input', validateMarca);
    document.getElementById('stock').addEventListener('input', validateStock);

    
    formAlta.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        const isNombreValid = validateNombre();
        const isPrecioValid = validatePrecio();
        const isMarcaValid = validateMarca();
        const isStockValid = validateStock();

        
        if (isNombreValid && isPrecioValid && isMarcaValid && isStockValid) {
            alert('Formulario enviado con éxito');
        
        }
    });
}