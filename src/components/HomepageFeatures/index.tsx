import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Structured documentation of system and software architecture',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
          swark lets you define how your overall system and software architecture documentation looks like.
          Define it once, reuse it for your other environments, products and projects.
      </>
    ),
  },
  {
    title: 'Pull in data from your CMDB, Jira and other sources',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
          Documentation quickly becomes outdated. swark allows you to link the static part of the documentation to your current environment.
      </>
    ),
  },
  {
    title: 'A documentation tool for practical architects, software and DevOps engineers',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
          swark is made by and for engine room people and not ivory tower owners.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
