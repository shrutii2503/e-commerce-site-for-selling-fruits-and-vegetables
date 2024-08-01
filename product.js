import React from "react";

function Product(props) {
  //   let product = {
  //     name: "Grapes",
  //     image: "grapes.jpg",
  //     unit: "kg",
  //     mrp: 120,
  //     discount: 10,
  //     inStock: false,
  //     qty: 0,
  //   };
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
  product.finalPrice = product.mrp - (product.mrp * product.discount) / 100;

  return (
    <div
      className={
        "col-6 col-lg-3 my-3 p-2 text-center " + (product.qty != 0 ? "product-added" : "")
      }
    >
      <div className="row">
        {product.discount != 0 && product.discount != 50 && (
          <div className="col-12 text-red">Get {product.discount}% OFF</div>
        )}
        {product.discount == 0 && <div className="col-12 text-red">&nbsp;</div>}
        {product.discount == 50 && (
          <div className="col-12 text-red">Buy 1 Get 1</div>
        )}

        <div className="col-12 ">
          <img src={"/images/" + product.image} alt="" />
        </div>
        <div className="col-12">{product.name}</div>
        <div className="col-12">
          Per {product.unit}: Rs.{" "}
          <span className="text-striked">{product.mrp.toFixed(2)}</span>{" "}
          {product.discount != 0 && (
            <span className="text-red">{product.finalPrice.toFixed(2)}</span>
          )}
        </div>
        {product.qty == 0 && (
          <div className="col-12">
            <button
              className={
                "btn " + (product.inStock ? "btn-primary" : "btn-grey")
              }
              onClick={handleAddToCartClick}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        )}
        {product.qty != 0 && (
          <div className="col-12">
            <div class="row justify-content-center">
              <div className="col-4 ">
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

              <div className="col-4 ">Qty. {product.qty}</div>
              <div className="col-4">
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
