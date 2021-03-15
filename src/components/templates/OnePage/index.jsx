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
    <About section="about_section" style="tertiary" {...AboutProps} />  
    <InfoGrid section="tech_section" style="primary" {...TechnologiesProps} />
    <InfoGrid section="more_section" style="secondary" {...MoreProps} />
    <Button onClick={() => nextRoute()} children={<FaArrowDown />} />
  </>;
}

{/* <SectionDivider type={13} />
<SectionDivider type={31} />
<SectionDivider type={12} /> */}
export default OnePage;