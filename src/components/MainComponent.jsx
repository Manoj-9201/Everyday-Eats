import { useSelector } from "react-redux";
import Dishes from "./Dishes/Dishes";
import LogIn from "./Auth/LogIn";
import Menu from "./Menu/Menu";
import SignIn from "./Auth/SignIn";
import Banner from "./Banner/Banner";

export default function MainComponent() {
  const isSignInOpen = useSelector((state) => state.auth.isSignInOpen);
  const isLoginOpen = useSelector((state) => state.auth.isLoginOpen);

  return (
    <>
      <Banner />
      <div id="menu-section">
        <Menu />
      </div>
      <Dishes applyFilter={false} />
      {isSignInOpen && <SignIn />}
      {isLoginOpen && <LogIn />}
    </>
  );
}
