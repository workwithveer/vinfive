import React from 'react';
import {
  Button, 
  ImageBoxOne, 
  SecTitle, 
  SecSubTitle, 
  InfoMedia
} from '../../components';

const AboutOne = ({className})=> (
  <div className={`position-relative ${className || ''}`}>    
    <div className="about-shape1 d-none d-xl-block">TechBiz</div>
    <div className="container z-index-common">        
      <div className="row gx-60">
        <div className="col-lg-6 col-xl-5 mb-50 mb-lg-0">
          <ImageBoxOne imageOne="images/about/ab-1-1.jpg"
            imageTwo="images/about/ab-1-2.jpg"
            video="https://www.dropbox.com/s/b4k0p5swok5l8t2/videoplayback.mp4?dl=1"
          />
        </div>
        <div className="col-lg-6 col-xl-7 align-self-center">
          <SecSubTitle><i className="fas fa-bring-forward"/>Get best It solution</SecSubTitle>
          <SecTitle className="h1">Trust Our Best IT Solution For Your Business</SecTitle>
          <p className="mb-4 mt-1 pb-3">Strategically orchestrate next-generation IT frameworks to elevate your business agility and resilience. Reliably empower seamless digital operations through scalable infrastructures and proactive service delivery. Uniquely optimize productivity, security, and growth with our tailored technology solutions—enabling 24/7 excellence for your enterprise.</p>
          <Button path="/about">About Us<i className="far fa-long-arrow-right"/></Button>
        </div>
      </div>
    </div>    
  </div>
);

export default AboutOne;