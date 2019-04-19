import React from "react";
import PropType from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
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
    description: PropType.string,
    icon: PropType.string,
    company: PropType.string
  })
};

export default props => {
  const data = useStaticQuery(graphql`
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
              description
              icon
              company
            }
            id
          }
        }
      }
    }
  `);
  const list = data.allMarkdownRemark.edges.map(node => {
    return {
      title: node.node.frontmatter.title,
      tags: node.node.frontmatter.tags,
      description: node.node.frontmatter.description,
      icon: node.node.frontmatter.icon,
      company: node.node.frontmatter.company
    };
  });
  return <ProjectList list={list} />;
};
