export default function EmptyState({ onClearFilters }){
  return (
    <div className="text-center py-12">
      <div className="text-gray-400 text-6xl mb-4">😢</div>
      <h2 className="text-xl font-semibold text-gray-600 mb-2">No products found</h2>
      <p className="text-gray-400 mb-4">Try adjusting your filters or search terms</p>
      <button 
        onClick={onClearFilters}
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Clear all filters
      </button>
    </div>
  );
};