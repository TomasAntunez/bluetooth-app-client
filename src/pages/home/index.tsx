import React, { useState } from 'react'
import { Button, Container, Paper } from '@mui/material';

import { themePalette } from '../../config/theme';


export const HomePage: React.FC<{}> = () => {

  const [ visibleMainContent, setVisibleMainContent ] = useState<boolean>(false);


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
        onClick={ () => setVisibleMainContent(!visibleMainContent) }
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
