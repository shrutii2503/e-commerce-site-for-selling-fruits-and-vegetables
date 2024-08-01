import React, { useState } from "react";
import Product from "./product";
import NavigationBar from "./navigation-bar";
import Cart from "./cart";

function HomePage() {
  // to be called by navbar component on button click
  function handleButtonClick(sectionName) {
    // console.log(sectionName);
    setView(sectionName);
  }
  let [view, setView] = useState("home");
  let [totalAmount, setTotalAmount] = useState(0);
  let [totalQty, setTotalQty] = useState(0);
  let products = [
    {
      name: "Grapes",
      image: "grapes.jpg",
      unit: "kg",
      mrp: 120,
      discount: 10,
      inStock: false,
      qty: 0,
    },
    {
      name: "Mango",
      image: "mango.jpg",
      unit: "doz",
      mrp: 500,
      discount: 8,
      inStock: true,
      qty: 0,
    },
    {
      name: "Banana",
      image: "banana.jpg",
      unit: "doz",
      mrp: 60,
      discount: 0,
      inStock: true,
      qty: 0,
    },
    {
      name: "Apple",
      image: "apple.jpg",
      unit: "kg",
      mrp: 180,
      discount: 7,
      inStock: true,
      qty: 0,
    },
    {
      name: "Anjeer",
      image: "anjeer.jpg",
      unit: "kg",
      mrp: 100,
      discount: 0,
      inStock: true,
      qty: 0,
    },
    {
      name: "Strawberry",
      image: "strawberry.jpg",
      unit: "kg",
      mrp: 200,
      discount: 20,
      inStock: true,
      qty: 0,
    },
    {
      name: "Papaya",
      image: "papaya.jpg",
      unit: "kg",
      mrp: 50,
      discount: 15,
      inStock: true,
      qty: 0,
    },
    {
      name: "Cherry",
      image: "cherry.jpg",
      unit: "kg",
      mrp: 300,
      discount: 5,
      inStock: true,
      qty: 0,
    },
    {
      name: "Chikoo",
      image: "chikoo.jpg",
      unit: "kg",
      mrp: 60,
      discount: 5,
      inStock: false,
      qty: 0,
    },
    {
      name: "Kiwi",
      image: "kiwi.jpg",
      unit: "piece",
      mrp: 20,
      discount: 0,
      inStock: false,
      qty: 0,
    },
    {
      name: "Orange",
      image: "orange.jpg",
      unit: "kg",
      mrp: 200,
      discount: 10,
      inStock: true,
      qty: 0,
    },
    {
      name: "pear",
      image: "pear.jpg",
      unit: "kg",
      mrp: 200,
      discount: 7,
      inStock: true,
      qty: 0,
    },
    {
      name: "Pineapple",
      image: "pineapple.jpg",
      unit: "piece",
      mrp: 100,
      discount: 50,
      inStock: true,
      qty: 0,
    },
    {
      name: "Pomegranete",
      image: "pomegranete.jpg",
      unit: "kg",
      mrp: 200,
      discount: 5,
      inStock: true,
      qty: 0,
    },
    {
      name: "Sitaphal",
      image: "sitaphal.jpg",
      unit: "kg",
      mrp: 100,
      discount: 10,
      inStock: true,
      qty: 0,
    },
    {
      name: "Watermelon",
      image: "watermelon.jpg",
      unit: "peice",
      mrp: 80,
      discount: 50,
      inStock: true,
      qty: 0,
    },
    {
      name: "Sweetlime",
      image: "sweetlime.jpg",
      unit: "kg",
      mrp: 200,
      discount: 5,
      inStock: true,
      qty: 0,
    },
    {
      name: "Peach",
      image: "peach.jpg",
      unit: "kg",
      mrp: 200,
      discount: 10,
      inStock: false,
      qty: 0,
    },
    {
      name: "Dragon",
      image: "dragon.jpg",
      unit: "piece",
      mrp: 60,
      discount: 0,
      inStock: true,
      qty: 0,
    },
  ];
  let [productList, setProductList] = useState(products);
  function handleAddToCartClick(product) {
    // let pList = [...productList];
    let pList = productList.map((p, index) => {
      if (p.name == product.name) {
        p.qty = 1;
      }
      return p;
    });
    setProductList(pList);
    calculateTotal();
  }
  function handleDecrementQtyClick(product) {
    // let pList = [...productList];
    let pList = productList.map((p, index) => {
      if (p.name == product.name) {
        p.qty--;
      }
      return p;
    });
    setProductList(pList);
    calculateTotal();
  }
  function handleIncrementQtyClick(product) {
    // let pList = [...productList];
    let pList = productList.map((p, index) => {
      if (p.name == product.name) {
        p.qty++;
      }
      return p;
    });
    setProductList(pList);
    calculateTotal();
  }
  function handleRemoveCartProductClick(product) {
    // let pList = [...productList];
    let pList = productList.map((p, index) => {
      if (p.name == product.name) {
        p.qty = 0;
      }
      return p;
    });
    setProductList(pList);
    calculateTotal();
  }
  function calculateTotal() {
    let totalAmount = 0;
    let totalQty = 0;
    productList.map((p, index) => {
      if (p.qty != 0) {
        totalQty++;
        totalAmount = totalAmount + p.qty * p.mrp;
      }
    });
    setTotalAmount(totalAmount);
    setTotalQty(totalQty);
  }
  function handleViewCartClick() {
    setView("cart");
  }
  function handleBackToShoppingClick() {
    setView("home");
  }
  function handlePlaceOrderClick() {
    let whatsappNumber = "919422035020";
    let whatsAppMessage = `Hello Sir, Total number of products purchased is ${totalQty} and total amount is ${totalAmount}.`;
    window.location = `https://wa.me/${whatsappNumber}?text=${whatsAppMessage}`;
  }
  return (
    <>
      <NavigationBar
        totalAmount={totalAmount}
        totalQty={totalQty}
        view={view}
        onViewCartClick={handleViewCartClick}
        onBackToShoppingClick={handleBackToShoppingClick}
        onPlaceOrderClick={handlePlaceOrderClick}
      />
      {view == "home" && (
        <div className="container ">
          <div className="row">
            {productList.map((product, index) => (
              <Product
                product={product}
                key={index}
                onAddToCartClick={handleAddToCartClick}
                onIncrementQtyClick={handleIncrementQtyClick}
                onDecrementQtyClick={handleDecrementQtyClick}
              />
            ))}
          </div>
        </div>
      )}
      {view == "cart" && (
        <Cart
          productList={productList}
          totalQty={totalQty}
          onIncrementQtyClick={handleIncrementQtyClick}
          onDecrementQtyClick={handleDecrementQtyClick}
          onRemoveCartProductClick={handleRemoveCartProductClick}
        />
      )}
    </>
  );
}
export default HomePage;