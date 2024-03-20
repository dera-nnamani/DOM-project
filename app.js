const CART__ITEMS__CONTAINER = document.getElementById(
  "cart__items__container"
);

const cartItems = [
  {
    product_id: 1,
    product_name: "Dior Bomb Lipgloss",
    product_image: "dior-gloss.jpeg",
    product_price: "$140",
    product_quantity: 1,
  },

  {
    product_id: 2,
    product_name: "Fenty Peach Bomb Lipgloss",
    product_image: "fenty-gloss-bomb-universal-lip-luminizer.jpeg",
    product_price: "$120",
    product_quantity: 1,
  },

  {
    product_id: 3,
    product_name: "Rare Beauty Blush",
    product_image: "rare-beauty-soft-pinch-liquid-blush.jpeg",
    product_price: "$135",
    product_quantity: 1,
  },
  {
    product_id: 4,
    product_name: "Kylie High Lipgloss",
    product_image: "kylie-high-lipgloss.jpg",
    product_price: "$125",
    product_quantity: 1,
  },
];

function display_cart_items() {
  let product_to_display = [];
  for (let i = 0; i < cartItems.length; i++) {
    const cart_product = `<div class="flex justify-between items-center shadow-md p-5">
            <div class="flex items-center gap-4">
              <img
                src=${cartItems[i].product_image}
                alt="product image"
                class="w-40 rounded-md"
              />
              <div>
                <h2 class="font-bold text-3xl">${cartItems[i].product_name}</h2>
                <button
                  class="bg-red-500 text-white font-semibold p-2 rounded-md mt-2"
                >
                  Delete
                </button>
              </div>
            </div>

            <div class="text-center">
              <p class="font-bold text-xl">${cartItems[i].product_price}</p>
              <button
                class="bg-green-500 text-white text-lg font-semibold p-2 rounded-md mt-2" onclick="increaseProductQuantity(${cartItems[i].product_id})"
              >
                +
              </button>
              <span class="font-bold text-lg">${cartItems[i].product_quantity}</span>
              <button
                class="bg-red-500 text-white text-lg font-semibold p-2 rounded-md mt-2" onclick="decreaseProductQuantity(${cartItems[i].product_id})"
              >
                -
              </button>
            </div>
          </div>`;
    product_to_display.push(cart_product);
  }

  CART__ITEMS__CONTAINER.innerHTML = product_to_display.join(" ");
}
display_cart_items();

//function to increase product quantity
function increaseProductQuantity(productID) {
  for (let i = 0; i < cartItems.length; i++) {
    //check for the product that was clicked
    if (cartItems[i].product_id === productID) {
      console.log(cartItems[i]);
      cartItems[i].product_quantity++;
    }
  }
  display_cart_items();
}

//function to decrease product quantity
function decreaseProductQuantity(productID) {
  for (let i = 0; i < cartItems.length; i++) {
    //check for the product that was clicked
    if (
      cartItems[i].product_id === productID &&
      cartItems[i].product_quantity != 1
    ) {
      cartItems[i].product_quantity--;
    }
  }
  display_cart_items();
}
