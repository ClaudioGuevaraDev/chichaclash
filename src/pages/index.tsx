import {
  Autocomplete,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
} from '@mui/material';

import { champs } from '@/utils/champs';

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Card sx={{ width: '100%', maxWidth: 400 }}>
        <CardContent>
          <Stack spacing={2}>
            <Autocomplete
              renderInput={(params) => <TextField {...params} label='TOP' />}
              options={champs}
              renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                  <Box
                    key={key}
                    component='li'
                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                    {...optionProps}
                  >
                    <Avatar
                      src={`/champs/${option.label.toLowerCase()}.webp`}
                      alt={option.label}
                      sx={{ mr: 2 }}
                    />
                    {option.label}
                  </Box>
                );
              }}
            />
            <Autocomplete
              options={[]}
              renderInput={(params) => <TextField {...params} label='JUNGLE' />}
            />
            <Autocomplete
              options={[]}
              renderInput={(params) => <TextField {...params} label='MID' />}
            />
            <Autocomplete
              options={[]}
              renderInput={(params) => <TextField {...params} label='ADC' />}
            />
            <Autocomplete
              options={[]}
              renderInput={(params) => (
                <TextField {...params} label='SUPPORT' />
              )}
            />
          </Stack>

          <Button variant='outlined' sx={{ marginTop: '1rem', width: '100%' }}>
            CLASH
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Home;
