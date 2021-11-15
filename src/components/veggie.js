import React from 'react';
import veggie from './images/veggie.jpeg';
import './css/slice.css';

function Veggie() {
  return(
    <div className="Veggie col-4">
      <div className="card">
        <img src= "https://970-cs-830077421805-default.cs-us-east1-pkhd.cloudshell.dev/mini-browser/home/dpachecosuarez2138/darlins-dollar-pizza/src/components/images/veggie.jpeg" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Veggie Slice</h5>
          <p className="card-text">It's got cheese and some vegstables, it's got tomato sauce. What more could you ask for?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $3.00</li>
        </ul>
      </div>
    </div>
  );
}

export default Veggie;
