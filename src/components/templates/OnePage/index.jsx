import React from 'react';
import { FirstSection, SecondSection, ThirdSection, FourthSection } from '../../organisms';
import { SectionDivider } from '../../atoms';
import { FaArrowDown } from 'react-icons/fa';

function OnePage({ FirstSectionProps, SecondSectionProps, ThirdSectionProps, FourthSectionProps }) {
  function nextSection() {
    
  }

  return <>
    <FirstSection id="first_section"  {...FirstSectionProps} />
    <SectionDivider type={1} />
    <SecondSection id="second_section" {...SecondSectionProps} />
    <SectionDivider type={2} />
    <FourthSection id="third_section"  {...FourthSectionProps} />
    <ThirdSection id="third_section"  {...ThirdSectionProps} />
    <button aria-label="Avançar" className="next_button" onClick={() => nextSection()}>
      <a href="#second_section">
        <FaArrowDown />
      </a>
    </button>
  </>;
}

export default OnePage;