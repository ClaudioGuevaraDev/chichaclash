import { useState } from 'react';

import ClashForm from '@/components/home/ClashForm';
import { ScreenEnum } from '@/enums/clash';
import styles from '@/styles/Home.module.css';

function Home() {
  const [screen, setScreen] = useState(ScreenEnum.FORM);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ChichaClash</h1>

      <p className={styles.description}>
        Armar y preparar tu equipo de Clash nunca fue tan fácil con la ayuda de
        la Inteligencia Artificial
      </p>

      <div
        className={styles.clash_container}
        style={{
          justifyContent:
            screen === ScreenEnum.FORM ? 'center' : 'space-between',
        }}
      >
        <ClashForm setScreen={setScreen} />
      </div>
    </div>
  );
}

export default Home;
