import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Roll from "../components/Roll";
import AnimatedCanvas from "../components/AnimatedCanvas";
import styles from "./styles.module.scss";

export const IndexPageTemplate = ({
  introduction,
  greetingLine,
  whoami,
  mainskills,
  image
}) => (
  <div>
    <div className="section is-position-relative is-large is-hidden-touch">
      <div className="columns is-overlay" style={{ zIndex: -1 }}>
        <div className="column is-4-fullhd is-6 is-offset-6">
          <AnimatedCanvas />
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="sub-section">
              <p className="subtitle is-5 has-text-grey-dark">{greetingLine}</p>
            </div>
            <div className="sub-section has-text-grey-dark">
              <p className="has-text-weight-medium is-size-4">{whoami}</p>
              <p className="title is-1 is-marginless has-text-black-bis">
                Full Stack Developer
              </p>
              <p className="title is-1">
                and a <span className="has-text-primary">UI Designer</span>
              </p>
              <p>{introduction}</p>
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
    <div
      className="section is-hidden-desktop"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `45vw -50vh`
      }}
    >
      <div className="container">
        <div className="sub-section">
          <p className="subtitle is-5 has-text-grey-dark">{greetingLine}</p>
        </div>
        <div className="sub-section has-text-grey-dark">
          <p className="has-text-weight-medium is-size-4">{whoami}</p>
          <p className="title is-1 is-marginless has-text-black-bis">
            Full Stack Developer
          </p>
          <p className="title is-1">
            & <span className="has-text-primary">UI Designer</span>
          </p>
          <p>{introduction}</p>
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
        greetingLine={frontmatter.greetingLine}
        image={frontmatter.image}
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
        greetingLine
        image {
          childImageSharp {
            fluid(maxWidth: 990, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
