import { css } from "@emotion/react";
import {
  Button,
  Box,
  ButtonGroup,
  ButtonProps,
  Typography,
  TypographyProps,
} from "@mui/material";

import { useState } from "react";

type QuestionnaireProps = {
  number: string;
  title: string;
  desc: string;
  btnData: QuestionnaireBtnModel[];
};

type QuestionnaireBtnModel = {
  name: string;
  value: string;
  text: string;
};

export const Questionnaire = ({
  number,
  title,
  desc,
  btnData,
}: QuestionnaireProps) => {
  const [selectedBtn, setSelectedBtn] = useState("");

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
        >
          {btnData.map((it, index) => (
            <Box width="612px" key={index}>
              <CustomButton
                onClick={() => setSelectedBtn(it.value)}
                color={selectedBtn === it.value ? "primary" : "secondary"}
                sx={{
                  backgroundColor:
                    selectedBtn === it.value
                      ? "rgba(45, 130, 255, 0.1)"
                      : "white",
                }}
              >
                <Typography
                  color={selectedBtn === it.value ? "primary" : "secondary"}
                  fontSize="16px"
                  fontWeight={selectedBtn === it.value ? "bold" : "normal"}
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
    max-width: 620px;
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
    margin-left: 40px;
  `,

  button: css`
    border-radius: 8px;
    margin-top: 10px;

    height: 40px;
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

const CustomButton = (p: ButtonProps) => {
  return <Button fullWidth css={styles.button} {...p} />;
};