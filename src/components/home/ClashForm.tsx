import { Avatar } from 'primereact/avatar';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { FloatLabel } from 'primereact/floatlabel';
import { MultiSelect } from 'primereact/multiselect';
import { FormEvent, useState } from 'react';

import { ModesEnum, RolesEnum, ScreenEnum } from '@/enums/clash';
import styles from '@/styles/ClashForm.module.css';
import { champs } from '@/utils/champs';

interface Props {
  setScreen: (value: ScreenEnum) => void;
}

function ClashForm({ setScreen }: Props) {
  const [selectedMode, setSelectedMode] = useState(ModesEnum.BATIDORA);
  const [selectedChamps, setSelectedChamps] = useState({
    batidora: null,
    rol: {
      top: null,
      jungle: null,
      mid: null,
      adc: null,
      support: null,
    },
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    console.log(selectedChamps);

    setTimeout(() => {
      setLoading(false);
      setScreen(ScreenEnum.CLASH);
    }, 2000);
  };

  return (
    <Card className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_container}>
          <FloatLabel>
            <Dropdown
              placeholder='Modo'
              options={Object.values(ModesEnum)}
              value={selectedMode}
              onChange={(e) => setSelectedMode(e.value)}
              inputId='mode'
            />
            <label htmlFor='mode' className={styles.mode_label}>
              Modo
            </label>
          </FloatLabel>
        </div>

        {selectedMode === ModesEnum.BATIDORA && (
          <MultiSelect
            options={champs}
            placeholder='Selecciona tus campeones'
            value={selectedChamps.batidora}
            onChange={(e) =>
              setSelectedChamps({
                ...selectedChamps,
                batidora: e.value,
              })
            }
            itemTemplate={(option) => (
              <div className={styles.item_template}>
                <Avatar
                  shape='circle'
                  image={`/champs/${option.label.toLowerCase()}.webp`}
                />
                <p>{option.label}</p>
              </div>
            )}
            display='chip'
            filter
            className={styles.multi_select}
            virtualScrollerOptions={{ itemSize: 50 }}
          />
        )}

        {selectedMode === ModesEnum.POR_ROL &&
          Object.values(RolesEnum).map((role) => (
            <div key={role}>
              <MultiSelect
                options={champs}
                placeholder={role}
                value={
                  role === RolesEnum.TOP
                    ? selectedChamps.rol.top
                    : role === RolesEnum.JUNGLE
                      ? selectedChamps.rol.jungle
                      : role === RolesEnum.MID
                        ? selectedChamps.rol.mid
                        : role === RolesEnum.ADC
                          ? selectedChamps.rol.adc
                          : selectedChamps.rol.support
                }
                onChange={(e) => {
                  if (role === RolesEnum.TOP) {
                    setSelectedChamps({
                      ...selectedChamps,
                      rol: {
                        ...selectedChamps.rol,
                        top: e.value,
                      },
                    });
                  } else if (role === RolesEnum.JUNGLE) {
                    setSelectedChamps({
                      ...selectedChamps,
                      rol: {
                        ...selectedChamps.rol,
                        jungle: e.value,
                      },
                    });
                  } else if (role === RolesEnum.MID) {
                    setSelectedChamps({
                      ...selectedChamps,
                      rol: {
                        ...selectedChamps.rol,
                        mid: e.value,
                      },
                    });
                  } else if (role === RolesEnum.ADC) {
                    setSelectedChamps({
                      ...selectedChamps,
                      rol: {
                        ...selectedChamps.rol,
                        adc: e.value,
                      },
                    });
                  } else if (role === RolesEnum.SUPPORT) {
                    setSelectedChamps({
                      ...selectedChamps,
                      rol: {
                        ...selectedChamps.rol,
                        support: e.value,
                      },
                    });
                  }
                }}
                itemTemplate={(option) => (
                  <div className={styles.item_template}>
                    <Avatar
                      shape='circle'
                      image={`/champs/${option.label.toLowerCase()}.webp`}
                    />
                    <p>{option.label}</p>
                  </div>
                )}
                display='chip'
                filter
                className={styles.multi_select}
                style={{ marginTop: role === RolesEnum.TOP ? 0 : 16 }}
                virtualScrollerOptions={{ itemSize: 50 }}
              />
            </div>
          ))}

        <Button
          label='CLASH'
          className={styles.submit_button}
          size='small'
          type='submit'
          loading={loading}
        />
      </form>
    </Card>
  );
}

export default ClashForm;
