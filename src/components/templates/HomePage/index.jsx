import React, { useState } from 'react';
import { FirstSection, Technologies } from '../../organisms';
import { Container } from './styles';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function HomePage() {
  const [step, setStep] = useState(0);

  return <Container>
    <CSSTransition in={step === 0} timeout={500} classNames="slide" unmountOnExit>
      <FirstSection />
    </CSSTransition>
    <CSSTransition in={step === 1} timeout={500} classNames="slide" unmountOnExit>
      <Technologies />
    </CSSTransition>
    <CSSTransition in={step === 2} timeout={500} classNames="slide" unmountOnExit>
      <FirstSection />
    </CSSTransition>
    <CSSTransition in={step === 3} timeout={500} classNames="slide" unmountOnExit>
      <Technologies />
    </CSSTransition>
    <div className="controll-btn-div">
      <button className="round-btn" type="button" onClick={() => setStep(step - 1)}>
        Previous
      </button>
      <button className="round-btn" type="button" onClick={() => setStep(step + 1)}>
        Next
      </button>
    </div>
  </Container>
}

export default HomePage;