import React from "react";
import styles from "./styles.module.scss";
import PropTypes from "prop-types";
import cn from "classnames";

const CardItem = ({ data, className }) => {
  return (
    <div className={cn(styles.container, "has-radius", className)}>
      <div className="level">
        <div className="level-left">
          <div className="has-padding-3">
            <img src={data.icon} alt="s" className="image is-48x48" />
          </div>
        </div>
        <div className="level-right">
          <div className={styles.titleSection}>
            <p className="title is-5">{data.title}</p>
            <div>
              <span className="tag is-dark is-rounded has-text-weight-bold">
                @ Zalando
              </span>
            </div>
          </div>
        </div>
      </div>
      <p>{data.description}</p>
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
    tags: PropTypes.array
  })
};

export default CardItem;
