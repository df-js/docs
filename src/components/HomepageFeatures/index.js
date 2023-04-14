import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import TextOnSvg from '../../util/index';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        df.js is always using enums and other easy values so you have to use the documentation as little as possible.
      </>
    ),
    unc: "!!", num: 1
  },
  {
    title: 'Same Coding',
    Svg: require('@site/static/img/prompic1.svg').default,
    description: (
      <>
        df.js is built with the same exact blocks and coding system as regular coding, giving you the same DiamondFire coding experience you know and love.
      </>
    ),
    unc: '<3', num: 2
  },
  {
    title: 'More Efficent',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Line coding is a lot more efficent, as its faster to type code than it is to place blocks, which will make it faster to make games.
      </>
    ),
    unc: "_>", num: 1
  },
];

function Feature({unc, title, description, num}) {
  const item = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
  if (num == 1) {
    num = "#6852d2"
  } else {
    num = "#4222e2"
  }
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      <TextOnSvg
        className="text-on-svg"
        text={unc}
        width={200}
        height={200}
        textWidth={0.8}
        fontSize={48}
        fontWeight={500}
        fontFamily="DM Mono, Open Sans, Helvetica, Arial, sans-serif"
        backgroundColor={num}
        color="#FFFFFF"
      />

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
