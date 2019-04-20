import React from "react";
import PropType from "prop-types";
import { graphql, StaticQuery } from "gatsby";
import styles from "./styles.module.scss";
import Card from "../CardItem";

function bucketize(inputArr, bucketSize) {
  const buckets = new Array(bucketSize).fill(0).map(_ => []);

  inputArr.forEach((item, idx) => {
    buckets[idx % bucketSize].push(item);
  });
  return buckets;
}

export const ProjectList = ({ list }) => {
  return (
    <div className="columns">
      {bucketize(list, 3).map((column, idx) => (
        <div className="column" key={idx}>
          {column.map((el, cardIdx) => (
            <Card className={styles.card} key={cardIdx} data={el} />
          ))}
        </div>
      ))}
    </div>
  );
};

ProjectList.propsType = {
  list: PropType.arrayOf({
    title: PropType.string,
    thumbnail: PropType.string,
    id: PropType.string,
    icon: PropType.string,
    company: PropType.string,
    content: PropType.element,
    projectTime: PropType.shape({
      startTime: PropType.string,
      endTime: PropType.string
    })
  })
};

export default props => (
  <StaticQuery
    query={graphql`
      {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "project-post" } } }
        ) {
          totalCount
          edges {
            node {
              frontmatter {
                title
                tags
                icon
                company
                projectStartDate
                projectEndDate
              }
              id
              html
            }
          }
        }
      }
    `}
    render={data => {
      const list = data.allMarkdownRemark.edges.map(node => {
        return {
          title: node.node.frontmatter.title,
          tags: node.node.frontmatter.tags,
          icon: node.node.frontmatter.icon,
          company: node.node.frontmatter.company,
          content: node.node.html,
          projectTime: {
            startTime: node.node.frontmatter.projectStartDate,
            endTime: node.node.frontmatter.projectEndDate
          }
        };
      });
      return <ProjectList list={list} />;
    }}
  />
);
