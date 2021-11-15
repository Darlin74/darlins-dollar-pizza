import React from 'react';
import bbq from './images/bbq.jpg';
import './css/slice.css';

function Bbq () {
  return(
    <div className="Bbq col-4">
      <div className="card">
        <img src="https://970-cs-830077421805-default.cs-us-east1-pkhd.cloudshell.dev/mini-browser/home/dpachecosuarez2138/darlins-dollar-pizza/src/components/images/bbq.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">bbq Slice</h5>
          <p className="card-text">We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $1.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Bbq;