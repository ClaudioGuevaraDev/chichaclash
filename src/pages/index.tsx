import { useState } from 'react';

import ClashForm from '@/components/home/ClashForm';
import ClashTeams from '@/components/home/ClashTeams';
import styles from '@/styles/Home.module.css';

function Home() {
  const [teams, setTeams] = useState<string[][]>([]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ChichaClash</h1>

      <p className={styles.description}>
        Preparar tu equipo para el Clash nunca fue tan fácil con la ayuda de la
        Inteligencia Artificial
      </p>

      <ClashForm setTeams={setTeams} />

      <ClashTeams teams={teams} />
    </div>
  );
}

export default Home;
