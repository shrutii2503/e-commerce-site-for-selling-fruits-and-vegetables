import React from "react";
import CartProduct from "./cart-product";
function Cart(props) {
  let { productList } = props;
  let { totalQty } = props;
  function handleAddToCartClick() {
    props.onAddToCartClick();
  }
  function handleDecrementQtyClick(product) {
    props.onDecrementQtyClick(product);
  }
  function handleIncrementQtyClick(product) {
    props.onIncrementQtyClick(product);
  }
  function handleRemoveCartProductClick(product) {
    props.onRemoveCartProductClick(product);
  }
  return (
    <>
      {totalQty != 0 && (
        <div className="container">
            {productList.map((product, index) => (
              <CartProduct
                product={product}
                key={index}
                onIncrementQtyClick={handleIncrementQtyClick}
                onDecrementQtyClick={handleDecrementQtyClick}
                onRemoveCartProductClick={handleRemoveCartProductClick}
              />
            ))}
        </div>
      )}
      {totalQty == 0 && (
        <div className="container text-center text-red">Cart is Empty !</div>
      )}
    </>
  );
}
export default Cart;
