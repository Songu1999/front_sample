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
import { ChangeEvent, useCallback, useState } from "react";
import { SelectChangeEvent } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function TestPage() {
  const [inputValues, setInputValues] = useState<{
    date: string | undefined;
    occupation: string | undefined;
  }>({
    date: undefined,
    occupation: undefined,
  });
  const onChangeDate = useCallback((v: Date | null) => {
    const formattedTimestamp = dayjs(v).format("YYYY-MM-DD HH:mm:ss");
    setInputValues((prev) => ({ ...prev, date: formattedTimestamp }));
  }, []);
  const onChangeOccupation = useCallback((e: SelectChangeEvent<string>) => {
    setInputValues((prev) => ({ ...prev, occupation: e.target.value }));
  }, []);

  const onResetInputValue = useCallback(() => {
    setInputValues({
      date: undefined,
      occupation: undefined,
    });
  }, []);
  return (
    <div>
      <BasicDatePicker onChange={onChangeDate} value={inputValues.date} />
      <SelectLabels
        value={inputValues.occupation}
        onChange={onChangeOccupation}
      />
      <ResetButton onReset={onResetInputValue} />
    </div>
  );
}
