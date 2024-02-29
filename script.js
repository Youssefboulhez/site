document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsList = document.getElementById('cart-items');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function () {
        const item = this.parentNode;
        const itemName = item.querySelector('h2').innerText;
        const newItem = document.createElement('li');
        newItem.className = 'cart-item';
        newItem.innerText = itemName;
        cartItemsList.appendChild(newItem);
      });
    });
  });
  