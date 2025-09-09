export default function ProductFilters({ filters, onFiltersChange }) {
  const { searchTerm, onlyAvailable, sortOrder } = filters;

  const handleClearFilters = () => {
    onFiltersChange({
      searchTerm: '',
      onlyAvailable: false,
      sortOrder: 'asc'
    });
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Búsqueda */}
        <div className="relative">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search products
          </label>
          <div className="relative">
            <input 
              id="search"
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => onFiltersChange({ searchTerm: e.target.value })}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              aria-label="Search products"
            />
            <span className="absolute left-3 top-3 text-gray-400">🔍</span>
          </div>
        </div>

        {/* Filtro Disponibilidad */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Availability
          </label>
          <div className="flex items-center">
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox"
                checked={onlyAvailable}
                onChange={(e) => onFiltersChange({ onlyAvailable: e.target.checked })}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
              <span className="ml-3 text-sm text-gray-600">Only available</span>
            </label>
          </div>
        </div>

        {/* Ordenamiento */}
        <div>
          <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
            Sort by price
          </label>
          <select 
            id="sort"
            value={sortOrder}
            onChange={(e) => onFiltersChange({ sortOrder: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Clear Filters */}
      {(searchTerm || onlyAvailable || sortOrder !== 'asc') && (
        <div className="mt-4">
          <button 
            onClick={handleClearFilters}
            className="text-sm text-blue-500 hover:text-blue-700 font-medium"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};