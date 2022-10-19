
import PageContainer from "../layout/PageContainer.jsx";
import Heading from "../atoms/Heading.jsx";
import Logo from "../atoms/Logo.jsx";
import Paragraph from "../atoms/Paragraph.jsx";
import Relocation from "./Relocation.jsx";

import styles from './Hero.module.css'

const Hero = () => {
  return (
    <>
      <header>
        <PageContainer fullHeight>
          <div className={styles.container}>
            <div className={styles.wrapper}>
              <div className={styles.text}>
                <div className={styles.logo}>
                  <Logo />
                </div>
                <Heading size="sm">Hello,</Heading>
                <div className={styles.fullname}>
                  <Heading>
                    I'm <strong className={styles.shadow}>Guillermo</strong>
                  </Heading>
                  <Heading>Rodas</Heading>
                </div>
                <Paragraph size="xl">
                  I help developers to improve their skills while creating
                  quality products. 
                </Paragraph>
                <div className={styles.relocationContainer}>
                  <Relocation />
                </div>
              </div>
            </div>
            <img className={styles.photo} src="/images/guillermo-rodas.png" />
          </div>
        </PageContainer>
      </header>
    </>
  );
};

export default Hero;
