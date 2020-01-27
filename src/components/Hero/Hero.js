import React from 'react'
import Img from 'gatsby-image'

import styles from './Hero.css'

export default ({ data }) => (
  <div className={styles.hero}>
    <div className="wrapper">
      <div className={styles.imgContainer}>
        <Img
          className={styles.heroImage}
          alt={data.name}
          fluid={data.heroImage.fluid}
          style={{ margin: '1rem', maxHeight: 'calc(50vh - 4rem)' }}
          imgStyle={{ objectFit: 'contain' }}
        />
      </div>
      <div className={styles.heroDetails}>
        <h3 className={styles.heroHeadline}>{data.name}</h3>
        <p className={styles.heroTitle}>{data.title}</p>
        <p>{data.shortBio.shortBio}</p>
      </div>
    </div>
  </div>
)
