import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../Store/authSlice";
import "./Header.css";

export default function Header() {
  const Items = useSelector((state) => state.cart.Items);
  const cartContents = [];
  Items.forEach((item) => {
    if (item.count > 0) {
      cartContents.push(item);
    }
  });

  const dispatch = useDispatch();
  function handleSignIn() {
    dispatch(authActions.openSignIn());
  }
  function scrollToMenu() {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  function scrollToFooter() {
    const footerSection = document.getElementById("footer-section");
    if (footerSection) {
      footerSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <header>
      <div id="header">
        <p>EVERYDAY EATS!</p>
        <nav className="navbar">
          <ul className="nav-items">
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link onClick={scrollToMenu}>
              <li>MENU</li>
            </Link>
            {/* <Link>
              <li>MOBILE APP</li>
            </Link> */}
            <Link onClick={scrollToFooter}>
              <li>CONTACT US</li>
            </Link>
          </ul>
        </nav>
        <section className="section">
          <Link to="/search">
            <img src={assets.search_icon} alt="search-icon" />
          </Link>
          <Link to="/cart">
            <img
              src={assets.basket_icon}
              alt="basket-icon"
              className="cart-icon"
            />
            {cartContents.length > 0 ? (
              <img src={assets.selector_icon} className="selector" />
            ) : null}
          </Link>
          <button onClick={handleSignIn} className="button-icon">
            Sign In
          </button>
        </section>
      </div>
    </header>
  );
}
