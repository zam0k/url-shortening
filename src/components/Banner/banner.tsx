import React from 'react'

import styles from './banner.module.scss';
import bannerImg from '../../assets/illustration-working.svg';

function Banner() {
  return (
    <section className={styles.container}>
        <div>
            <h1>More than just <br/> shorter links</h1>
            <p>Build your brand&lsquo;s recognition and get detailed <br/> insights on how your links are performing.</p>
            <button type="button">Get Started</button>
        </div>
        <img className="" src={bannerImg} alt=""/>
    </section>
  )
}

export default Banner;