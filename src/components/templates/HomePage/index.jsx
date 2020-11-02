import React, { useState } from 'react';
import { FirstSection, Technologies } from '../../organisms';
import { Container } from './styles';

function HomePage() {
  const [step, setStep] = useState(0);
  const [stepForward, setStepForward] = useState(true);

  const goPrevious = () => {
    if(step > 0) {
      setStep(step - 1);
      setStepForward(false);
    }
  }
  
  const goNext = () => {
    if(step < 3) {
      setStep(step + 1);
      setStepForward(true);
    }
  }

  const controllStep = () => {
    const animation = stepForward ? 'slideDown' : 'slideUp';

    switch (step) {
      case 0:
        return <FirstSection animation={animation} />;
      case 1:
        return <Technologies animation={animation} />;
      case 2:
        return <Technologies animation={animation} />;
      default:
        break;
    }
  }

  return <Container>
    {controllStep()}
    <div className="controll-btn-div">
    <button className="round-btn" onClick={() => goPrevious()}> Previous </button>
    <button className="round-btn" onClick={() => goNext()}> Next </button>
    </div>
  </Container>
}

export default HomePage;