import React from 'react';
import './CommingSoon.css'

import app from './imgs/app.svg'
import img from './imgs/omg.svg'
import Container from './imgs/Container.svg'

const CommingSoon = () => {
    return (
        <div className='comming'>
            
            <div className="text">
                <h1>Coming soon</h1>
                <p>Get lifetime updates.</p>
            </div>

            <div className='cards'>
                <div>
                    <img src={app}/>
                    <h2>Website Pages & Components</h2>
                    <p>More components are coming soon.</p>
                </div>
                <div>
                    <img src={img}/>
                    <h2>More icons and 3D illustration by Nucleus.</h2>
                    <p>Illustration & Icons</p>
                </div>
            </div>

            <img src={Container} style={{marginTop:'64px', width:'100%'}}/>
            

        </div>
    );
}

export default CommingSoon;
