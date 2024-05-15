import { useDispatch, useSelector } from "react-redux";
import Dishes from "../../components/Dishes/Dishes";
import { searchActions } from "../../Store/searchSlice";
import "./Search.css";

export default function Search() {
  const dispatch = useDispatch();
  const query = useSelector((state) => state.search.query);

  const handleInputChange = (e) => {
    dispatch(searchActions.updateQuery(e.target.value));
  };

  return (
    <>
      <form className="search-form">
        <input
          type="text"
          placeholder="Enter your favorite food"
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <i className="fas fa-search"></i>Search
        </button>
      </form>
      <Dishes applyFilter={true} />
    </>
  );
}
