import { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import Product from "../component/Product";
import axios from "axios";
import Swal from "sweetalert2";

const Shyamzon = () => {
  const [category, setCategory] = useState("all");
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  // GET PRODUCTS
  const getAllProducts = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch(() => Swal.fire("Error fetching products"));
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // SEARCH
  const searchProducts = () => {
    if (!searchText.trim()) {
      Swal.fire("Enter something to search");
      return;
    }

    axios
      .get(`https://dummyjson.com/products/search?q=${searchText}`)
      .then((res) => setProducts(res.data.products))
      .catch(() => Swal.fire("Search failed"));
  };

  // ADD PRODUCT (OPTIONAL ADMIN FEATURE)
  const addProduct = () => {
    axios
      .post("https://dummyjson.com/products/add", {
        title: "New Product",
        price: 999,
        description: "Added from React",
      })
      .then((res) => {
        setProducts([res.data, ...products]);
        Swal.fire("Product added");
      });
  };

  // UPDATE SELECTED PRODUCT
  const handleUpdate = () => {
    if (!selectedProduct) {
      Swal.fire("Select a product first");
      return;
    }

    axios
      .put(`https://dummyjson.com/products/${selectedProduct.id}`, {
        title: "Updated Product",
      })
      .then(() => Swal.fire("Product updated"));
  };

  // DELETE SELECTED PRODUCT
  const handleDelete = () => {
    if (!selectedProduct) {
      Swal.fire("Select a product first");
      return;
    }

    axios
      .delete(`https://dummyjson.com/products/${selectedProduct.id}`)
      .then(() => {
        setProducts(products.filter(p => p.id !== selectedProduct.id));
        setSelectedProduct(null);
        Swal.fire("Product deleted");
      });
  };

  // FILTER
  const filteredProducts =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
        onSearch={searchProducts}
      />

      <Navbar
        setCategory={setCategory}
        onAdd={addProduct}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        hasSelection={!!selectedProduct}
      />

      <div className="products">
        {filteredProducts.map(product => (
          <Product
            key={product.id}
            product={product}
            isSelected={selectedProduct?.id === product.id}
            onSelect={setSelectedProduct}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Shyamzon;