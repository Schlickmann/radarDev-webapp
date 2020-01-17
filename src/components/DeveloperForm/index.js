import React, {useState, useEffect} from 'react';

function DeveloperForm({ onSubmit }) {
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

  async function handleSubmit(e) {
    e.preventDefault();

    await onSubmit({ github_username, techs, latitude, longitude });


    setGithubUser('');
    setTechs('');
  }

    return (
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
    );
}

export default DeveloperForm;