import { useState } from 'react';
import { SearchContext } from '../contexts/search.context';

export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState('');
	return (
		<>
			<SearchContext.Provider value={{ search, setSearch }}>
				{children}
			</SearchContext.Provider>
		</>
	);
};
