import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
import { Container } from './styles';

  const TIMEOUT = 500
  const getTransitionStyles = {
    entering: {
      position: `absolute`,
      transform: `translateY(100vh)`,
    },
    entered: {
      transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
      transform: `translateY(0px)`,
    },
    exiting: {
      transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
      transform: `translateY(-100vh)`,
    },
  }
  const Transition = ({ children, location }) => {
    return (
      <TransitionGroup style={{ position: "relative" }}>
        <ReactTransition
          key={location}
          timeout={{ enter: TIMEOUT, exit: TIMEOUT }} >
          {status => (
            <div
              style={{
                ...getTransitionStyles[status],
              }}
            >
              {children}
            </div>
          )}
        </ReactTransition>
      </TransitionGroup>
    )
  }
  export default Transition