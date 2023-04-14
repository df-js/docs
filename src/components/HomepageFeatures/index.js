import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import TextOnSvg from '../TextOnSvg';
import BrowserOnly from '@docusaurus/BrowserOnly';

const FeatureList = [
  {
    title: 'Easy to Use',
    num: "1",

    description: (
      <>
        df.js is always using enums and other easy values so you have to use the documentation as little as possible.
      </>
    ),
  },
  {
    title: 'Same Coding',
    num: "2",

    description: (
      <>
        df.js is built with the same exact blocks and coding system as regular coding, giving you the same DiamondFire coding experience you know and love.
      </>
    ),
  },
  {
    title: 'More Efficent',
    num: "3",

    description: (
      <>
        Line coding is a lot more efficent, as its faster to type code than it is to place blocks, which will make it faster to make games.
      </>
    ),
  },
];

function Feature({num, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <BrowserOnly>
          {() => { // It took me so long to finally fix the issue, a day and a half.
            return <TextOnSvg num={num}/>
          }}
        </BrowserOnly>
        
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
