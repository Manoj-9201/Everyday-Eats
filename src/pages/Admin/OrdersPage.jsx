import { useSelector } from "react-redux";
import { currencyFormatter } from "../../util/formatter";
import "./OrdersPage.css";

export default function OrdersPage() {
  const cartContents = useSelector((state) => state.cart.cartContents);
  //   const cart = [];
  //   cartContents.forEach((item) => cart.push(item));
  //   return (
  //     <>
  //       <section className="orders">
  //         <p>Order Page</p>
  //         <div>
  //           <p>{cart.name}</p>
  //         </div>
  //         <div></div>
  //         <div></div>
  //         <div></div>
  //       </section>
  //     </>
  //   );
  // }

  const overallQuantity = cartContents.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const overallPrice = cartContents.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartContents.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span>{item.name}</span>
              <span>X {item.quantity}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="overall-info">
        <span>Overall Quantity: {overallQuantity}</span>
        <span>Overall Price: {overallPrice}</span>
        <select className="dropdown">
          <option value="food_processing">Food Processing</option>
          <option value="out_for_delivery">Out for Delivery</option>
        </select>
      </div>
    </div>
  );
}
