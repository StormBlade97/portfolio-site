import React from "react";
import { graphql } from "gatsby";
import styles from "./index.module.scss";
import Layout from "../components/Layout";

export const IndexPageTemplate = ({ introduction, whoami, mainskills }) => (
  <section className="section">
    <div className="container">
      <section className="hero is-white-bis is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-8">
              <div className="column is-6">
                <div className="sub-section">
                  <p className="title is-1 has-text-weight-bold">{whoami}</p>
                  <p className="subtitle is-4 has-text-grey-light">
                    {introduction}
                  </p>
                </div>
                <div className="sub-section">
                  <p className={styles.listSkillLabel}> SPECIALTIES </p>
                  <div className="tags">
                    {mainskills.map((skill, index) => (
                      <span key={`skill#${index}`} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="sub-section">
                  <p className={styles.listSkillLabel}> RECENT PROJECTS </p>
                  <div className="tags">
                    {mainskills.map((skill, index) => (
                      <span key={`skill#${index}`} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="column is-6">
                <div className="is-fullsize">
                  <img
                    className="image is-rounded"
                    src="https://image.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
                    alt="Main illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
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
      }
    }
  }
`;
