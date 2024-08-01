import React from "react";

function NavigationBar(props) {
  let { totalAmount } = props;
  let { totalQty } = props;
  let { view } = props;
  function handleViewCartClick() {
    props.onViewCartClick();
  }
  function handleBackToShoppingClick() {
    props.onBackToShoppingClick();
  }
  function handlePlaceOrderClick() {
    props.onPlaceOrderClick();
  }

  return (
    <div class="container">
      <div class="row bg-primary justify-content-between align-items-center p-3">
        <div class="col-4 col-lg-3 ">
          <img src="/images/logo.jpg" className="img-fluid" alt="" />
        </div>
        <div class="col-8 col-lg-9  text-end">
          {view == "cart" && (
            <button
              className="btn btn-info "
              onClick={handleBackToShoppingClick}
            >
              Back
            </button>
          )}
          &nbsp;
          {view == "home" && (
            <button className="btn btn-info " onClick={handleViewCartClick}>
              View Cart
            </button>
          )}
          {view == "cart" && totalQty != 0 && (
            <button className="btn btn-info " onClick={handlePlaceOrderClick}>
              Place Order
            </button>
          )}
        </div>
        {totalAmount != 0 && (
          <div class="col-12 mt-2 text-white text-end">
            Total: Rs. {totalAmount} ({totalQty})
          </div>
        )}
        {totalAmount == 0 && <div class="col-12 mt-2 text-end">&nbsp;</div>}
      </div>
    </div>
  );
}
export default NavigationBar;
