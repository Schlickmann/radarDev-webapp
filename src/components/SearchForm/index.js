import React, { useState } from 'react';

import "./styles.css";

function SearchForm({ onSearch, onClear, isFiltered }) {
  const [search, setSearch] = useState('');

  async function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
        await onSearch({ search });
    }
    
  }

  async function handleClear() {
      setSearch('');

      await onClear();
  }

    return (
        <form id="search">
            <div className="input-group">
                <div className="input-block">
                    <label htmlFor="search">Search</label>
                    <input 
                    type="text" 
                    name="search" 
                    id="search" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    disabled={isFiltered}
                    required /> 
                </div>
                {isFiltered ? (<button onClick={handleClear} type="reset">Clear</button>) : (<button onClick={handleSearch} type="submit">Search</button>)}
                
            </div>
        </form>
    );
}

export default SearchForm;