const wishlistCard = (products) => {
  var productList = "";
  products.map(
    (product, i) =>
      (productList += `<div class="product-card">
      <div class="product-card-img-container clicked" id="${product.id}">
        <img
          class="product-card-img "
          src=${product.picture_img}
          alt=""
          
        />
      </div>
      <div class="card-info">
        <div class="product-card-info">
          <div class="product-name-seller">
            <p class="product-name">${product.name}</p>
  
          </div>

          <div class="product-price">
            <p class="price">${product.price}</p>
            <p class="discount">Discount</p>
          </div>
          <div class="product-card-icons">
            <div class="product-card-icon">
              <img alt="" class="like" src="./images/like.svg" />
            </div>
          </div>
        </div>

        <div class="product-card-actions">
          <div class="product-card-button">Remove</div>
          <div class="product-card-button button">Checkout</div>
          <div></div>
        </div>
      </div>
    </div>`)
  );
  return productList;
};
