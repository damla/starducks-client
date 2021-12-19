import { createContext, useState, useContext, ReactElement, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface FilterContextState {
  filters: string[];
  selectedFilter: string;
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
}

// set default values for initializing
const contextDefaultValues: FilterContextState = {
  filters: ['All Coffees', 'Hot', 'Iced'],
  selectedFilter: 'All Coffees',
  setSelectedFilter: function (): void {
    throw new Error('Function not implemented.');
  },
};

// created context with default values
const FilterContext = createContext<FilterContextState>(contextDefaultValues);

export const FilterProvider = ({ children }: Props): ReactElement => {
  // set default values
  const [filters] = useState<string[]>(contextDefaultValues.filters);
  const [selectedFilter, setSelectedFilter] = useState<string>(contextDefaultValues.selectedFilter);

  const values = {
    filters,
    selectedFilter,
    setSelectedFilter,
  };

  // add values to provider to reach them out from another component
  return <FilterContext.Provider value={values}>{children}</FilterContext.Provider>;
};

// created custom hook
export const useFilter = () => useContext(FilterContext);
