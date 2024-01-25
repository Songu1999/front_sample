import * as React from "react";
import { Box, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { ChangeEvent } from "react";

type Props = {
  value?: string;
  onChange: (v: Date | null) => void;
};
export default function BasicDatePicker({ value, onChange }: Props) {
  const dateValue = value != null ? new Date(value) : null;
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ m: 2, width: "25ch" }}>
          <DatePicker
            label="入力日"
            value={dateValue}
            onChange={onChange}
            format="YYYY/MM/DD 00:00:00"
          />
        </Box>
      </LocalizationProvider>
    </>
  );
}
