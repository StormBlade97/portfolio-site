import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Roll from "../components/Roll";
import AnimatedCanvas from "../components/AnimatedCanvas";
import styles from "./styles.module.scss";

export const IndexPageTemplate = ({
  introduction,
  whoami,
  mainskills,
  title
}) => (
  <div>
    <div className="section is-position-relative is-large">
      <div className="columns is-overlay" style={{ zIndex: -1 }}>
        <div className="column is-4 is-offset-6">
          <AnimatedCanvas />
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="sub-section">
              <p className="subtitle is-5 has-text-grey-dark">
                Hello there, It's great to see you!
              </p>
            </div>
            <div className="sub-section has-text-grey-dark">
              <p className="has-text-weight-medium is-size-4">
                I'm Thanh Nguyen, and I'm a
              </p>
              <p className="title is-1 is-marginless has-text-black-bis">
                Full Stack Developer
              </p>
              <p className="title is-1">
                and an <span className="has-text-primary">UI Designer</span>
              </p>
              <p>I craft nice web applications for people and businesses.</p>
              <p>And i'm pretty good at</p>
            </div>
            <div className="sub-section">
              <div className={styles.skillPills}>
                {mainskills.map(skill => (
                  <span key={skill} className="tag is-medium is-rounded">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="section has-background-primary">
      <div className="container">
        <p className="title is-4">Selected work</p>
        <Roll />
      </div>
    </div>
  </div>
);

IndexPageTemplate.propTypes = {};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        whoami={frontmatter.whoami}
        introduction={frontmatter.introduction}
        mainskills={frontmatter.mainskills}
        title={frontmatter.title}
      />
    </Layout>
  );
};

IndexPage.propTypes = {};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        whoami
        introduction
        mainskills
        title
      }
    }
  }
`;
