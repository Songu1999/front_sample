import * as React from "react";
import { Stack, Button } from "@mui/material";

type Props = {
  onReset: () => void;
};
export default function ResetButton({ onReset }: Props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={onReset}>
        reset all
      </Button>
    </Stack>
  );
}
