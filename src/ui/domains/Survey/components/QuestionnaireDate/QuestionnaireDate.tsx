import { css } from "@emotion/react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useState } from "react";
import { Stack, TextField, Typography, TypographyProps } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";

type QuestionnaireDateProps = {
  number: string;
  title: string;
  desc: string;
};
export const QuestionnaireDate = ({
  number,
  title,
  desc,
}: QuestionnaireDateProps) => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  const [startDateSelected, setStartDateSelected] = useState(false);
  const [endDateSelected, setEndDateSelected] = useState(false);

  const handleStartDateChange = (newValue: Date | null) => {
    setStartDate(newValue);
    setStartDateSelected(true);
  };

  const handleEndDateChange = (newValue: Date | null) => {
    setEndDate(newValue);
    setEndDateSelected(true);
  };

  return (
    <div css={styles.root}>
      <div css={styles.wrapper}>
        <NumberChip>{number}</NumberChip>
        <Title>{title}</Title>
      </div>
      <div css={styles.bottomWrapper}>
        <Desc>{desc}</Desc>
        <Stack
          width={"100%"}
          spacing={"12px"}
          direction={"row"}
          display="flex"
          alignItems="center"
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="yyyy-MM-dd"
              value={startDate}
              onChange={handleStartDateChange}
              renderInput={(p) => (
                <TextField
                  sx={{ width: "100%" }}
                  css={startDateSelected && styles.pickerField}
                  {...p}
                />
              )}
            />
          </LocalizationProvider>
          <div css={styles.hr}></div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="yyyy-MM-dd"
              value={endDate}
              onChange={handleEndDateChange}
              renderInput={(p) => (
                <TextField
                  sx={{ width: "100%" }}
                  css={endDateSelected && styles.pickerField}
                  {...p}
                />
              )}
            />
          </LocalizationProvider>
        </Stack>
      </div>
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
  `,
  circleChip: css`
    width: 32px;
    height: 32px;
    border: 2px solid rgba(78, 196, 204, 0.3);
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  wrapper: css`
    display: flex;
    align-items: center;
  `,
  bottomWrapper: css`
    width: 100%;
    padding: 0 40px;
  `,
  hr: css`
    width: 40px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.7);
  `,
  pickerField: css`
    & input {
      color: #2d82ff;
    }
    & fieldset {
      border: 2px solid #2d82ff;
      background-color: rgba(45, 130, 255, 0.1);
    }
  `,
};

const NumberChip = (p: TypographyProps) => {
  return (
    <div css={styles.circleChip}>
      <Typography color="#2d82ff" fontWeight={700} fontSize={"14px"} {...p} />
    </div>
  );
};

const Title = (p: TypographyProps) => {
  return (
    <Typography
      color="color: rgba(0, 0, 0, 0.8)"
      fontWeight={700}
      fontSize={"20px"}
      lineHeight={1}
      ml={"10px"}
      {...p}
    />
  );
};

const Desc = (p: TypographyProps) => {
  return (
    <Typography
      color="rgba(0, 0, 0, 0.7);"
      fontWeight={400}
      fontSize={"14px"}
      lineHeight={"20px"}
      mt={"10px"}
      mb={"20px"}
      {...p}
    />
  );
};
