import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import HomePage from './HomePage';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';


function Container({ location }) {
  return (
    <Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 400, exit: 400 }}
          classNames="switch"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/" component={HomePage} />
              <Route path="/work" component={WorkPage} />
              <Route path="/about" component={AboutPage} />
              <Route component={HomePage} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
  section.switch-enter {
    left: 100%;
  }
  section.switch-enter.switch-enter-active {
    left: 0;
    transition: all 400ms linear;
  }
  section.switch-exit {
    left: 0;
  }
  section.switch-exit.switch-exit-active {
    left: -100%;
    transition: all 400ms linear;
  }
`;
export default withRouter(Container);
