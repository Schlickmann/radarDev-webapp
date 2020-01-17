import React, { useState, useEffect } from 'react';
import api from './services/api';

import DeveloperItem from './components/DeveloperItem';
import DeveloperForm from './components/DeveloperForm';
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

  useEffect(() => {
    async function loadDevelopers() {
      const response = await api.get('/developers');

      setDevelopers(response.data);
    }

    loadDevelopers();
  }, [])

  async function handleAddDeveloper(data) {

    const response = await api.post('/developers', data);

    setDevelopers([...developers, response.data]);
  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DeveloperForm onSubmit={handleAddDeveloper} />
      </aside>
      <main>
        <ul>
          {developers.map( developer => (
            <DeveloperItem key={developer._id} developer={developer} />
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
