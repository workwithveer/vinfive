import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  ServiceSingle,
  FooterOne
} from '../containers';

const ServiceDetails = ()=> (
  <Fragment>
    <Seo title="Services Details" />
    <HeaderOne />
    <Breadcrumb pageName="Services Details" bgImage="images/hero/hero-bg-3-1.jpg" />
    <ServiceSingle className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default ServiceDetails;