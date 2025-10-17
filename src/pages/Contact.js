import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderTwo, 
  ContactTwo, 
  FooterOne
} from '../containers';

const Contact = () => (
  <Fragment>
    <Seo title="Contact Us" />
    <HeaderTwo />
    <Breadcrumb pageName="Contact Us" bgImage="images/hero/hero-bg-3-1.jpg" />
    <ContactTwo className="space-top space-extra-bottom"/>
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Contact;