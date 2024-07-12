document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('products');
    const productForm = document.getElementById('product-form');

    const formatPrice = (price) => {
        const number = parseFloat(price.replace(/[^0-9.-]+/g, ""));
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
    };

    const loadProducts = () => {
        fetch('http://localhost:3001/products')
            .then(response => response.json())
            .then(products => {
                productList.innerHTML = '';
                products.forEach(product => {
                    const productDiv = document.createElement('div');
                    productDiv.className = 'product';
                    productDiv.innerHTML = `
                        <img class="product-image" src="${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>${formatPrice(product.price)}</p>
                        <button class="delete-button" data-id="${product.id}">Eliminar</button>
                    `;
                    productList.appendChild(productDiv);
                });

                // Add event listeners to delete buttons
                document.querySelectorAll('.delete-button').forEach(button => {
                    button.addEventListener('click', (event) => {
                        const productId = event.target.getAttribute('data-id');
                        deleteProduct(productId);
                    });
                });
            });
    };

    const addProduct = (product) => {
        fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(response => response.json())
        .then(() => {
            loadProducts();
            productForm.reset();
        });
    };

    const deleteProduct = (id) => {
        fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            loadProducts();
        });
    };

    productForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const newProduct = {
            name: document.getElementById('name').value,
            price: formatPrice(document.getElementById('price').value),
            image: document.getElementById('image').value
        };

        addProduct(newProduct);
    });

    // Load products on page load
    loadProducts();
});
