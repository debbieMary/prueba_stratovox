import { useMemo } from 'react';

export function useProductFilter(data, { searchTerm, onlyAvailable, sortOrder }){
  const sortedAndFilteredData = useMemo(() => {
    let result = [...data];

    if (searchTerm) {
      result = result.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.id.toString().includes(searchTerm)
      );
    }

    if (onlyAvailable) {
      result = result.filter(item => item.inStock);
    }

    result.sort((a, b) => {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });

    return result;
  }, [data, searchTerm, onlyAvailable, sortOrder]);

  return sortedAndFilteredData;
};