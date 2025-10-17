import React from 'react';
import {
  SecSubTitle,
  SecTitle,
  Button
} from '../../components';

const CtaOne = ({className})=> (
  <div className={`z-index-common background-image ${className || ''}`} style={{ backgroundImage: 'url(images/bg/cta-bg-1-1.jpg'}}>
    <div className="container">
      <div className="row text-center text-lg-start align-items-center justify-content-between">
        <div className="col-lg-auto">
          <SecSubTitle className="text-white">We are here to answer your questions</SecSubTitle>
          <SecTitle className="cta-title1 h1">Need A Consultation?</SecTitle>
        </div>
        <div className="col-lg-auto">
          <Button>Get A Quote<i className="far fa-arrow-right"/></Button>
        </div>
      </div>
    </div>
  </div>
);

export default CtaOne;