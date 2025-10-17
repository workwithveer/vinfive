import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../';

const ServiceBoxOne = ({bgImage, icon, title, text, path, className})=> (
  <div className={`service-style1 ${className || ''}`}>
    <div className="service-bg background-image" style={{backgroundImage: 'url(' + bgImage + ')'}}></div>
    <div className="service-icon"><img src={icon} alt="serviceicon"/></div>
    <h3 className="service-title h5"><Link to={path}>{title}</Link></h3>
    <p className="service-text">{text}</p>
    <Button path={path} className="style3">Read More<i className="far fa-long-arrow-right"/></Button>
  </div>
);

export default ServiceBoxOne;