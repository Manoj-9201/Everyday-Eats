import { useDispatch, useSelector } from "react-redux";
import Modal from "../Modal";
import { assets } from "../../assets/assets";
import { authActions } from "../../Store/authSlice";
import "./Auth.css";

export default function SignIn() {
  const signIn = useSelector((state) => state.auth.isSignInOpen);
  const dispatch = useDispatch();
  console.log(signIn);
  function handleLogin() {
    dispatch(authActions.closeSignIn());
    setTimeout(() => {
      dispatch(authActions.openLogin());
    }, 10);
  }
  function handleClose() {
    dispatch(authActions.closeAuth());
  }

  return (
    <Modal open={signIn} className="login-popup" onClose={handleClose}>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>Sign Up</h2>
          <img src={assets.cross_icon} alt="cancel" onClick={handleClose} />
        </div>
        <div className="login-popup-inputs">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </div>
        <button onClick={handleLogin}>Create Account</button>
        <div className="login-popup-condition">
          <input type="checkbox" name="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        <p>
          Already have an account?{" "}
          <strong className="strong" onClick={handleLogin}>
            Login here
          </strong>
        </p>
      </form>
    </Modal>
  );
}
