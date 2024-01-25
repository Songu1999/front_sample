import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { initialize } from "next/dist/server/lib/render-server";

type Props = {
  value?: string;
  onChange?: (event: SelectChangeEvent<string>) => void;
};

export default function SelectLabels({ value, onChange }: Props) {
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">occupation</InputLabel>
        <Select
          labelId="test-label"
          id="test-select"
          value={value ?? ""}
          label="Occupation"
          onChange={onChange}
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
