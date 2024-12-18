import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function BidInput({ currentHighestBid, onPlaceBid }) {
  const [bidAmount, setBidAmount] = useState(currentHighestBid + 10);
  const minBid = currentHighestBid + 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidAmount >= minBid) {
      onPlaceBid(bidAmount);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">
          Place Your Bid
        </label>
        <div className="flex gap-2">
          <Input
            type="number"
            min={minBid}
            step="10"
            value={bidAmount}
            onChange={(e) => setBidAmount(Number(e.target.value))}
            className="flex-1"
          />
          <Button type="submit" disabled={bidAmount < minBid}>
            Place Bid
          </Button>
        </div>
      </div>
      <p className="text-sm text-gray-500">
        Minimum bid: ${minBid.toLocaleString()}
      </p>
    </form>
  );
}