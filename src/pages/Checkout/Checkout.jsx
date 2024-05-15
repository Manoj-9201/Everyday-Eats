import { useSelector } from "react-redux";
import { currencyFormatter } from "../../util/formatter";
import { Link } from "react-router-dom";
import "./Checkout.css";

export default function Checkout() {
  const Items = useSelector((state) => state.cart.Items);
  const cartContents = [];
  Items.forEach((item) => {
    if (item.count > 0) {
      cartContents.push(item);
    }
  });
  const subTotal = cartContents.reduce((subTotal, item) => {
    return subTotal + item.price * item.count;
  }, 0);
  const Total = subTotal + 5;
  return (
    <>
      <form className="place-order">
        <div className="place-order-left">
          <p className="title">Delivery Information</p>
          <div className="multi-fields">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="last name" />
          </div>
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Street" />
          <div className="multi-fields">
            <input type="text" placeholder="City" />
            <input type="text" placeholder="State" />
          </div>
          <div className="multi-fields">
            <input type="text" placeholder="Zip Code" />
            <input type="text" placeholder="Country" />
          </div>
          <input type="text" placeholder="Phone" />
        </div>
      </form>
      <div>
        <section>
          <div className="table-containertwo-two">
            <table className="tabletwo-two">
              <h2 className="table-section-two">Cart Totals</h2>
              <tbody>
                <tr>
                  <td className="left-heading-two">Subtotal</td>
                  <td>{currencyFormatter.format(subTotal)}</td>
                </tr>
                <tr>
                  <td className="left-heading-two">Delivery Fee</td>
                  <td>{currencyFormatter.format(5)}</td>
                </tr>
                <tr>
                  <td className="left-heading-two">Total</td>
                  <td>{currencyFormatter.format(Total)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <Link to="/checkout">
            <button className="checkout-button-two">PROCEED TO PAYMENT</button>
          </Link>
        </section>
      </div>
    </>
  );
}
