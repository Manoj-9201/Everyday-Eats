import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import { assets } from "../../assets/assets";
import { authActions } from "../../Store/authSlice";
import "./Auth.css";
import { Link } from "react-router-dom";

export default function LogIn() {
  const LogIn = useSelector((state) => state.auth.isLoginOpen);
  const dispatch = useDispatch();

  function handleSignIn() {
    dispatch(authActions.openSignIn());
  }
  function handleClose() {
    dispatch(authActions.closeAuth());
  }
  return (
    <Modal open={LogIn} className="login-popup-two" onClose={handleClose}>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>Log In</h2>
          <img src={assets.cross_icon} alt="cancel" onClick={handleClose} />
        </div>
        <div className="login-popup-inputs">
          <input type="email" name="email" placeholder="Your email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>

        <button>Login</button>

        <div className="login-popup-condition">
          <input type="checkbox" name="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <p>
          Create a new account?{" "}
          <strong className="strong" onClick={handleSignIn}>
            Click here
          </strong>
        </p>
      </form>
    </Modal>
  );
}
