import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  InfoMedia,
  Button
} from '../../components';

const AboutSeven = ()=> (
  <div className="background-image" style={{backgroundImage: 'url(images/bg/about-bg-5-1.jpg)'}}>
    <div className="container container-style1">
      <div className="row flex-row-reverse align-items-center gx-70">
        <div className="col-lg-6 col-xl">
          <img src="images/about/ab-7-1.jpg" alt="aboutthumb"/>
        </div>
        <div className="col-lg-6 col-xl-auto">
          <div className="about-box2">
            <SecSubTitle><i className="fas fa-bring-forward"/>Get best It solution 2022</SecSubTitle>
            <SecTitle className="text-capitalize h1">Inspiring Tech Needs for Business</SecTitle>
            <p>Dynamically monetize web-enabled processes through client-based action items. Authoritatively grow goal is oriented markets through ompletely generate technically sound content without robust users.</p>
            
            <Button path="/service">Order Service<i className="far fa-long-arrow-right"/></Button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSeven;