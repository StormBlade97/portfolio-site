import React from "react";
import { Link } from "gatsby";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: ""
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active"
            })
          : this.setState({
              navBarActiveClass: ""
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-fixed-top has-shadow"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <h5 className="title is-3 has-text-weight-bold">TN</h5>
            </Link>
            <a
              href="https://github.com/stormblade97"
              target="_blank"
              rel="noopener noreferrer"
              className="is-hidden-desktop navbar-item"
            >
              <span className="icon is-size-4">
                <i className="bx bxl-github" />
              </span>
            </a>

            <a
              className="is-hidden-desktop navbar-item"
              href="mailto:nguyendaithanh0612@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon is-size-4 has-text-danger">
                <i className="bx bxs-envelope" />
              </span>
            </a>
            <a
              className="is-hidden-desktop navbar-item"
              href="https://www.linkedin.com/in/thanhng-97"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon is-size-4 has-text-info">
                <i className="bx bxl-linkedin" />
              </span>
            </a>
            <a
              className="is-hidden-desktop navbar-item has-text-link"
              href="https://twitter.com/CodesDog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon is-size-4">
                <i className="bx bxl-twitter" />
              </span>
            </a>
            <div className="is-hidden-desktop navbar-item">
              <button className="button is-rounded is-primary has-text-black">
                <span>Get my CV</span>
              </button>
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end has-text-centered">
              <div className="navbar-item">
                <div className="buttons">
                  <a
                    href="https://github.com/stormblade97"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button is-rounded is-light"
                  >
                    <span className="icon is-size-4">
                      <i className="bx bxl-github" />
                    </span>
                  </a>

                  <a
                    className="button is-rounded is-light"
                    href="mailto:nguyendaithanh0612@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-size-4 has-text-danger">
                      <i className="bx bxs-envelope" />
                    </span>
                  </a>
                  <a
                    className="button is-rounded is-light has-text-info"
                    href="https://www.linkedin.com/in/thanhng-97"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-size-4">
                      <i className="bx bxl-linkedin" />
                    </span>
                  </a>
                  <a
                    className="button is-rounded is-light"
                    href="https://twitter.com/CodesDog"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="icon is-size-4 has-text-link">
                      <i className="bx bxl-twitter" />
                    </span>
                  </a>
                  <a className="button is-primary is-rounded has-text-weight-bold has-text-black">
                    <span>Get my CV</span>
                    <span className="icon is-size-4">
                      <i className="bx bxs-download" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
