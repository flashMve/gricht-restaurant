import React from 'react';

import './SpecialMenu.css';
import { SubHeading,MenuItem } from '../../components';

import { images,data } from '../../constants';

const SpecialMenu = () => (
  <div className='app__specialMenu section__padding flex__center' id='menu'>
    
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant'>Today's Special</h1>
    </div>

    <div className="app__specialMenu-menu">

      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading'>Wine & Bear</p>
        <div className="app__specialMenu-menu_items">
          { data.wines.map((wine,index) => 
          (<MenuItem key={index+wine} tags={wine.tags} title={wine.title} price={wine.price} />)
          ) }
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu bear coctail" />
      </div>


      <div className="app__specialMenu-menu_cocktail flex__center">
        <p className='app__specialMenu-menu_heading'>Cocktails</p>
        <div className="app__specialMenu-menu_items">
          { data.cocktails.map((coctail,index) => (          (<MenuItem key={index+coctail} tags={coctail.tags} title={coctail.title} price={coctail.price} />))) }
        </div>
      </div>


    </div>

    <div style={{ marginTop:'15px' }}>
      <button className='custom__button'>View More</button>
    </div>


  </div>
);

export default SpecialMenu;
