import React from 'react';

import { SubHeading } from '../../components';
import { images,data } from '../../constants';

import './Laurels.css';

const Award = ({ award:{title,imgUrl:image,subtitle:sub} }) => (
  <div className="app__laurels_awards-card">
  <img src={image} alt={title} />
  <div className="app__laurels_awards-card_content">
    <p className="p__cormorant" style={{ color:'#DCCA87' }}>{title}</p>
    <p className="p__cormorant">{sub}</p>
  </div>
    </div>
);

const Laurels = () => (
  <div className='app__laurels app__bg app__wrapper section__padding' id='awards'>
    <div className="app__laurels-logo">
      <img src={images.logo} alt="web logo" />
    </div>
    <div className="app__wrapper_info m-4">
      <SubHeading title={'Awards & Recognitions'} />
      <h1 className="headtext__cormorant">Our Laurels</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (<Award award={award} key={index+award}/>))}
      </div>
    </div>

    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
      
    </div>
    
  </div>
);

export default Laurels;
