import React, {useState} from 'react';
import SearchContext from './SearchContext';

const SearchState = props => {
  const [searchHistory, setSearchHistory] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <SearchContext.Provider
      value={{
        searchHistory,
        setSearchHistory,
        searchData,
        setSearchData,
        isLoading,
        setIsLoading,
      }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchState;
