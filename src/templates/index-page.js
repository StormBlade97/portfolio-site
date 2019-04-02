import React from "react";
import { graphql } from "gatsby";
import styles from "./index.module.scss";
import Layout from "../components/Layout";
import ProjectRoll from "../components/ProjectRoll";

export const IndexPageTemplate = ({ introduction, whoami, mainskills }) => (
  <div>
    <section className="section is-medium">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <div className="sub-section">
              <p className="title is-1 is-primary has-text-weight-bold">
                {whoami}
              </p>
              <p className="subtitle is-4 has-text-grey-light">
                {introduction}
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                blandit semper cursus. Ut mattis ipsum nec lobortis convallis.
                Pellentesque ultricies, nibh sed consectetur semper, diam turpis
                egestas magna, ac semper erat libero id mauris. In felis diam,
                viverra at nisi nec, pellentesque euismod magna. In in porttitor
                nisl, eu pharetra neque. Nulla facilisi. Praesent tempor vel
                dolor a tristique. Phasellus ut odio neque. Etiam dignissim
                facilisis nisl nec sodales.
              </p>
            </div>
            <div className="sub-section">
              <p className={styles.listSkillLabel}> What I'm good at </p>
              <div className="tags">
                {mainskills.map((skill, index) => (
                  <span key={`skill#${index}`} className="tag is-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="column is-6">ss</div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div>
          <p className={styles.listSkillLabel}>Recent project</p>
          <ProjectRoll />
        </div>
        <div className="sub-section">
          <p className={styles.listSkillLabel}>Check out my blog</p>
          <ProjectRoll />
        </div>
      </div>
    </section>
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
