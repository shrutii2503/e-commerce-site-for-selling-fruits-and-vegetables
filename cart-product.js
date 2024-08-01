import React from "react";
function CartProduct(props) {
  let { product } = props;
  function handleAddToCartClick() {
    props.onAddToCartClick(product);
  }
  function handleDecrementQtyClick() {
    props.onDecrementQtyClick(product);
  }
  function handleIncrementQtyClick() {
    props.onIncrementQtyClick(product);
  }
  function handleRemoveCartProductClick() {
    props.onRemoveCartProductClick(product);
  }
  product.finalPrice = product.mrp - (product.mrp * product.discount) / 100;
  return (
    <>
      {product.qty != 0 && (
        <div className="row border-bottom p-2">
          <div className="col-12 col-lg-3 text-center">{product.name}</div>
          <div className="col-12 col-lg-3 text-center">
            Per {product.unit}: Rs.{" "}
            <span className="text-striked">{product.mrp.toFixed(2)}</span>{" "}
            {product.discount != 0 && (
              <span className="text-red">{product.finalPrice.toFixed(2)}</span>
            )}
          </div>
          <div className="col-2 col-lg-1">
            <button
              className={
                "btn btn-block " +
                (product.inStock ? "btn-primary" : "btn-grey")
              }
              onClick={handleDecrementQtyClick}
            >
              -
            </button>
          </div>
          <div className="col-4 col-lg-2 text-center">Qty. {product.qty}</div>
          <div className="col-2 col-lg-1">
            <button
              className={
                "btn btn-block " +
                (product.inStock ? "btn-primary" : "btn-grey")
              }
              onClick={handleIncrementQtyClick}
            >
              +
            </button>
          </div>
          <div className="col-4 col-lg-2 text-end">Rs. {product.qty * product.mrp}</div>
          <a
            href="#"
            onClick={handleRemoveCartProductClick}
            className="col-4 text-end"
          >
            Remove
          </a>
        </div>
      )}{" "}
    </>
  );
}
export default CartProduct;