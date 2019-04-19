import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/CardItem";

const ProjectCardPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <section className="section has-background-primary">
        <div className="container">
          <Card data={data} />
        </div>
      </section>
    );
  } else {
    return <div>Loading...</div>;
  }
};

ProjectCardPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ProjectCardPreview;
