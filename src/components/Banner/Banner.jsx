import { assets } from "../../assets/assets";
import "./Banner.css";
export default function Banner() {
  function scrollToMenu() {
    const menuSection = document.getElementById("menu-section");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="banner">
      <div className="banner-content">
        <img src={assets.header_img} alt="header-image" />
        <div className="banner-text">
          <p>
            Order your <br /> favourite food here
          </p>
          <span>
            Experience culinary convenience with our online food ordering
            platform. Browse a diverse selection of cuisines, place your order
            effortlessly, and enjoy doorstep delivery of delicious meals.
          </span>
        </div>
        <button onClick={scrollToMenu}>View Menu</button>
      </div>
    </div>
  );
}
