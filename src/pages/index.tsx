import autoanimate from '@formkit/auto-animate';
import Image from 'next/image';
import { Card } from 'primereact/card';
import { useEffect, useRef, useState } from 'react';

import ClashForm from '@/components/home/ClashForm';
import styles from '@/styles/Home.module.css';

function Home() {
  const [teams, setTeams] = useState<string[][]>([]);

  const teamsRef = useRef(null);

  useEffect(() => {
    if (teamsRef.current) {
      autoanimate(teamsRef.current);
    }
  }, [teamsRef]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>ChichaClash</h1>

      <p className={styles.description}>
        Preparar tu equipo para el Clash nunca fue tan fácil con la ayuda de la
        Inteligencia Artificial
      </p>

      <div className={styles.clash_container}>
        <ClashForm setTeams={setTeams} />
      </div>

      <div ref={teamsRef} className={styles.teams_container}>
        {teams.map((team, index) => (
          <Card key={`team-${index}`}>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {team.map((champion) => (
                <Image
                  key={`${index}-${champion}`}
                  src={`/champs/${champion}.webp`}
                  alt='Twisted Fate'
                  width={64}
                  height={64}
                  style={{ borderRadius: '6px' }}
                />
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
