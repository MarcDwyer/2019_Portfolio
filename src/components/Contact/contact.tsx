import React from "react";
import { useSpring, animated } from "react-spring";
import { Container } from "../../styled-comps/containers";
import { myColors } from "../../styled-comps/global-styles";

import "./contact.scss";

const Contact = () => {
  const subProps = useSpring({
    transform: "translateX(0%)",
    opacity: 1,
    from: { transform: "translateX(-100%)", opacity: 0 },
    delay: 100
  });

  return (
    <Container bgColor={myColors.lightGrey}>
      <animated.div className="sub-contact card" style={subProps}>
        <span>Marc Dwyer</span>
        <div className="contact-info">
          <div className="email">
            <i className="fa fa-envelope" />
            <a href="mailto:marcdwyer1738@gmail.com">marcdwyer1738@gmail.com</a>
          </div>
        </div>
      </animated.div>
    </Container>
  );
};

export default Contact;
