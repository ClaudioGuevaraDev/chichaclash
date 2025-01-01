import autoAnimate from '@formkit/auto-animate';
import Image from 'next/image';
import { Card } from 'primereact/card';
import { useEffect, useRef } from 'react';

import styles from '@/styles/ClashTeams.module.css';

interface Props {
  teams: string[][];
}

function ClashTeams({ teams }: Props) {
  const teamsRef = useRef(null);

  useEffect(() => {
    if (teamsRef.current) {
      autoAnimate(teamsRef.current);
    }
  }, [teamsRef]);

  return (
    <div ref={teamsRef} className={styles.teams_container}>
      {teams.map((team, index) => (
        <Card key={`team-${index}`}>
          <div className={styles.champions_container}>
            {team.map((champion) => (
              <Image
                key={`${index}-${champion}`}
                src={`/champs/${champion}.webp`}
                alt={champion}
                width={64}
                height={64}
                className={styles.champion_image}
              />
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}

export default ClashTeams;
