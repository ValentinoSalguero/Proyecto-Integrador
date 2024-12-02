var containerProducts = document.querySelector('.container-products');
var products = [
    { title: 'Alfajor Deuble Negro', price: 1000, img: 'Photo 00.png' },
    { title: 'Alfajor Simple Night', price: 700, img: 'Photo 01.png' },
    { title: 'Alfajor Genio', price: 500, img: 'Photo 02.png' },
    { title: 'Alfajor Guachoo Blanco', price: 600, img: 'Photo 03.png' },
    { title: 'Alfajor Happy Food', price: 600, img: 'Photo 04.png' },
    { title: 'Alfajor Guolis', price: 900, img: 'Photo 05.png' },
    { title: 'Alfajor Cachafaz', price: 1200, img: 'Photo 06.png' },
    { title: 'Alfajor Lule Muu', price: 600, img: 'Photo 07.png' },
    { title: 'Alfajor Oreo Trilogía', price: 1000, img: 'Photo 08.png' },
    { title: 'Alfajor Full Maní', price: 800, img: 'Photo 09.png' },
    { title: 'Alfajor Café Martínez Blanco', price: 700, img: 'Photo 10.png' },
    { title: 'Alfajor Smams', price: 800, img: 'Photo 11.png' },
    { title: 'Alfajor Café Martínez Negro', price: 700, img: 'Photo 12.png' },
    { title: 'Alfajor Capitán Del Espacio', price: 400, img: 'Photo 13.png' },
    { title: 'Alfajor Rasta', price: 500, img: 'Photo 14.png' },
];

products.forEach((product, index) => {
    var productDiv = document.createElement('div');
    productDiv.className = 'card-product flex';
    productDiv.innerHTML = `
        <div class="container-img">
            <a href="#"><img src="/images/products/${product.img}" alt="${product.title}"></a>
        </div>
        <div class="card-details">
            <h3 class="card-product_title">${product.title}</h3>
            <p class="price">$ ${product.price}</p>
            <div class="quantity-controls">
                <button class="btn btn-danger btn-sm" onclick="updateQuantity(this, -1)">-</button>
                <span class="quantity">0</span>
                <button class="btn btn-info btn-sm" onclick="updateQuantity(this, 1)">+</button>
            </div>
            <button class="btn-add">COMPRAR</button>
        </div>
    `;
    containerProducts.appendChild(productDiv);
});

function updateQuantity(button, change) {
    const quantitySpan = button.closest('.card-product').querySelector('.quantity');
    let currentQuantity = parseInt(quantitySpan.innerText);

    // Asegurarse que la cantidad no sea menor a 0
    currentQuantity = Math.max(0, currentQuantity + change);
    
    quantitySpan.innerText = currentQuantity;
}

// Función para aplicar el modo guardado en localStorage
function applySavedMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        document.querySelectorAll('nav ul li a').forEach(link => link.classList.add('dark-mode'));
        document.querySelectorAll('form button').forEach(button => button.classList.add('dark-mode'));
        document.querySelectorAll('.card-product').forEach(card => card.classList.add('dark-mode'));
        document.querySelectorAll('.price').forEach(priceElement => { priceElement.classList.toggle('dark-mode', isDarkMode); });
        document.getElementById('input').checked = true;
    }
}

applySavedMode();

document.getElementById('input').addEventListener('change', function () {
    const isDarkMode = this.checked;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.querySelector('header').classList.toggle('dark-mode', isDarkMode);
    document.querySelector('footer').classList.toggle('dark-mode', isDarkMode);
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('form button').forEach(button => button.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('.card-product').forEach(card => card.classList.toggle('dark-mode', isDarkMode));
    document.querySelectorAll('.price').forEach(priceElement => { priceElement.classList.toggle('dark-mode', isDarkMode); });

    localStorage.setItem('darkMode', isDarkMode);
});
