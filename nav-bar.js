import React from "react";

function NavBar(props) {
  return (
    <div class="container">
      <div class="row bg-primary justify-content-between p-3">
        <div class="col-3 ">Logo Here</div>
        <div class="col-9  text-end">
          <button className="btn btn-info " onClick={handleViewCartClick}>
            View Cart
          </button>
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

export default NavBar;
