// 📁 src/pages/index.tsx
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
import styles from './index.module.css';

function KemetHero() {
  return (
    <section className={styles.hero}>
      {/* Main Header */}
      <div className={styles.mainHeader}>
        {/* القسم الأول - مقسم أفقياً */}
        <div className={styles.headerTopSection}>
          {/* قسم المحتوى النصي والأزرار */}
          <div className={styles.contentSection}>
            <div className={styles.logoContainer}>
              <img
                src="/img/website-header-logo.png"
                alt="Kemet Logo"
                id="DesktopLogo"
                className={styles.logo + " DesktopLogo"}
              />
              <img
                src="/img/website-header-logo-with-cat-2.png"
                alt="Kemet Logo"
                id="MobileLogo"
                className={styles.logo + " MobileLogo"}
              />
            </div>

            {/* أزرار التنقل الثانوية */}
            <div className={styles.secondNav}>
              <Link to="/docs" className="head_button main_button">
                <Translate id="homepage.getStarted">getStarted</Translate>
              </Link>
              <a href="https://github.com/kemet-lang/.github/blob/main/profile/roadmap/MVP.md" target="_blank" rel="noopener noreferrer" className="head_button">
                <Translate id="homepage.why">why</Translate>
              </a>
              <a href="https://github.com/kemet-lang/.github/blob/main/profile/roadmap/MVP.md" target="_blank" rel="noopener noreferrer" className="head_button">
                <Translate id="homepage.how">how</Translate>
              </a>
              <a href="https://github.com/maysara-elshewehy" target="_blank" rel="noopener noreferrer" className="head_button">
                <Translate id="homepage.who">who</Translate>
              </a>
            </div>

            {/* قسم المُلاحظات */}
            {
              <div id="kemetUnderDevelopmentContainer">
                <div id="kemetUnderDevelopmentText">
                  <Translate id="homepage.kemetUnderDevelopment">kemetUnderDevelopment</Translate>
                </div>
                <div id="kemetUnderDevelopmentDate">17 oct 2025</div>
              </div>
            }
          </div>

          {/* قسم صورة القط */}
          <div className={styles.imageSection}>
            <div className={styles.catImageContainer}>
              <img
                src="/img/kemet-cat/king.png"
                alt="Kemet Cat"
                className={styles.catImage}
              />
            </div>
          </div>
        </div>

        {/* القسم الثاني */}
        <div className={styles.headerBottomSection}>

        </div>
      </div>

      {/* Main Body - فارغ حالياً */}
      <div className={styles.mainBody}>

      </div>
    </section>
  );
}


export default function Home(): ReactNode {
  return (
    <Layout
      title={translate({
        id: 'homepage.title',
        message: '',
        description: 'The homepage title'
      })}
      description={translate({
        id: 'homepage.description',
        message: '',
        description: 'The homepage description'
      })}
    >
      <KemetHero />

      {/* Main Body Content */}
      <main>
        {/* Add your main content sections here */}
      </main>
    </Layout>
  );
}