import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={styles.hero}>
      <div className={styles.content}>
        <Heading as="h1" className={styles.title}>
          {siteConfig.title}
        </Heading>

        <p className={styles.subtitle}><i>
          Активно разрабатываемая база знаний для начинающих аналитиков данных: Обучение, определения, кейсы, собеседования.
        </i></p>

        <Link className={styles.button} to="/docs/welcome">
          Начать обучение
        </Link>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="База знаний для подготовки к работе">
      <HomepageHeader />
    </Layout>
  );
}