import React, { useState, useEffect } from 'react';
import api from './services/api';

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
  const [github_username, setGithubUser] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => { 
          const { latitude, longitude } = position.coords; 

          setLatitude(latitude);
          setLongitude(longitude);
      }, 
      (err) => { console.log(err) }, 
      { timeout: 30000 }
    );
  }, []);

  useEffect(() => {
    async function loadDevelopers() {
      const response = await api.get('/developers');

      setDevelopers(response.data);
    }

    loadDevelopers();
  }, [])

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/developers', { github_username, techs, latitude, longitude });

    setGithubUser('');
    setTechs('');
  }

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Github User</label>
            <input 
              type="text" 
              name="github_username" 
              id="github_username" 
              value={github_username}
              onChange={e => setGithubUser(e.target.value)}
              required /> 
          </div>
          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input 
              type="text" 
              name="techs" 
              id="techs" 
              value={techs}
              onChange={e => setTechs(e.target.value)}
              required /> 
          </div>
          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
                required /> 
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
                type="number" 
                name="longitude" 
                id="longitude" 
                value={longitude}  
                onChange={e => setLongitude(e.target.value)}
                required /> 
            </div>
          </div>

          <button type="submit">Submit</button>
        </form>
      </aside>
      <main>
        <ul>
          {developers.map( developer => (
            <li key={developer._id} className="dev-item">
              <header>
                <img src={developer.avatar_url} alt="" />
                <div className="user-info">
                  <strong>{developer.name}</strong>
                  <span>{developer.techs.join(', ')}</span>
                </div>
              </header>
              <p>{developer.bio}</p>
              <a href={`https://github.com/${developer.github_username}`} target="_blank">See profile in Github</a>
            </li>
          ))}
          
        </ul>
      </main>
    </div>
  );
}

export default App;
