import React from "react";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";


function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        className="checkout_ad"
        src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png"
        alt=""
      />

      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
        </div>
      ) : (
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* list of all checkout products */}
          {basket.map((item) => (
            <CheckoutProduct
              item={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
