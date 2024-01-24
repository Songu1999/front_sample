import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SelectLabels from "@/individual_features/select";
import BasicDatePicker from "@/individual_features/calender";
import ResetButton from "@/individual_features/reset";

const inter = Inter({ subsets: ["latin"] });

export default function filter_func() {
  return (
    <div>
      <BasicDatePicker/>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="入力日"
          // defaultValue={dayjs("yyyy-mm-dd")}
          format="YYYY/MM/DD"
        />
      </LocalizationProvider> */}
      <SelectLabels/>
      <ResetButton/>
    </div>
  );
}