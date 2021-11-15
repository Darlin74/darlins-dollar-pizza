import React from 'react';
import meat from './images/meat.jpg';
import './css/slice.css';

function MeatLover() {
  return(
    <div className="MeatLover col-4">
      <div className="card">
        <img src="https://970-cs-830077421805-default.cs-us-east1-pkhd.cloudshell.dev/mini-browser/home/dpachecosuarez2138/darlins-dollar-pizza/src/components/images/meat.jpg" class="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">Meat lovers Slice</h5>
          <p className="card-text">It's got cheese and lots of meat, it's got tomato sauce. What more could you ask for?</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: $10.00</li>
        </ul>
      </div>
    </div>
  );
}

export default MeatLover;
