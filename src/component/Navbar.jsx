import "./Navbar.css";
import Button from "./Button";

const Navbar = ({ setCategory, onAdd, onUpdate, onDelete, hasSelection }) => {
  return (
    <nav className="navbar">
      <Button text="All" onClick={() => setCategory("all")} />
      <Button text="Beauty" onClick={() => setCategory("beauty")} />
      <Button text="Fragrances" onClick={() => setCategory("fragrances")} />
      <Button text="Furniture" onClick={() => setCategory("furniture")} />
      <Button text="Groceries" onClick={() => setCategory("groceries")} />

      <Button text="Add Product" onClick={onAdd} />
      <Button
        text="Update Product"
        onClick={onUpdate}
        disabled={!hasSelection}
      />
      <Button
        text="Delete Product"
        onClick={onDelete}
        disabled={!hasSelection}
      />
    </nav>
  );
};

export default Navbar;
