import React from 'react';
import { Header, About, InfoGrid } from '../../organisms';
import { SectionDivider } from '../../atoms';
import { Button } from './styles';
import { useRouter } from 'next/router';
import { FaArrowDown } from 'react-icons/fa';

function OnePage({ HeaderProps, AboutProps, MoreProps, TechnologiesProps }) {
  const router = useRouter();

  const nextRoute = () => {
    var currentPath = window.location.hash.substr(1);

    switch (currentPath) {
      case 'header_section': 
        router.push('#about_section');
        break;
      case 'about_section': 
        router.push('#tech_section');
        break;
      case 'tech_section': 
        router.push('#more_section');
        break;
      case 'more_section': 
        router.push('#header_section');
        break;
      default:
        router.push('#about_section');
        break;
    }
  }

  return <>
    <Header section="header_section" {...HeaderProps} />
    <About section="about_section" {...AboutProps} />  
    <SectionDivider type={13} />
    <SectionDivider type={31} />
    <InfoGrid style="primary" section="tech_section" {...TechnologiesProps} />
    <SectionDivider type={12} />
    <InfoGrid style="secondary" section="more_section"  {...MoreProps} />
    <Button onClick={() => nextRoute()} children={<FaArrowDown />} />
  </>;
}

    {/* <SectionDivider type={2} /> */}
export default OnePage;