import * as React from 'react';
import { Box, Button } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';


export default function BasicDatePicker() {
    const [value, setValue] = React.useState<Date | null>(null)

    const handleChange = (newValue : Date | null) => {
        let formattedTimestamp : string | null = null;
        if (newValue) {
            // dayjsを使用して指定したフォーマットに変換
            formattedTimestamp = dayjs(newValue).format('YYYY-MM-DD HH:mm:ss');
            console.log(`日付情報が入力されました：${formattedTimestamp}`);
            // ここでformattedTimestampを別の変数に格納するか、必要に応じて利用します。
            setValue(newValue);
        }
        return formattedTimestamp;
    }
    const resetCalendar = () =>{
      return setValue(null);
    }


  return (
    <><LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ m: 2, width: '25ch' }}>
        <DatePicker label="入力日"
          value={value}
          onChange={handleChange}
          format='YYYY/MM/DD 00:00:00' />
      </Box>
    </LocalizationProvider></>
    


  );
}