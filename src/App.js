import React, { useState, useEffect } from 'react';
import api from './services/api';

import DeveloperItem from './components/DeveloperItem';
import DeveloperForm from './components/DeveloperForm';
import SearchForm from './components/SearchForm';
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";
/**
 * Component
 * Isolated block of HTML, CSS and JS which does not interfere the rest of the application.
 */

/**
 * State
 * Information managed by components (Immutability)
 */

/**
 * Property
 * Information passed from the "father component" to its child.
 */

function App() {
  const [developers, setDevelopers] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    loadDevelopers();
  }, []);

  async function loadDevelopers() {
    const response = await api.get('/developers');

    setDevelopers(response.data);
    setIsFiltered(false);
  }

  async function handleAddDeveloper(data) {

    const response = await api.post('/developers', data);

    setDevelopers([...developers, response.data]);
  }

  async function handleSearch(data) {
    const response = await api.get('/filter', {
      params: {
        search: data.search
      }
    });

    setDevelopers(response.data);
    setIsFiltered(true);
  }

  return (
    <>
      <header className="title-header">
          <h1>RadarDev</h1>
          <h2>Find the best developers in the market</h2>
      </header>
      <div id="app">
        <aside>
          <strong>Register</strong>
          <DeveloperForm onSubmit={handleAddDeveloper} />
        </aside>
        <main>
          <SearchForm onSearch={handleSearch} onClear={loadDevelopers} isFiltered={isFiltered} />
          <ul>
            {developers.map( developer => (
              <DeveloperItem key={developer._id} developer={developer} />
            ))}
            
          </ul>
        </main>
      </div>
    </>
  );
}

export default App;
