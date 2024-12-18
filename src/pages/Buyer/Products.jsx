import React, { useState, useEffect } from 'react';
import ProductCard from '../../Components/Core/ProductCard';

export default function Products() {
  const [products, setProducts] = useState([]);

  // Fetch products from API on load
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/allProducts');
        const data = await response.json();

        const transformedProducts = data.map((item) => ({
          id: item.id,
          title: item.productName,
          description: item.porductDetails || 'No details available',
          currentBid: item.price,
          endTime: 'N/A', 
          image: 'https://via.placeholder.com/150', 
        }));

        setProducts(transformedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white font-bold">Available Products</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
