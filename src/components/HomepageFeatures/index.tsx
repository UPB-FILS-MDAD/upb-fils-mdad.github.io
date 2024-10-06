import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  // {
  //   title: 'Langage de programmation',
  //   Svg: require('@site/static/img/language_logo.svg').default,
  //   description: (
  //     <>
  //       Ce cours vous aidera à en apprendre davantage sur le fonctionnement des langages de programmation.

  //       Concevez et écrivez votre propre langage de programmation et votre propre compilateur.
  //     </>
  //   ),
  // },
  {
    title: 'Android',
    Svg: require('@site/static/img/android-logo.svg').default,
    description: (
      <>
        This course will teach you how to build you own Android application.
      </>
    ),
  },
  {
    title: 'Powered by Kotlin',
    Svg: require('@site/static/img/kotlin_logo.svg').default,
    description: (
      <>
        Use the knowledge you have in Java and learn Kotlin, one of the most used programming languages.
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
