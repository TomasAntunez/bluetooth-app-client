import React, { useState } from 'react'
import { Button, Container, Paper } from '@mui/material';

import { themePalette } from '../../config/theme';
import { connectPhoneAndReturnBatteryLevel } from '../../services';


export const HomePage: React.FC<{}> = () => {

  const [ visibleMainContent, setVisibleMainContent ] = useState<boolean>(false);

  const handleClick = async () => {
    try {
      const phoneData = await connectPhoneAndReturnBatteryLevel();
      setVisibleMainContent(true);
      console.log(phoneData);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Button
        variant='contained'
        size='large'
        sx={{
          mt: 6,
          textTransform: 'none',
          fontWeight: 'bold',
          fontSize: 20
        }}
        onClick={ handleClick }
      >
        Connect Device
      </Button>

      {
        visibleMainContent && (
          <Paper
            sx={{
              bgcolor: `${themePalette.SECONDARY_BG}`,
              width: '60%',
              height: '60vh',
              borderRadius: 3,
              mt: 7
            }}
          >
    
          </Paper>
        )
      }

    </Container>
  )
}
