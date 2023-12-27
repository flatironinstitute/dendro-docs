import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { ComponentProps, ComponentType } from 'react';

type FeatureItem = {
  title: string;
  imageUrl: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'DANDI Integration',
    imageUrl: require('@site/static/img/dandi-logo.png').default,
    description: (
      <>
        Dendro is integrated with <a href="https://dandiarchive.org/" target='_blank'>DANDI Archive</a>. Upload your data to DANDI and process it with Dendro.
      </>
    ),
  },
  {
    title: 'Spike Sorting',
    imageUrl: require('@site/static/img/spike-sorting.png').default,
    description: (
      <>
        Dendro simplifies the spike sorting process. Import electrophysiology datasets from DANDI and select from a variety of spike sorting algorithms available in Dendro to spike sort your data.
      </>
    ),
  },
  {
    title: 'Customizable Processing Apps',
    imageUrl: require('@site/static/img/dendro-logo.png').default,
    description: (
      <>
        Dendro supports custom processing apps. Tailor your workflows to your specific research needs and algorithms.
      </>
    ),
  },
];

function Feature({title, imageUrl, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} role="img" src={imageUrl} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
