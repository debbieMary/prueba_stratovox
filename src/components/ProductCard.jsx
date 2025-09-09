export default function ProductCard({ product }){
  const { id, name, price, inStock, rating, image } = product;

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4 border border-gray-100">
      {/* Imagen */}
      <div className="mb-4 relative">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-48 object-cover rounded-lg"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-4xl">📦</span>
          </div>
        )}
        
        {/* Stock Badge */}
        <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-semibold ${
          inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </div>
      </div>

      {/* Info */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800 text-lg line-clamp-2">
          {name}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${price}
          </span>
          <div className="flex items-center">
            <span className="text-yellow-400">⭐</span>
            <span className="ml-1 text-sm text-gray-600">{rating}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>ID: {id}</span>
          <span className={`px-2 py-1 rounded ${
            inStock ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {inStock ? 'Available' : 'Sold Out'}
          </span>
        </div>
      </div>

      {/* Button */}
      <button 
        className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
          inStock 
            ? 'bg-blue-500 hover:bg-blue-600 text-white' 
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        disabled={!inStock}
      >
        {inStock ? 'Add to Cart' : 'Out of Stock'}
      </button>
    </div>
  );
};