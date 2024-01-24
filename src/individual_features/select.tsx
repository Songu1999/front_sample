import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { initialize } from 'next/dist/server/lib/render-server';

export default function SelectLabels() {
  const [occupation, setOccupation] = React.useState('');

  let selectedOccupation : string;
  const handleChange = (event: SelectChangeEvent) => {
    console.log("プルダウン内の選択肢が変更されました。");
    console.log(event.target.value);
    setOccupation(event.target.value);
    selectedOccupation = event.target.value;
  };
  

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">occupation</InputLabel>
        <Select
          labelId="test-label"
          id="test-select"
          value={occupation}
          label="Occupation"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="student">Student</MenuItem>
          <MenuItem value="house_wife">House Wife</MenuItem>
          <MenuItem value="teacher">Teacher</MenuItem>
          <MenuItem value="worker">Worker</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
        <FormHelperText>職業を入力してください</FormHelperText>
      </FormControl>
    </div>
  );
}