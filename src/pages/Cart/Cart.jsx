import { useDispatch, useSelector } from "react-redux";
import { currencyFormatter } from "../../util/formatter";
import { Link } from "react-router-dom";
import "./Cart.css";
import { cartActions } from "../../Store/cart-slice";
import { assets } from "../../assets/assets";
import { useEffect } from "react";
export default function Cart() {
  const Items = useSelector((state) => state.cart.Items);
  const cartContents = useSelector((state) => state.cart.cartContents);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.updateCartContents());
  }, [dispatch, Items]);

  const subTotal = cartContents.reduce((subTotal, item) => {
    return subTotal + item.price * item.count;
  }, 0);
  const Total = subTotal + 5;

  function handleRemove(name) {
    dispatch(cartActions.removeItem(name));
  }

  return (
    <>
      <div>
        {cartContents.length > 0 ? (
          <div>
            <div className="table-container">
              <table className="table">
                <thead>
                  <tr>
                    <th>Items</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartContents.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{currencyFormatter.format(item.price)}</td>
                      <td>{item.count}</td>
                      <td>
                        {currencyFormatter.format(item.price * item.count)}
                      </td>
                      <td
                        onClick={() => handleRemove(item.name)}
                        className="remove"
                      >
                        {"x"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <section>
              <h2 className="table-section">Cart Totals</h2>
              <div className="table-containertwo">
                <table className="tabletwo">
                  <tbody>
                    <tr>
                      <td className="left-heading">Subtotal</td>
                      <td>{currencyFormatter.format(subTotal)}</td>
                    </tr>
                    <tr>
                      <td className="left-heading">Delivery Fee</td>
                      <td>{currencyFormatter.format(5)}</td>
                    </tr>
                    <tr>
                      <td className="left-heading">Total</td>
                      <td>{currencyFormatter.format(Total)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Link to="/checkout">
                <button className="checkout-button">PROCEED TO CHECKOUT</button>
              </Link>
            </section>
            <section>
              <div className="promo-container">
                <label htmlFor="promoInput">
                  If you have a promo code, Enter it here
                </label>
                <div>
                  <input
                    type="text"
                    className="promo-input"
                    placeholder="Enter promo code"
                  />
                  <button className="promo-button">Apply</button>
                </div>
              </div>
            </section>
          </div>
        ) : (
          <div className="cart">
            <img src={assets.cart_img} alt="cart-img" />
            <p className="cart-p">Your Cart is Empty</p>
            <p className="cart-p2">
              Go to homepage and select your favorite items
            </p>
            <Link to="/">
              <button className="cart-button">Go to home</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
