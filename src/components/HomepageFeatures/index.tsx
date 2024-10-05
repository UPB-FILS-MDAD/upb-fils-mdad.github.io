import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Langage de programmation',
    Svg: require('@site/static/img/language_logo.svg').default,
    description: (
      <>
        Ce cours vous aidera à en apprendre davantage sur le fonctionnement des langages de programmation.

        Concevez et écrivez votre propre langage de programmation et votre propre compilateur.
      </>
    ),
  },
  {
    title: 'WebAssembly',
    Svg: require('@site/static/img/wasm_logo.svg').default,
    description: (
      <>
        Écrivez un compilateur pour votre langage de programmation afin de générer du code 
        pour WebAssembly (WASM), le nouveau bytecode standard de VM utilisé 
        dans chaque navigateur et exécuteur d'application portable.
      </>
    ),
  },
  {
    title: 'Powered by Kotlin',
    Svg: require('@site/static/img/kotlin_logo.svg').default,
    description: (
      <>
        Utilisez vos compétences Java et apprenez Kotlin, l'un des langages de programmation les plus utilisés.
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
