document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.querySelector('.dropdownn');
    const button = dropdown.querySelector('.btn');
    const menuItems = dropdown.querySelectorAll('.dropdown-content li a');

    // Toggle dropdown menu on button click
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevents the event from bubbling up and causing unintended behavior
        dropdown.classList.toggle('open');
    });

    // Handle menu item selection
    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Update the button text with the selected city
            button.textContent = this.textContent;

            // Close the dropdown menu
            dropdown.classList.remove('open');
        });
    });

    // Close the dropdown when clicking outside
    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('open');
        }
    });
});

// Example array of products
const products = [
    {
        id: 1,
        imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60",
        title: "Nike Air MX Super 2500 - Red",
        price: "$449",
        link: "#"
    },
    {
        id: 2,
        imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60",
        title: "Nike Air MX Super 2500 - Blue",
        price: "$459",
        link: "#"
    },
    {
        id: 3,
        imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=60",
        title: "Nike Air MX Super 2500 - Green",
        price: "$469",
        link: "#"
    }
];

// Function to generate HTML for a product card
function generateProductCard(product) {
    return `
        <div class="card relative flex flex-col overflow-hidden bg-white shadow-md max-w-xs p-2">
            <a class="relative flex h-40 overflow-hidden rounded-lg" href="${product.link}">
                <img class="object-cover w-full h-full" src="${product.imageUrl}" alt="product image">
            </a>
            <div class="mt-2 px-3 pb-3">
                <a href="${product.link}">
                    <h5 class="text-lg font-semibold text-slate-900">${product.title}</h5>
                </a>
                <div class="mt-1 mb-3 flex items-center justify-between">
                    <p class="text-xl font-bold text-slate-900">${product.price}</p>
                </div>
                <a href="${product.link}" class="flex items-center justify-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Купить
                </a>
            </div>
        </div>
    `;
}

// Function to render all product cards
function renderProductCards(products) {
    const container = document.getElementById('product-container');
    container.innerHTML = products.map(generateProductCard).join('');
}

// Call the function to render product cards
renderProductCards(products);

