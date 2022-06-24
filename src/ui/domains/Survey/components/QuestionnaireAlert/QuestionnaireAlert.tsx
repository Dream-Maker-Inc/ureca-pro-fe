import { css } from "@emotion/react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import { Stack, Typography } from "@mui/material";

export const QuestionnaireAlert = () => {
  return (
    <div css={styles.root}>
      <Stack css={styles.box} spacing={"10px"}>
        <Stack css={styles.wrapper} direction="row" spacing={"10px"}>
          <ErrorOutlineOutlinedIcon css={styles.icon} />
          <Typography color="white" fontSize="14px" fontWeight={700}>
            실서버가 무엇인가요?
          </Typography>
        </Stack>
        <Typography color="rgba(0,0,0,0.45)" fontSize="14px" lineHeight={1.4}>
          고객님이 요청하신 결과물을 실제 고객들이 웹사이트에 접속해서 보기
          위해서는 실제 인터넷에 공유할 수 있는 서버가 필요합니다. 해당 서버를
          보유하고 계시지 않다면 신규로 신청하셔야 하며, 이미 신청하신 호스팅
          서버가 있다면 위에서 해당 서버를 제공하는 회사를 선택해 주시면 됩니다.
          서버를 신규로 신청하시고 싶으시다면 네 번째 가비아 서버에 배포를
          선택해 주세요.
        </Typography>
      </Stack>
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    padding: 0 40px;
  `,
  box: css`
    width: 100%;
    padding: 20px 32px;
    margin-top: 26px;

    background-color: rgba(45, 130, 255, 0.1);
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: start;
  `,
  wrapper: css`
    padding: 4px 8px;
    background-color: #2d82ff;
    border-radius: 4px;

    display: flex;
    align-items: center;
  `,
  icon: css`
    width: 18px;
    height: 18px;

    color: white;
  `,
};
