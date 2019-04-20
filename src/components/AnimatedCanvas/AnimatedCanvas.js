import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.scss";

class Canvas extends React.Component {
  effect = undefined;
  componentDidMount() {
    try {
      if (window.VANTA && window.screen.width > 991) {
        // don't run effect on mobile
        console.info("Launching effect");
        this.effect = window.VANTA.TRUNK({
          el: "#animatedCanvas",
          color: "#A3A3A3",
          backgroundColor: 0xffffff
        });
      }
    } catch (error) {
      console.error(error);
    }
  }
  componentWillUnmount() {
    try {
      if (this.effect) {
        this.effect.destroy();
      }
    } catch {}
  }
  render() {
    return (
      <div
        className={`${this.props.className || ""} ${styles.canvasOverride}`}
        id="animatedCanvas"
      >
        {this.props.children}
      </div>
    );
  }
}

Canvas.propTypes = {
  className: PropTypes.string
};

export default Canvas;
