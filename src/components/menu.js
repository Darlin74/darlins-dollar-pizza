import React from 'react';
import Slice from './slice';
import Plain from './images/plain.jpg';
import Hawaiian from './images/hawaiian.jpg';
import Veggie from './images/veggie.jpeg';
import Bbq from './images/bbq.jpg';
import MeatLover from './images/meat.jpg';
import Pepperoni from './images/pepperoni.jpg';
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>

        <Slice 
        img ={Plain}
        title = "plain"
        description = "It's got cheese, it's got tomato sauce, and it's only  a dollar. What more could you ask for?"
        price ="$1.00"/>

        <Slice 
        img ={Pepperoni}
        title = "Pepperoni"
        description = "It's got cheese and pepperoni, it's got tomato sauce. What more could you ask for?"
        price ="$5.00"/>

        <Slice 
        img ={Bbq}
        title = "bbq"
        description = "We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
        price ="$1.00"/>


        <Slice 
        img ={MeatLover}
        title = "meat-lover"
        description = "It's got cheese and lots of meat, it's got tomato sauce. What more could you ask for?"
        price ="$10.00"/>


        <Slice 
        img ={Hawaiian}
        title = "hawaiian"
        description = "We know, you think this is gross. But try this once and we swear you'll be hooked on this pineapple and ham pizza."
        price ="$2.00"/>



        <Slice 
        img ={Veggie}
        title = "veggie"
        description = "It's got cheese and some vegstables, it's got tomato sauce. What more could you ask for?"
        price ="$3.00"/>

      </div>
    </div>
  );
}

export default Menu;
