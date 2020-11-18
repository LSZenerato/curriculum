import React from 'react';
import { FirstSection, SecondSection, ThirdSection, FourthSection } from '../../organisms';

function OnePage({ FirstSectionProps, SecondSectionProps, ThirdSectionProps, FourthSectionProps }) {
  return <>
    <FirstSection props={FirstSectionProps} />
    <SecondSection props={SecondSectionProps} />
    <ThirdSection props={ThirdSectionProps} />
    <FourthSection props={FourthSectionProps} />
  </>;
}

export default OnePage;