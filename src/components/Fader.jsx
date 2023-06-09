import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import "../../src/App.css";

const Fader = ({ component }) => {
  const [fadeProp, setFadeProp] = useState({
    fade: "fade-in",
  });

  useEffect(() => {
    const timeout = setInterval(() => {
      if (fadeProp.fade == "fade-in") {
        setFadeProp({
          fade: "fade-out",
        });
      } else {
        setFadeProp({
          fade: "fade-in",
        });
      }
    }, 5000);
    return () => clearInterval(timeout);
  }, [fadeProp]);
  return <div className={fadeProp.fade}>{component()}</div>;
};

Fader.defaultProps = {
  component: () => {},
};

Fader.propTypes = {
  component: PropTypes.func,
};

export default Fader;
