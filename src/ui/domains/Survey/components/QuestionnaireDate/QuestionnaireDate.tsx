import { css } from "@emotion/react";

import { Stack, TextField, Typography, TypographyProps } from "@mui/material";

import { mq } from "@/ui/theme/Screen";
import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type QuestionnaireDateProps = {
  number: string;
  title: string;
  desc: string;
  state: dateStateProps;
};

type dateStateProps = {
  value: any;
  onChange: (item: any) => any;
};
export const QuestionnaireDate = ({
  number,
  title,
  desc,
  state,
}: QuestionnaireDateProps) => {
  return (
    <div css={styles.root}>
      <div css={styles.wrapper}>
        <NumberChip>{number}</NumberChip>
        <Title>{title}</Title>
      </div>
      <div css={styles.bottomWrapper}>
        <Desc>{desc}</Desc>
        <DateRange
          editableDateInputs={true}
          onChange={state.onChange}
          moveRangeOnFirstSelection={false}
          ranges={state.value}
          dateDisplayFormat={"yyyy-MM-d"}
          direction="horizontal"
          minDate={new Date()}
          css={styles.dateWrapper}
        />
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
    margin-bottom: 4px;
  `,
  bottomWrapper: css`
    width: 100%;
    padding: 0 40px;
  `,

  dateWrapper: css`
    width: 100%;
    display: flex;
    justify-content: center;
    color: red !important;
    & .rdrMonths .rdrMonth {
      width: 100%;
    }
  `,

  title: css`
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-left: 10px;

    ${mq[1]} {
      font-size: 16px;
    }
  `,
  desc: css`
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin-left: 10px;
    margin-bottom: 20px;

    ${mq[1]} {
      font-size: 12px;
      margin-left: 0px;
      margin-bottom: 10px;
    }
  `,

  hr: css`
    color: rgba(0, 0, 0, 0.4);
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
    <Typography color="color: rgba(0, 0, 0, 0.8)" css={styles.title} {...p} />
  );
};

const Desc = (p: TypographyProps) => {
  return <Typography color="rgba(0, 0, 0, 0.7);" css={styles.desc} {...p} />;
};
