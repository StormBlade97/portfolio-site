import React from "react";

export default props => (
  <footer className="footer has-background-primary">
    <div className="container has-text-centered">
      <div className="columns is-centered">
        <div className="column is-6">
          <p className="title is-6">
            What do you think about this site. Give me some feedback! 🙏
          </p>
          <div className="field is-grouped">
            <div className="control is-expanded">
              <input
                type="text"
                placeholder="😍, for example"
                className="input has-corner-rounded is-primary"
              />
            </div>
            <div className="control">
              <button className="button is-rounded has-corner is-dark">
                <span>Send</span>
                <span className="icon">
                  <i className="bx bxs-send" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section is-small">
        <p className="title is-6">Made by me @ Helsinki, Finland</p>
        <a href="https://bulma.io">
          <img
            src="https://bulma.io/images/made-with-bulma--dark.png"
            alt="Made with Bulma"
            width="163"
            height="31"
          />
        </a>
      </div>
    </div>
  </footer>
);
