import { useDispatch, useSelector } from "react-redux";
import { assets } from "../../assets/assets";
import { selectionAction } from "../../Store/selection-slice";
import { cartActions } from "../../Store/cart-slice";
import { currencyFormatter } from "../../util/formatter";
import "./Dishes.css";

export default function Dishes({ applyFilter }) {
  const menuItems = useSelector((state) => state.menu.menuItems);
  const selectDish = useSelector((state) => state.selection);
  const cartCount = useSelector((state) => state.cart.Items);
  const query = useSelector((state) => state.search.query);

  const dispatch = useDispatch();
  function dishClicked(id) {
    dispatch(selectionAction.selectOptions(id));
  }
  function increaseCount(id) {
    dispatch(cartActions.increaseCount(id));
  }
  function decreaseCount(id) {
    dispatch(cartActions.decreaseCount(id));
  }
  const filteredMenuItems = applyFilter
    ? menuItems.filter((item) => item.name.toLowerCase().includes(query))
    : menuItems;

  let itemCount = 0;
  cartCount.forEach((item) => {
    if (item.id === selectDish.selectedId) {
      itemCount = item.count;
    }
  });
  return (
    <section className="dish">
      <h2>Top dishes near you</h2>
      <div className="food-list">
        {filteredMenuItems.map((food) => (
          <ul key={food._id}>
            <li>
              <img src={food.image} alt="food_image" className="image" />
            </li>
            <li>
              <h3>{food.name}</h3>
            </li>
            <li>
              {selectDish.isDishClicked &&
              selectDish.selectedId === food._id ? (
                <div className="double-icon">
                  <img
                    src={assets.remove_icon_red}
                    alt="remove-icon"
                    className="green-icon"
                    onClick={() => decreaseCount(food._id)}
                  />
                  <p>{itemCount}</p>
                  <img
                    src={assets.add_icon_green}
                    alt="add-icon-green "
                    className="red-icon"
                    onClick={() => increaseCount(food._id)}
                  />
                </div>
              ) : (
                <img
                  src={assets.add_icon_white}
                  alt="add-icon"
                  className="add-icon"
                  onClick={() => {
                    dishClicked(food._id);
                    increaseCount(food._id);
                  }}
                />
              )}
            </li>
            <li>
              <img src={assets.rating_starts} alt="rating" className="rating" />
            </li>
            <li>
              <p>{food.description}</p>
            </li>
            <li className="price">{currencyFormatter.format(food.price)}</li>
          </ul>
        ))}
      </div>
    </section>
  );
}
