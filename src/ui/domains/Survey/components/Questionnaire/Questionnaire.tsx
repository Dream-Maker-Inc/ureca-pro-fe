import { mq } from "@/ui/theme/Screen";
import { css } from "@emotion/react";
import {
  Button,
  Box,
  ButtonGroup,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";

export type QuestionnaireProps = {
  number: string;
  title: string;
  desc: string;
  btnData: QuestionnaireBtnModel[];
  state: SelectedBtnStateModel;
};

export type QuestionnaireBtnModel = {
  value: string;
  text: string;
};

export type SelectedBtnStateModel = {
  selectedValue: string;
  onSelectedChange: (p: string) => void;
};

export const Questionnaire = ({
  number,
  title,
  desc,
  btnData,
  state,
}: QuestionnaireProps) => {
  return (
    <div css={styles.root}>
      <div css={styles.wrapper}>
        <NumberChip>{number}</NumberChip>
        <Title>{title}</Title>
      </div>
      <div css={styles.bottomWrapper}>
        <Desc>{desc}</Desc>
        <ButtonGroup
          variant="outlined"
          color="secondary"
          orientation="vertical"
          fullWidth
        >
          {btnData.map((it, index) => (
            <Box width={"100%"} key={index}>
              <CustomButton
                onClick={() => state.onSelectedChange(it.value)}
                color={
                  state.selectedValue === it.value ? "primary" : "secondary"
                }
                sx={{
                  backgroundColor:
                    state.selectedValue === it.value
                      ? "rgba(45, 130, 255, 0.1)"
                      : "white",
                }}
              >
                <Typography
                  color={
                    state.selectedValue === it.value ? "primary" : "secondary"
                  }
                  fontWeight={
                    state.selectedValue === it.value ? "bold" : "normal"
                  }
                  css={styles.buttonText}
                >
                  {it.text}
                </Typography>
              </CustomButton>
            </Box>
          ))}
        </ButtonGroup>
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

    ${mq[1]} {
      width: 28px;
      height: 28px;
    }
  `,

  circleNumber: css`
    color: #2d82ff;
    font-weight: 700;
    font-size: 14px;

    ${mq[1]} {
      font-size: 12px;
    }
  `,
  wrapper: css`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 4px;
  `,
  bottomWrapper: css`
    width: 100%;
    padding: 0 40px;
  `,

  button: css`
    width: 100%;
    border-radius: 8px;
    margin-top: 10px;

    text-transform: none;
    height: 40px;
  `,

  buttonText: css`
    font-size: 16px;
    ${mq[1]} {
      font-size: 14px;
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

    margin-bottom: 20px;

    ${mq[1]} {
      font-size: 12px;

      margin-bottom: 10px;
    }
  `,
};

const NumberChip = (p: TypographyProps) => {
  return (
    <div css={styles.circleChip}>
      <Typography css={styles.circleNumber} {...p} />
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

const CustomButton = (p: ButtonProps) => {
  return <Button fullWidth css={styles.button} {...p} />;
};
