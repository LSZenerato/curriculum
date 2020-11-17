import { TransitionGroup, Transition as ReactTransition } from "react-transition-group";
import { Container } from './styles';

const Transition = ({ children, location }) => {
  const TIMEOUT = 900
  const getTransitionStyles = {
    entering: {
      position: `absolute`,
      opacity: 0,
      //transform: `translateY(100vh)`
    },
    entered: {
      transition: `opacity ${TIMEOUT}ms ease-in-out`,
      // transition: `transform ${TIMEOUT}ms ease-in-out`,
      opacity: 1,
      //transform: `translateY(0px)`
    },
    exiting: {
      transition: `opacity ${TIMEOUT}ms ease-in-out`,
      opacity: 0,
      //transform: `translateY(-100vh)`
    },
  }

  return (
    <TransitionGroup style={{ position: "relative", width: "100%" }}>
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