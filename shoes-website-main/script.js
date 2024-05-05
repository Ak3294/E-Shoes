const help_btn = document.querySelector(".help");
const header_drop_down = document.querySelector(".header-drop-down");
let timeout;

function handleCart(e) {
  // <div class="best-seller-card">
  //     <img src="./Utilities/Best-Sellers/best-seller2.webp">
  //     <h3>royce2 black men's running shoes</h3>
  //     <div class="price">Rs. 3099.00</div>
  //     <button type="submit" class="btn" onclick="handleCart()">buy now</button>
  // </div>
  e.preventDefault();
  let targetNode = e.target;
  console.log(targetNode);

  let parentNode = targetNode.parentNode;
  console.log(parentNode);
  imgsrc = parentNode.children[0].src;
  productName = parentNode.children[1].innerText;
  price = parentNode.children[2].innerText;

  console.log(imgsrc, productName, price);

  //-----------------------------------------

  var newDiv = document.createElement("div");

  var newimg = document.createElement("img");
  newimg.src = imgsrc;

  var newheading = document.createElement("h2");
  newheading.textContent = productName;

  var newprice = document.createElement("h3");
  newprice.textContent = price;

  newDiv.appendChild(newimg);
  newDiv.appendChild(newheading);
  newDiv.appendChild(newprice);

  window.location.href = "cart.html";

  //---------------------------------------------

  let container = document.getElementsByClassName("container_")[0];
  console.log(container);
  container.appendChild(newDiv);
}

function showDropdown() {
  clearTimeout(timeout);
  header_drop_down.classList.add("active");
}

function hideDropdown() {
  timeout = setTimeout(() => {
    header_drop_down.classList.remove("active");
  }, 200);
}

help_btn.addEventListener("mouseover", showDropdown);
help_btn.addEventListener("mouseleave", hideDropdown);

header_drop_down.addEventListener("mouseover", showDropdown);
header_drop_down.addEventListener("mouseleave", hideDropdown);

let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
const wrapper = document.querySelector(".best-sellers .wrapper");
const cards = document.querySelectorAll(".best-seller-card");
const prevBtn = document.querySelector(".best-sellers .prev-btn");
const nextBtn = document.querySelector(".best-sellers .next-btn");

const cardWidth = cards[0].offsetWidth;
const visibleCards = 4;
let currentIndex = 0;

function showCards() {
  cards.forEach((card, index) => {
    if (index >= currentIndex && index < currentIndex + visibleCards) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function handlePrev() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    showCards();
  }
}

function handleNext() {
  if (currentIndex < cards.length - visibleCards) {
    currentIndex += 1;
    showCards();
  }
}

prevBtn.addEventListener("click", handlePrev);
nextBtn.addEventListener("click", handleNext);

showCards();

//-------------------cart code js-----------------//
//Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//Open Cart
cartIcon.onclick = () => {
  cart.classList.add("active");
};

//Close Cart
closeCart.onclick = () => {
  // Changed event listener to closeCart
  cart.classList.remove("active");
};

//Cart Working Js
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making function
function ready() {
  // Remove Items from Cart
  var removeCartButtons = document.getElementsByClassName("cart-remove");
  console.log(removeCartButtons);
  for (var i = 0; i < removeCartButtons.length; i++) {
    var button = removeCartButtons[i]; // Corrected syntax here
    button.addEventListener("click", removeCartItem);
  }

  // Quantity Changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }

  //Add to Cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }

  //Buy Button Work
  document
    .getElementsByClassName("btn-buy")[0]
    .addEventListener("click", buyButtonClicked);
}

//Buy Button
function buyButtonClicked() {
  alert("Your Order is Placed!");
  var cartContent = document.getElementsByClassName("cart-content")[0];
  while (cartContent.hasChildNodes()) {
    cartContent.removeChild(cartContent.firstChild);
  }
  updateTotal();
}

// Remove Items from Cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updateTotal();
}

// Quantity changed
function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

// ADD TO Cart
function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = document.querySelector(".product-img").getAttribute("src");

  AddProductToCart(title, price, productImg);
  updateTotal();
}

function AddProductToCart(title, price, productImg) {
  var cartItems = document.querySelector(".cart-content");
  if (!cartItems) {
    console.error("Cart content not found.");
    return;
  }

  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].innerText == title) {
      alert("You Have Already Add this item to Cart!");
      return;
    }
  }
  // Create a new cart item
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");

  // Set inner HTML for the cart item
  cartShopBox.innerHTML = `
            <img src="${productImg}" alt="" class="cart-img">
            <div class="detail-box">
                <div class="cart-product-title">${title}</div>
                <div class="cart-price">₹${price}</div> <!-- Adjust according to your currency symbol -->
                <input type="number" value="1" class="cart-quantity">
            </div>
            <!-- Remove Cart -->
            <i class='bx bxs-trash cart-remove'></i>
        `;

  // Append the cart item to the cart container
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
  cartShopBox
    .getElementsByClassName("cart-quantity")[0]
    .addEventListener("change", quantityChanged);

  updateTotal(); // Update total after adding a new item
}

function updateTotal() {
  var cartContent = document.querySelector(".cart-content");
  var cartBoxes = cartContent.querySelectorAll(".cart-box");
  var total = 0;
  for (var i = 0; i < cartBoxes.length; i++) {
    var cartBox = cartBoxes[i];
    var priceElement = cartBox.querySelector(".cart-price");
    var quantityElement = cartBox.querySelector(".cart-quantity");
    var price = parseFloat(priceElement.innerText.replace("₹", "")); // Adjust according to your currency symbol
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.querySelector(".total-price").innerText = total.toFixed(2); // Adjust decimal places as needed
}
