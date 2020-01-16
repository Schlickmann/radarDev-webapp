import React, { useState, useEffect } from 'react';

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
  }, [])

  return (
    <div id="app">
      <aside>
        <strong>Register</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_user">Github User</label>
            <input type="text" name="github_user" id="github_user" required /> 
          </div>
          <div className="input-block">
            <label htmlFor="techs">Technologies</label>
            <input type="text" name="techs" id="techs" required /> 
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
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/11969565?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Julaini</strong>
                <span>ReactJs</span>
              </div>
            </header>
            <p>Juliani Bio</p>
            <a href="https://github.com/Schlickmann">See profile in Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/11969565?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Julaini</strong>
                <span>ReactJs</span>
              </div>
            </header>
            <p>Juliani Bio</p>
            <a href="https://github.com/Schlickmann">See profile in Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/11969565?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Julaini</strong>
                <span>ReactJs</span>
              </div>
            </header>
            <p>Juliani Bio</p>
            <a href="https://github.com/Schlickmann">See profile in Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/11969565?s=460&v=4" alt="" />
              <div className="user-info">
                <strong>Julaini</strong>
                <span>ReactJs</span>
              </div>
            </header>
            <p>Juliani Bio</p>
            <a href="https://github.com/Schlickmann">See profile in Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
