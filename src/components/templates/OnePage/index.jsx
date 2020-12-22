import React from 'react';
import { Header, About, InfoGrid, InfoGridRight } from '../../organisms';
import { SectionDivider, Button } from '../../atoms';
import { Container } from './styles';
import { useRouter } from 'next/router';

function OnePage({ HeaderProps, AboutProps, MoreProps, TechnologiesProps }) {
  const router = useRouter();

  return <>
    <Header id="header_section"  {...HeaderProps} />
    <About id="about_section" {...AboutProps} />  
    <SectionDivider type={13} />
    <SectionDivider type={31} />
    <InfoGrid style="primary" id="tech_section" {...TechnologiesProps} />
    <SectionDivider type={12} />
    <InfoGrid style="secondary" id="more_section"  {...MoreProps} />
  </>;
}

    {/* <SectionDivider type={2} /> */}
export default OnePage;