import { useDispatch, useSelector } from "react-redux";
import { assets } from "../../assets/assets";
import "./Admin.css";
import OrdersPage from "./OrdersPage";
import { adminAction } from "../../Store/admin-Slice";
import AddItems from "./AddItems";
import ListItems from "./ListItems";

export default function Admin() {
  const dispatch = useDispatch();
  const component = useSelector((state) => state.admin.component);
  function handleComponent(name) {
    dispatch(adminAction.displayComponent(name));
  }

  return (
    <>
      <header>
        <div id="admin">
          <p>EVERYDAY EATS!</p>
          <img src={assets.profile_icon} alt="profile-icon" />
        </div>
        <p className="p-tag">Admin Panel</p>
      </header>
      <hr className="line" />
      <nav className="nav">
        <p onClick={() => handleComponent("AddItems")}>Add Items</p>
        <p onClick={() => handleComponent("ListItems")}>List Items</p>
        <p onClick={() => handleComponent("Orders")}>Orders</p>
        <div className="vertical-line"></div>
      </nav>
      <main>
        {component === "AddItems" ? (
          <AddItems />
        ) : component === "ListItems" ? (
          <ListItems />
        ) : (
          <OrdersPage />
        )}
      </main>
    </>
  );
}
