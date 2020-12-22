import React from 'react';
import { Header, InfoGridLeft, InfoGridRight, About } from '../../organisms';
import { SectionDivider } from '../../atoms';
import { FaArrowDown } from 'react-icons/fa';

function OnePage({ HeaderProps, AboutProps, InfoGridRightProps, InfoGridLeftProps }) {
  function nextSection() {
    
  }

  return <>
    <Header id="first_section"  {...HeaderProps} />
    {/* <SectionDivider type={1} /> */}
    <About {...AboutProps} />
    <InfoGridRight id="second_section" {...InfoGridRightProps} />
    <SectionDivider type={2} />
    <InfoGridLeft id="third_section"  {...InfoGridLeftProps} />
    {/* <button aria-label="Avançar" className="next_button" onClick={() => nextSection()}>
      <a href="#second_section">
        <FaArrowDown />
      </a>
    </button> */}
  </>;
}

export default OnePage;