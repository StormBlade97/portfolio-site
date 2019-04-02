import React from "react";
import PropType from "prop-types";
import styles from "./project-roll.module.scss";
import { useStaticQuery, graphql } from "gatsby";
export const ProjectRoll = ({ list }) => {
  return (
    <div className={styles.root}>
      {list.map(el => (
        <div className={styles.projectItem}>
          <img className="image" src={el.thumbnail} alt="" />
          <span className="is-size-6 has-text-weight-semibold">{el.title}</span>
        </div>
      ))}
      <span className={styles.padder} />
    </div>
  );
};

ProjectRoll.propsType = {
  list: PropType.arrayOf({
    title: PropType.string,
    thumbnail: PropType.string,
    id: PropType.string
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
              thumbnail
              title
            }
            id
          }
        }
      }
    }
  `);
  // const list = data.allMarkdownRemark.edges.map(node => {
  //   return {
  //     title: node.node.frontmatter.title,
  //     thumbnail: node.node.frontmatter.thumbnail
  //   };
  // });
  const list = [
    {
      id: "1",
      title: "Chat application",
      thumbnail:
        "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: "2",
      title: "Dating application",
      thumbnail: "https://ichef.bbci.co.uk/images/ic/720x405/p0517py6.jpg"
    },
    {
      id: "3",
      title: "Location application",
      thumbnail:
        "https://images.unsplash.com/photo-1532386236358-a33d8a9434e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
    },
    {
      id: "4",
      thumbnail:
        "https://www.rd.com/wp-content/uploads/2016/04/01-cat-wants-to-tell-you-laptop.jpg",
      title: "Funny application"
    },
    {
      id: "5",
      title: "Medical application",
      thumbnail:
        "https://fsmedia.imgix.net/3a/1e/07/b1/0f59/4aa6/96fa/78883f614a04/cat.jpeg?rect=117%2C0%2C5014%2C3758&auto=format%2Ccompress&w=800"
    }
  ];
  return <ProjectRoll list={list} />;
};
