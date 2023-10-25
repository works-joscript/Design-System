import React from 'react';
import './projects.css'
import uiKit from './imgs/UI Kit.svg'
import uiKit1 from './imgs/UI Kit (1).svg'
import uiKit2 from './imgs/UI Kit (2).svg'
import uiKit3 from './imgs/UI Kit (3).svg'
import uiKit4 from './imgs/UI Kit (4).svg'
import uiKit5 from './imgs/UI Kit (5).svg'
const Projects = () => {
    return (


    <div className="container">
      <div className="text">
        <p className="text-wrapper">9 UI Kits (over 350 screens)</p>
        <p className="Includes">
          Includes production-ready UI Kits from different categories such as food delivery, e-commerce, event booking
          and more.
        </p>
      </div>
      <div className="image">
            <img className="UI-kit" src={uiKit} />
            <img className="UI-kit" src={uiKit1} />
            <img className="UI-kit" src={uiKit2} />
            <img className="UI-kit" src={uiKit3} />
            <img className="UI-kit" src={uiKit4} />
            <img className="UI-kit" src={uiKit5} />

      </div>
    </div>
    );
}

export default Projects;
