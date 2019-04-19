import React from "react";
import PropTypes from "prop-types";
import Card from "../../components/CardItem";

const ProjectCardPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    console.log(data);
    return <Card data={data} />;
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
