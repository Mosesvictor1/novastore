console.log("testing javascript");
let productContainer = document.querySelector(".products-container");

let featuredProductsData = [
  {
    productImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    productBadge: "New arriver",
    productCategory: "Laptop",
    productTitle: "Macbook Pro M3",
    productDescription:
      "Powerful laptop for developers, designers and creative professionals.",
    productRating: "4.9 (120)",
    productPrice: "₦1,500,000",
    productButton: "Add to cart",
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    productBadge: "New",
    productCategory: "Phone",
    productTitle: "iPhone 15 Pro",
    productDescription:
      "Premium smartphone with excellent performance and camera quality.",
    productRating: "1.9 (122)",
    productPrice: "₦3,500,000",
    productButton: "Add to cart",
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    productBadge: "New arriver",
    productCategory: "Laptop",
    productTitle: "Macbook Pro M3",
    productDescription:
      "Powerful laptop for developers, designers and creative professionals.",
    productRating: "4.9 (120)",
    productPrice: "₦1,500,000",
    productButton: "Add to cart",
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    productBadge: "New",
    productCategory: "Phone",
    productTitle: "iPhone 15 Pro",
    productDescription:
      "Premium smartphone with excellent performance and camera quality.",
    productRating: "1.9 (122)",
    productPrice: "₦3,500,000",
    productButton: "Add to cart",
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    productBadge: "-15%",
    productCategory: "Accessories",
    productTitle: "Wireless Accessories",
    productDescription:
      " Premium wireless headphones with rich sound and comfortable design.",
    productRating: "1.9 (120)",
    productPrice: "₦4,500,000",
    productButton: "Add to cart",
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    productBadge: "Popular",
    productCategory: "Wearables",
    productTitle: "Smart Watch Series 9",
    productDescription:
      "Premium smartphone with excellent performance and camera quality.",
    productRating: "1.9 (122)",
    productPrice: "₦3,500,000",
    productButton: "Add to cart",
  },

  {
    productImage:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    productBadge: "New arriver",
    productCategory: "Laptop",
    productTitle: "Macbook Pro M3",
    productDescription:
      "Powerful laptop for developers, designers and creative professionals.",
    productRating: "4.9 (120)",
    productPrice: "₦1,500,000",
    productButton: "Add to cart",
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
    productBadge: "New",
    productCategory: "Phone",
    productTitle: "iPhone 15 Pro",
    productDescription:
      "Premium smartphone with excellent performance and camera quality.",
    productRating: "1.9 (122)",
    productPrice: "₦3,500,000",
    productButton: "Add to cart",
  },

  {
    productImage:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
    productBadge: "-15%",
    productCategory: "Camera",
    productTitle: "Wireless Accessories",
    productDescription:
      " Premium wireless headphones with rich sound and comfortable design.",
    productRating: "1.9 (120)",
    productPrice: "₦4,500,000",
    productButton: "Add to cart",
  },
  {
    productImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    productBadge: "Popular",
    productCategory: "Wearables",
    productTitle: "Smart Watch Series 9",
    productDescription:
      "Premium smartphone with excellent performance and camera quality.",
    productRating: "1.9 (122)",
    productPrice: "₦3,500,000",
    productButton: "Add to cart",
  },
];

// array []
// object {}

console.log(featuredProductsData);
// forEach()
// filter()
// javascript event
// map()
// sort()

featuredProductsData.forEach((item) => {
  let div = `
          <a href="./productDetail.html">
          <div class="product-card">
            <div class="product-image-container">
              <img
                class="product-image"
                src="${item.productImage}"
                alt="MacBook Pro"
              />

              <span class="product-badge"> ${item.productBadge} </span>

              <button class="wishlist-btn">
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>

            <div class="product-content">
              <span class="product-category"> ${item.productCategory} </span>

              <h3 class="product-name">${item.productTitle}</h3>

              <p class="product-description">
              ${item.productDescription}
              </p>

              <div class="product-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa b-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>

                <span>4.9 (120)</span>
              </div>

              <div class="product-bottom">
                <span class="product-price"> ${item.productPrice} </span>

                <button class="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
          </a>
    `;

  productContainer.innerHTML += div;

  console.log(div);
});

// filter method

// step by step for products filter
// 1. selecting all buttons (filter-btn)
// 2. mapping each button using forEach methon
// 3. apply the even to each pointing
// 4 getting the button texts
console.log(featuredProductsData);
let filterbtn = document.querySelectorAll(".filter-btn");
console.log(filterbtn);

filterbtn.forEach((btn) => {
  console.log(btn);

  btn.addEventListener("click", () => {
    console.log(btn.innerText);
    let buttonText = btn.innerText;
    let filterProduct = featuredProductsData.filter((item) => {
      return item.productCategory === buttonText;
    });
    productContainer.innerHTML = " ";

    if (buttonText === "All Products") {
      featuredProductsData.forEach((item) => {
        let div = `
          <div class="product-card">
            <div class="product-image-container">
              <img
                class="product-image"
                src="${item.productImage}"
                alt="MacBook Pro"
              />

              <span class="product-badge"> ${item.productBadge} </span>

              <button class="wishlist-btn">
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>

            <div class="product-content">
              <span class="product-category"> ${item.productCategory} </span>

              <h3 class="product-name">${item.productTitle}</h3>

              <p class="product-description">
              ${item.productDescription}
              </p>

              <div class="product-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa b-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>

                <span>4.9 (120)</span>
              </div>

              <div class="product-bottom">
                <span class="product-price"> ${item.productPrice} </span>

                <button class="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
    `;

        productContainer.innerHTML += div;

        console.log(div);
      });
    } else {
      filterProduct.forEach((item) => {
        let div = `
          <div class="product-card">
            <div class="product-image-container">
              <img
                class="product-image"
                src="${item.productImage}"
                alt="MacBook Pro"
              />

              <span class="product-badge"> ${item.productBadge} </span>

              <button class="wishlist-btn">
                <i class="fa-regular fa-heart"></i>
              </button>
            </div>

            <div class="product-content">
              <span class="product-category"> ${item.productCategory} </span>

              <h3 class="product-name">${item.productTitle}</h3>

              <p class="product-description">
              ${item.productDescription}
              </p>

              <div class="product-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa b-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>

                <span>4.9 (120)</span>
              </div>

              <div class="product-bottom">
                <span class="product-price"> ${item.productPrice} </span>

                <button class="add-cart-btn">Add to Cart</button>
              </div>
            </div>
          </div>
    `;

        productContainer.innerHTML += div;

        console.log(div);
      });
    }
  });
});

// Products Count section
let productCount = document.querySelector(".product-count");
let totalProductCount = featuredProductsData.length;
productCount.innerText = totalProductCount + " Products";

// Add to Cart section
let cartCount = document.querySelector(".cart-count");
let buttons = document.querySelectorAll(".add-cart-btn");
let count = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    console.log("testing add to cart");
    count += 1;
    cartCount.innerText = count;
    btn.innerText = "Already Added";

    if (btn.innerText === "Already Added") {
      btn.disabled = true;
      btn.style.backgroundColor = "grey";
    }
  });
});
