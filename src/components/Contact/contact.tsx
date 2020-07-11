import React from "react";
import { useSpring, animated } from "react-spring";
import { Container } from "../../styled-comps/containers";

import "./contact.scss";
import { NewTheme } from "../../themes";

const Contact = () => {
  const subProps = useSpring({
    transform: "translateX(0%)",
    opacity: 1,
    from: { transform: "translateX(-100%)", opacity: 0 },
    delay: 100,
  });

  return (
    <Container bgColor={NewTheme.darkBlue}>
      <animated.div
        className="sub-contact card"
        style={{
          ...subProps,
          backgroundColor: NewTheme.shadeOne,
        }}
      >
        <span>Marc Dwyer</span>
        <div className="contact-info">
          <div className="email">
            <i
              className="fa fa-envelope"
              style={{ color: NewTheme.btnColor }}
            />
            <a href="mailto:marcdwyer1738@gmail.com">marcdwyer1738@gmail.com</a>
          </div>
        </div>
      </animated.div>
    </Container>
  );
};

export default Contact;
