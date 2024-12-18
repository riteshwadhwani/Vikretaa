import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Timer, TrendingUp } from "lucide-react";

function ProductHeader({ name, price24hChange, timeRemaining }) {
  return (
    <div className="grid grid-cols-3 gap-4 rounded-lg border bg-white p-4">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5" />
        <div>
          <p className="text-sm text-gray-500">24h Change</p>
          <p className={price24hChange > 0 ? "text-green-600" : "text-red-600"}>
            {price24hChange > 0 ? "+" : ""}
            {price24hChange}%
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Timer className="h-5 w-5" />
        <div>
          <p className="text-sm text-gray-500">Time Remaining</p>
          <p className="font-medium">{timeRemaining}</p>
        </div>
      </div>
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const location = useLocation();
  const product = location.state;
  const navigate = useNavigate();
  const [bids, setBids] = useState(product.bids || []); 

  const placeBid = async (bidAmount) => {
    const url = "http://localhost:8080/Bids/placeBid";
    const payload = {
      bidAmount,
      productId: id,
      buyerId: JSON.parse(localStorage.getItem("user_details")).id, 
    };
    console.log("clicked",payload)

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      const newBid = {
        id: data.id,
        amount: data.bidAmount,
        bidder: "You",
        timestamp: data.timestamp,
      };

      setBids((prevBids) => [newBid, ...prevBids]);
      alert("Bid placed successfully!");
      navigate("/buyer-dashboard/my-bids")
    } catch (error) {
      console.log(error.message)
      alert("Failed to place bid. Please try again.");
    }
  };

  const currentHighestBid = bids[0]?.amount || product.currentBid;

  return (
    <div className="space-y-6 text-black">
      <ProductHeader
        name={product.title}
        price24hChange={5.2}
        timeRemaining={product.endTime}
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <img
            src={product.image}
            alt={product.title}
            className="w-full rounded-lg object-cover"
          />
          <div className="rounded-lg border bg-white p-4">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-white p-4">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">Current Highest Bid</h3>
              <p className="text-3xl font-bold text-blue-600">
                Rs {currentHighestBid.toLocaleString()}
              </p>
            </div>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const bidAmount = Number(e.target.bid.value);
                if (bidAmount < currentHighestBid + 10) {
                  alert(`Your bid must be at least Rs ${currentHighestBid + 10}`);
                  return;
                }
                 placeBid(bidAmount); 
              }}
            >
              <input
                type="number"
                name="bid"
                min={currentHighestBid + 10}
                step="10"
                placeholder={`Min: Rs ${currentHighestBid + 10}`}
                className="w-full rounded-lg border px-3 py-2"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white py-2 rounded-lg"
              >
                Place Bid
              </button>
            </form>
          </div>

          <div className="rounded-lg border bg-white p-4">
            <h3 className="text-lg font-semibold">Bid History</h3>
            {bids.length === 0 ? (
              <p className="text-gray-500">No bids yet. Be the first!</p>
            ) : (
              <div className="space-y-2">
                {bids.map((bid) => (
                  <div key={bid.id} className="flex justify-between">
                    <span>Rs {bid.amount.toLocaleString()}</span>
                    <span className="text-gray-500">
                      {new Date(bid.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
