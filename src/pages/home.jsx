import React from "react";
import Button from "../components/atoms/Button";
import { Link } from "react-router-dom";

import ProductCard from "../components/organism/ProductCard";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 29.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Product 2",
    price: 39.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Product 3",
    price: 49.99,
    image: "https://via.placeholder.com/150",
  },
];

function HomePage() {
  return (
    <div>
      <div className="flex flex-wrap justify-center p-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center justify-center h-screen">
        <div className="space-x-4">
          <Link to="/login">
            <Button
              variant="primary"
              onClick={() => alert("Primary Button Clicked!")}
            >
              Login
            </Button>
          </Link>
          <Button
            variant="success"
            onClick={() => alert("Success Button Clicked!")}
          >
            Success
          </Button>
          <Button
            variant="danger"
            onClick={() => alert("Danger Button Clicked!")}
          >
            Danger
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
