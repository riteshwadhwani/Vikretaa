import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { BsClock, BsCurrencyDollar, BsTag, BsTrash } from 'react-icons/bs';

function ProductList({ products, onDelete }) {
  console.log(products);

  const handleDelete = async (productId) => {
   
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) {
      return; 
    }

    try {
      const response = await fetch(`http://localhost:8080/products/delete/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }
      console.log(`Product with ID ${productId} deleted successfully`);
     
      if (onDelete) onDelete(productId);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title className="mb-4">Your Products</Card.Title>

        <div className="space-y-4">
          {(!products || products.length === 0) ? (
            <p className="text-center text-gray-500 py-4">No products added yet</p>
          ) : (
            products.map((product) => (
              <div
                key={product.id}
                className="border rounded p-4 hover:shadow-md transition-shadow"
              >
                <div className="d-flex gap-4">
                  <div className="w-24 h-24 bg-gray-200 rounded d-flex justify-content-center align-items-center text-gray-500">
                    No Image
                  </div>

                  <div className="flex-grow-1">
                    <h3 className="h5">{product.productName || 'Untitled Product'}</h3>
                    <p className="text-gray-600 small mb-2">
                      {product.productDetails || 'No description available.'}
                    </p>

                    <div className="d-flex flex-wrap gap-4">
                      <div className="d-flex align-items-center text-gray-500 small">
                        Price: Rs {product.price ?? 'N/A'}
                      </div>

                      <div className="d-flex align-items-center text-gray-500 small">
                        <BsClock className="me-1" />
                        Created On: {product.createdOn}
                      </div>

                      <div className="d-flex align-items-center text-gray-500 small">
                        <BsTag className="me-1" />
                        {product.category || 'Uncategorized'}
                      </div>
                    </div>
                  </div>

                  <div className="d-flex align-items-center">
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      <BsTrash className="me-1" /> Delete
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductList;
