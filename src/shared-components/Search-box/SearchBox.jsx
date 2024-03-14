import "./SearchBox.scss";

const SearchBox = () => {
  return (
    <form className="search-desktop">
      <label>
        <img src="/assets/icons/Search.svg" alt="search icon" />
        <input
          type="search"
          name="search"
          placeholder="Search"
          id="search-input"
        />
      </label>
    </form>
  );
};

export default SearchBox;
