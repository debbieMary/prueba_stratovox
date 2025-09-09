import { useState } from 'react';
import { useProductFilter } from './hooks/useProductFilter';
import  ProductFilters  from './components/ProductFilters';
import ProductCard from './components/ProductCard';
import  ProductGrid  from './components/ProductGrid';
import  EmptyState from './components/EmptyState';
import datos from './datos.json';

function App() {
  const [filters, setFilters] = useState({
    searchTerm: '',
    onlyAvailable: false,
    sortOrder: 'asc'
  });

  const data = datos || [];
  const filteredProducts = useProductFilter(data, filters);

  const handleFiltersChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleClearFilters = () => {
    setFilters({
      searchTerm: '',
      onlyAvailable: false,
      sortOrder: 'asc'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Product Inventory
        </h1>
      </header>

      <ProductFilters 
        filters={filters} 
        onFiltersChange={handleFiltersChange} 
      />

      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Showing {filteredProducts.length} of {data.length} products
          {(filters.searchTerm || filters.onlyAvailable) && (
            <span className="text-blue-500"> (filtered)</span>
          )}
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <ProductGrid products={filteredProducts} />
      ) : (
        <EmptyState onClearFilters={handleClearFilters} />
      )}
    </div>
  );
}

export default App;