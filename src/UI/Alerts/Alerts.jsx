import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export  function AlertError() {
  return (
    <Alert severity="error" sx={{  background: "none", color: 'black', paddingBottom: "0"}}>pH fuera de rango 7.9.</Alert>
  );
}
