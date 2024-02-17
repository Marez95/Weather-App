import "./Search.css";

function Search({ onSearchValueChange }) {

  return (
    <div className="searchBox">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchValueChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
