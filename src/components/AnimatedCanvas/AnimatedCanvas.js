import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Canvas = props => {
  React.useEffect(() => {
    let effect;
    try {
      if (window.VANTA) {
        console.info("Launching effect");
        effect = window.VANTA.TRUNK({
          el: "#animatedCanvas",
          color: "#A3A3A3",
          backgroundColor: 0xffffff
        });
      }

      return () => {
        try {
          if (effect) {
            effect.destroy();
          }
        } catch {}
      };
    } catch (error) {
      console.error(error);
      return;
    }
  }, []);

  return (
    <div
      className={`${props.className} ${styles.canvasOverride}`}
      id="animatedCanvas"
    >
      {props.children}
    </div>
  );
};

Canvas.propTypes = {
  className: PropTypes.string
};

export default Canvas;
