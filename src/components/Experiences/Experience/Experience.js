import React from "react";
import styles from "./Experience.module.css";

const Experience = ({ experience }) => {
  return (
    <>
      <h3 className={styles.title}>{experience.title}</h3>
      <p className={styles.subtitle}><b>{experience.company}</b> {experience.period}</p>
      <p className={styles.subtitle}><b>{experience.companyB}</b> {experience.periodB}</p>
      <p className={styles.description} dangerouslySetInnerHTML={{ __html: experience.description.childMarkdownRemark.html }} />
    </>
  );
};

export default Experience;
