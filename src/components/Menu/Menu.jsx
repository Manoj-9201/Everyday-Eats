import { useDispatch, useSelector } from "react-redux";
import { menu_list } from "../../assets/assets";
import { menuAction } from "../../Store/menu-slice";
import "./Menu.css";

export default function Menu() {
  const color = useSelector((state) => state.menu.color);
  const dispatch = useDispatch();
  function handleMenu(name) {
    dispatch(menuAction.addToMenu(name));
  }

  console.log(color);

  return (
    <menu className="menu-items">
      <h2>Explore our menu</h2>
      <p>
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time
      </p>
      <section className="menu-list">
        {menu_list.map((menu) => (
          <ul key={menu.menu_name}>
            <img
              src={menu.menu_image}
              alt="menu_image"
              onClick={() => handleMenu(menu.menu_name)}
              className={color === menu.menu_name ? "active" : ""}
            />
            <li>{menu.menu_name}</li>
          </ul>
        ))}
      </section>
      <hr className="menu-divider" />
    </menu>
  );
}
