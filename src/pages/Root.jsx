import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <div id="footer-section">
        <Footer />
      </div>
    </>
  );
}
