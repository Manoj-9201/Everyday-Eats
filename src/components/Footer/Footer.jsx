import { assets } from "../../assets/assets";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-one">
        <h1>For better experience download</h1>
        <h1 className="second-head">our Everyday Eats app</h1>
        <div className="store-icon">
          <img src={assets.play_store} alt="play-store" className="div-img1" />
          <img src={assets.app_store} alt="app-store" />
        </div>
      </div>
      <section className="footer-section">
        <div className="footer-two">
          <div className="title">
            <h2>Everyday Eats!</h2>
            <ul>
              <li className="title-img">
                <img src={assets.facebook_icon} alt="facebook-icon" />
              </li>
              <li>
                <img src={assets.twitter_icon} alt="twitter-icon" />
              </li>
              <li>
                <img src={assets.linkedin_icon} alt="linkedin-icon" />
              </li>
            </ul>
          </div>
          <div className="grid-1">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="grid-2">
            <h2>Get In Touch</h2>
            <ul>
              <li>+1-212-4560-7890</li>
              <li>contact@everydayeats.dev</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </section>
    </footer>
  );
}
