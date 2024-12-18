import { useEffect, useState } from 'react';
import BidTable from "../../Components/Core/BidTable";

export default function MyBids() {
  const [bids, setBids] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchBids = async () => {
      let id  = JSON.parse(localStorage.getItem("user_details")).id;
      try {
         const response = await fetch(`http://localhost:8080/Bids/user/${JSON.parse(localStorage.getItem("user_details")).id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch bids.");
        }
        const data = await response.json();
        
       
        const transformedBids = data.map((bid, index) => ({
          id: index + 1, 
          product: `Product ${index + 1}`, 
          amount: bid.bidAmount,
          date: new Date().toISOString().split('T')[0], 
          status: 'active', 
        }));

        setBids(transformedBids);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBids();
  }, []);

  if (loading) {
    return <p className="text-white">Loading...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">My Bids</h1>
      <BidTable bids={bids} />
    </div>
  );
}
