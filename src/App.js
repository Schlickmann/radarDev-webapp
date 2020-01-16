import React from 'react';

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

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <DeveloperForm />
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
