const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navigation ul");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

//coffe
const cartArray = [
  {
    cartimg: "images/c7.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.159",
  },
  {
    cartimg: "images/c2.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/c3.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/c4.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/c1.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg:"images/c6.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/c5.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/c2.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/c4.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
];

cartArray.forEach((cart) => {
  const coffeeCart = document.querySelector(".product-cart");

  let coffeeCartCreate = document.createElement("div");
  coffeeCartCreate.classList.add("cart");

  coffeeCartCreate.innerHTML = ` <div class="cart-image">
  <img src=${cart.cartimg} alt="">
  </div>
  <div class="cart-text">
  <span>${cart.cartname}</span>
  <p>${cart.cartDetails}</p>
  </div>
  <div class="cart-price">
  <span class="price">${cart.cartPrice}</span>
  <button class="order-btn">order now</button>
  </div>`;

  if (coffeeCart) {
    coffeeCart.appendChild(coffeeCartCreate);
  }
});

//dessert

const dessertArray = [
  {
    cartimg: "images/d1.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.159",
  },
  {
    cartimg: "images/d5.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg:"images/d7.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg:"images/d4.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg:"images/d8.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/c2.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/d3.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/d5.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
  {
    cartimg: "images/d6.jpg",
    cartname: "Dalgona coffee",
    cartDetails: "lorem ispum,dolor sit amet consecteur adipisicing",
    cartPrice: "Rs.200",
  },
];

dessertArray.forEach((item) => {
  const coffeeCart = document.querySelector(".dessert");

  let coffeeCartCreate = document.createElement("div");
  coffeeCartCreate.classList.add("cart");

  coffeeCartCreate.innerHTML = ` <div class="cart-image">
  <img src=${item.cartimg} alt="">
  </div>
  <div class="cart-text">
  <span>${item.cartname}</span>
  <p>${item.cartDetails}</p>
  </div>
  <div class="cart-price">
  <span class="price">${item.cartPrice}</span>
  <button class="order-btn">order now</button>
  </div>`;

  if (coffeeCart) {
    coffeeCart.appendChild(coffeeCartCreate);
  }
});

//customer review

const customerArray = [
  {
    customerImage: "images/user1.jpg",
    cutomerFisrtName: "abhishke",
    cutomerLastName: "kumar",
    comments: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa minima aperiam placeat laboriosam debitis ea distinctio quod! Harum illo quis! Enim accusantium sit nemo iure? Dicta harum necessitatibus aperiam.`,
  },
  {
    customerImage: "images/user2.jpg",
    cutomerFisrtName: "abhishke",
    cutomerLastName: "kumar",
    comments: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa minima aperiam placeat laboriosam debitis ea distinctio quod! Harum illo quis! Enim accusantium sit nemo iure? Dicta harum necessitatibus aperiam.`,
  },
  {
    customerImage: "images/user3.jpg",
    cutomerFisrtName: "abhishke",
    cutomerLastName: "kumar",
    comments: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ipsa minima aperiam placeat laboriosam debitis ea distinctio quod! Harum illo quis! Enim accusantium sit nemo iure? Dicta harum necessitatibus aperiam.`,
  },
];

customerArray.forEach((customer) => {
  const customerParent = document.querySelector(".customer");

  const createCustomer = document.createElement("div");
  createCustomer.classList.add("customer-cart");
  createCustomer.innerHTML = ` <div class="customer-details">
                        <img src=${customer.customerImage} alt="">
                        <div class="details">
                            <span>${customer.cutomerFisrtName}</span>
                            <p>${customer.cutomerLastName}</p>
                        </div>
                    </div>
                    <div class="rating">❤️💖</div>
                    <div class="review">
                        <p>${customer.comments}</p>
                    </div>`;
  if (customerParent) {
    customerParent.appendChild(createCustomer);
  }
});
