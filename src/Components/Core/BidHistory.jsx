import { formatDistance } from 'date-fns';

export function BidHistory({ bids }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Bid History</h3>
      <div className="space-y-2">
        {bids.map((bid) => (
          <div
            key={bid.id}
            className="flex items-center justify-between rounded-lg border p-3 bg-white"
          >
            <div>
              <p className="font-medium">${bid.amount.toLocaleString()}</p>
              <p className="text-sm text-gray-500">by {bid.bidder}</p>
            </div>
            <span className="text-sm text-gray-500">
              {formatDistance(new Date(bid.timestamp), new Date(), { addSuffix: true })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}