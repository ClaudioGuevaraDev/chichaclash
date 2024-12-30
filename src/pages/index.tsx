import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { MultiSelect } from 'primereact/multiselect';

import { champs } from '@/utils/champs';

const ROLES = ['TOP', 'JUNGLE', 'MID', 'ADC', 'SUPPORT'];

function Home() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Card
        style={{
          width: '100%',
          maxWidth: '24rem',
        }}
      >
        {ROLES.map((role) => (
          <div key={role}>
            <MultiSelect
              placeholder={role}
              options={champs}
              itemTemplate={(option) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                  }}
                >
                  <Avatar
                    shape='circle'
                    image={`/champs/${option.label.toLowerCase()}.webp`}
                  />
                  <p>{option.label}</p>
                </div>
              )}
              display='chip'
              filter
              style={{ width: '100%', marginTop: role !== 'TOP' ? '1rem' : 0 }}
              virtualScrollerOptions={{ itemSize: 50 }}
            />
          </div>
        ))}

        <Button
          label='CLASH'
          className='mt-4'
          style={{ marginTop: '1.5rem', width: '100%' }}
          size='small'
        />
      </Card>
    </div>
  );
}

export default Home;
