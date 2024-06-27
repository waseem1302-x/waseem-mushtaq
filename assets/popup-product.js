function showProductInfo(product) {
  document.getElementById('popup-product-image').src = product.featured_image.src;
  document.getElementById('popup-product-title').textContent = product.title;
  document.getElementById('popup-product-price').textContent = "$" + (product.price / 100).toFixed(2);
  document.getElementById('popup-product-description').textContent = product.description;

  // Assuming colors and sizes are stored in product options
  const colors = product.options.find(option => option.name === 'Color');
  const sizes = product.options.find(option => option.name === 'Size');

  document.getElementById('popup-product-colors').textContent = 'Colors: ' + (colors ? colors.values.join(', ') : 'N/A');
  document.getElementById('popup-product-sizes').textContent = 'Sizes: ' + (sizes ? sizes.values.join(', ') : 'N/A');

  document.getElementById('product-info-popup').style.display = 'block';
}

function closePopup() {
  document.getElementById('product-info-popup').style.display = 'none';
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
  const popup = document.getElementById('product-info-popup');
  if (event.target == popup) {
    popup.style.display = 'none';
  }
}
