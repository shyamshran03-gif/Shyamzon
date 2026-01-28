import "./Header.css";

const Header = ({ searchText, setSearchText, onSearch }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <p>જ⁀➴ Shyamzon.in</p>
      </div>

      <div className="nav__del">
        <p>
          ⚓︎ Deliver to <br />
          <b>Chennai 600052</b>
        </p>
      </div>


      <div className="header__search">
        <input
          type="text"
          placeholder="Search Amazon"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearch()}
        />
        <button onClick={onSearch}>🔍</button>
      </div>

      <div className="header__nav">
        <div className="nav__item">
          <p>
            Hello, Sign in <br /> <b>Account & Lists</b>
          </p>
        </div>

        <div className="nav__item">
          <p>
            Returns <br /> <b>& Orders</b>
          </p>
        </div>

        <div className="nav__item">
          <p>
            🛒 <br /> <b>Cart</b>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
