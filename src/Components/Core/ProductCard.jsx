import { useNavigate } from 'react-router-dom';

export default function ProductCard({ id, title, description, currentBid, endTime, image }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/buyer-dashboard/productsDetails/${id}`, {
      state: {
        title,
        description,
        currentBid,
        endTime,
        image,
      },
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
        <div className="mt-4 flex justify-between items-center text-sm">
          <div>
            <span className="text-gray-500">Price:</span>
            <span className="ml-1 font-semibold">Rs {currentBid.toLocaleString()}</span>
          </div>
          <div>
            <span className="text-gray-500">Ends in:</span>
            <span className="ml-1 font-semibold">{endTime}</span>
          </div>
        </div>
        <button
          onClick={handleViewDetails}
          className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
}
