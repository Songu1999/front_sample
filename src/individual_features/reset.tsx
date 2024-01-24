import * as React from 'react';
import {Stack,Button} from '@mui/material';
import resetCalendar from './calender';

export default function ResetButton() {

  const reset = () =>{
    resetCalendar();
  }
    return (
      <Stack spacing={2} direction="row">
        <Button variant="contained"
        onClick = {reset}>
            reset all</Button>
      </Stack>
    );
  }