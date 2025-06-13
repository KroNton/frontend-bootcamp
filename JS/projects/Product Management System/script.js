// Requirement 1: Product class
class Product {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
}

// Requirement 3: Using prototypes to add methods
Product.prototype.displayInfo = function () {
    return `${this.name} - $${this.price.toFixed(2)} (${this.category})`;
};

// ProductManager class to handle product operations
class ProductManager {
    constructor() {
        this.products = [];
    }

    // Requirement 2: Methods for adding, editing, and deleting products
    addProduct(name, price, category) {
        const product = new Product(name, parseFloat(price), category);
        this.products.push(product);
        this.renderProducts();
    }

    editProduct(index, name, price, category) {
        if (index >= 0 && index < this.products.length) {
            this.products[index].name = name;
            this.products[index].price = parseFloat(price);
            this.products[index].category = category;
            this.renderProducts();
        }
    }

    deleteProduct(index) {
        if (index >= 0 && index < this.products.length) {
            this.products.splice(index, 1);
            this.renderProducts();
        }
    }

    renderProducts() {
        const container = document.getElementById('products-container');
        container.innerHTML = '';

        if (this.products.length === 0) {
            container.innerHTML = '<p>No products available. Add a product to get started.</p>';
            return;
        }

        this.products.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.className = 'product-item';
            productElement.innerHTML = `
                <h3>${product.name}</h3>
                <p>Price: $${product.price.toFixed(2)}</p>
                <p>Category: ${product.category}</p>
                <div class="product-actions">
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                </div>
            `;
            container.appendChild(productElement);
        });

        // Add event listeners to edit and delete buttons
        document.querySelectorAll('.edit-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                this.prepareEdit(index);
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(e.target.getAttribute('data-index'));
                if (confirm('Are you sure you want to delete this product?')) {
                    this.deleteProduct(index);
                }
            });
        });
    }

    prepareEdit(index) {
        if (index >= 0 && index < this.products.length) {
            const product = this.products[index];
            document.getElementById('product-name').value = product.name;
            document.getElementById('product-price').value = product.price;
            document.getElementById('product-category').value = product.category;
            document.getElementById('edit-index').value = index;
            document.getElementById('save-btn').textContent = 'Update Product';
            document.getElementById('cancel-btn').style.display = 'inline-block';
        }
    }

    cancelEdit() {
        document.getElementById('product-name').value = '';
        document.getElementById('product-price').value = '';
        document.getElementById('product-category').value = '';
        document.getElementById('edit-index').value = '-1';
        document.getElementById('save-btn').textContent = 'Save Product';
        document.getElementById('cancel-btn').style.display = 'none';
    }
}

// Initialize the product manager
const productManager = new ProductManager();

// Set up event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('save-btn').addEventListener('click', () => {
        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const category = document.getElementById('product-category').value;
        const editIndex = parseInt(document.getElementById('edit-index').value);

        if (!name || !price || !category) {
            alert('Please fill in all fields');
            return;
        }

        if (editIndex >= 0) {
            productManager.editProduct(editIndex, name, price, category);
        } else {
            productManager.addProduct(name, price, category);
        }

        productManager.cancelEdit();
    });

    document.getElementById('cancel-btn').addEventListener('click', () => {
        productManager.cancelEdit();
    });
});