import React from 'react';

import './styles.css';

function DeveloperItem({ developer }) {
    return (
        <li className="dev-item">
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
    )
}

export default DeveloperItem;