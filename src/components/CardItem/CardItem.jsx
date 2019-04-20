import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";
import { HTMLContent } from "../Content";
import format from "date-fns/format";
import parse from "date-fns/parse";

const getProjectTime = (startTime, endTime) => {
  let startTimeString, endTimeString;
  const FORMAT = "MMM YYYY";
  if (startTime) {
    const parsedStartTime = parse(startTime);
    startTimeString = format(parsedStartTime, FORMAT);
  } else {
    startTimeString = "Unknown";
  }
  if (endTime) {
    const parsedEndTime = parse(endTime);
    endTimeString = format(parsedEndTime, FORMAT);
  } else {
    endTimeString = "Present";
  }
  return {
    startTimeString,
    endTimeString
  };
};
const CardItem = ({ data, className }) => {
  const { startTimeString, endTimeString } = getProjectTime(
    data.projectTime.startTime,
    data.projectTime.endTime
  );
  return (
    <div className={cn(styles.container, "has-radius", className)}>
      <div className="level">
        <div className={cn("level-left", styles.hasFlexShrink)}>
          <div className="level-item">
            <img
              src={data.icon}
              alt="project-icon"
              className="image has-shadow has-corner-rounded is-48x48"
            />
          </div>
          <div className={cn("level-item", styles.hasFlexShrink)}>
            <div className={styles.titleContainer}>
              <p className="title is-5">{data.title}</p>
              <div>
                {data.company && (
                  <span className={styles.company}>{data.company}</span>
                )}
                <span className="has-text-weight-light is-size-6">
                  {startTimeString} - {endTimeString}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HTMLContent className="content" content={data.content} />
      <div className={styles.tagSection}>
        {data.tags && data.tags.length > 0 && (
          <p className="tags has-text-weight-medium">
            {data.tags.map(tag => (
              <span
                key={tag}
                className="tag is-rounded has-text-weight-semibold"
              >
                {tag}
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  );
};

CardItem.propTypes = {
  data: PropTypes.shape({
    thumbnail: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    tags: PropTypes.array,
    company: PropTypes.string
  })
};

export default CardItem;
