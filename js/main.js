// Enter your code below.
let newOrder = document.getElementById("new-order-form");

newOrder.addEventListener("submit", (event) => {
  //Prevent Default Operation  
  event.preventDefault();

    //Define Variables
    let itemName = event.target.elements["order-item-name"].value;
    let itemPrice = event.target.elements["order-item-price"].value;
    let itemSize = event.target.elements["order-size"].value;
    let nameError = document.getElementById("name-invalid-feedback")
    let priceError = document.getElementById("price-invalid-feedback")
    let sizeError = document.getElementById("size-invalid-feedback")
    let errorCount = 0;
    let isFormValid = false;

    //Validate Form Item's
    if (isValueNotEmpty(itemName) == true) { //Validate Order Item Name
      let itemName = event.target.elements["order-item-name"].value;
      nameError = document.getElementById("name-invalid-feedback").style.display = 'none';
      errorCount +1;
    }
    else {
      nameError = document.getElementById("name-invalid-feedback").style.display = 'block';
      isFormValid = false;
    }
    if (isValueNotEmpty(itemPrice) == true && isGreaterThanFive(itemPrice) == true) { //Validate Order Price
      let itemPrice = event.target.elements["order-item-price"].value;
      priceError = document.getElementById("price-invalid-feedback").style.display = 'none';
      errorCount +1;
    }
    else {
      priceError = document.getElementById("price-invalid-feedback").style.display = 'block';
      isFormValid = false;
    }
    if (isValueNotEmpty(itemSize) == true) { //Validate Order Size
      let itemSize = event.target.elements["order-size"].value;
      sizeError = document.getElementById("size-invalid-feedback")
      errorCount +1;
    }
    else {
      sizeError = document.getElementById("size-invalid-feedback").style.display = 'block';
      isFormValid = false;
    }
    if (errorCount >= 3) {
      isFormValid = false;
    }
    
    if (isFormValid == true) { //Return Order
      addOrderItem(itemName, itemPrice, itemSize);
      event.target.elements["order-item-name"].value = "";
      event.target.elements["order-item-price"].value ="";
      event.target.elements["order-size"].value = "";
    }
});

// functions needed for assessment (do not change.)

/**
 * Checks if a value is not empty.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} - Returns true if the value is not empty, false otherwise.
 */
const isValueNotEmpty = (value) => {
  if (value !== "") {
      return true
  }
  return false
}

/**
 *
 * Checks if a given value is greater than zero.
 * @param {number} value - The value to be checked.
 * @returns {boolean} - True if the value is greater than zero, otherwise false.
 */
const isGreaterThanFive = (value) => {
  if (value > 5) {
      return true
  }
  return false
}

/**
 * Adds a new order item to the order list.
 *
 * @param {string} orderItemName - The name of the order item.
 * @param {number} orderItemPrice - The price of the order item.
 * @param {string} orderSize - The size of the order item.
 * @returns {void}
 */
const addOrderItem = (orderItemName, orderItemPrice, orderSize) => {
  let orderItemList = document.querySelector("#order-item-list")
  let newOrderItem = `<li class="list-group-item d-flex justify-content-between">
    <div class="w-100 justify-content-between">
      <h5 class="mb-1">${orderItemName}</h5>
      <small>${orderSize}</small>
    </div>
    <p class="mb-1">${'$'+orderItemPrice}</p>
  </li>`
  orderItemList.innerHTML += newOrderItem
}