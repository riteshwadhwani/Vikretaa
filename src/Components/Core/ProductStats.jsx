import { Timer, TrendingUp } from 'lucide-react';

export function ProductStats({ name, price24hChange, timeRemaining }) {
  const isPositiveChange = price24hChange > 0;

  return (
    <div className="grid grid-cols-3 gap-4 rounded-lg border bg-white p-4">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5" />
        <div>
          <p className="text-sm text-gray-500">24h Change</p>
          <p className={isPositiveChange ? 'text-green-600' : 'text-red-600'}>
            {isPositiveChange ? '+' : ''}{price24hChange}%
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