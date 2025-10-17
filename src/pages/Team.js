import React, {Fragment} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  TeamFour,
  CtaOne,
  AboutTwo,
  FooterOne,
  HeaderTwo
} from '../containers';

const Team = ()=> (
  <Fragment>
    <Seo title="Team" />
    <HeaderTwo />
    <Breadcrumb pageName="Team" bgImage="images/hero/hero-bg-3-1.jpg" />
    <TeamFour className="space-top space-extra-bottom"/>
    <CtaOne className="space"/>
    <AboutTwo className="space-top space-extra-bottom background-image" style={{backgroundImage: 'url(images/bg/skill-bg-2-1.jpg)'}} />
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
);

export default Team;