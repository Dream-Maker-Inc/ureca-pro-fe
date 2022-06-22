import { css } from "@emotion/react";
import { Button, Stack, Typography } from "@mui/material";
import { Questionnaire } from "./components/Questionnaire";
import { QuestionnaireAlert } from "./components/QuestionnaireAlert";
import { QuestionnaireDate } from "./components/QuestionnaireDate";
import { models } from "./model/SurveyView.model";
import { useSurveyView } from "./useSurveyView";
export const SurveyView = () => {
  const model = models;
  const {
    one,
    two,
    three,
    four,
    five,
    seven,
    eight,
    nine,
    buttonState,
    dateState,
  } = useSurveyView();

  return (
    <div css={styles.root}>
      <Header />
      <Stack css={styles.container} spacing={"100px"}>
        <Questionnaire
          number={"1"}
          title={"페이지 구축 목적"}
          desc={
            "구축 목적에 따라 이미지 리소스나 배포 방식이 달라지기 때문에, 대략적인 페이지 구축의 목적이 필요합니다."
          }
          btnData={model[0].data}
          state={{
            selectedValue: one.value,
            onSelectedChange: one.handleChange,
          }}
        />
        <Questionnaire
          number={"2"}
          title={"사용 기술"}
          desc={
            "사용 기술에 따라 예상 견적과 기간이 달라집니다.\n특별히 원하시는 기술이 없으시거나, 기술 관련 인력이 부재 중이신 경우 1번을 선택해 주세요."
          }
          btnData={model[1].data}
          state={{
            selectedValue: two.value,
            onSelectedChange: two.handleChange,
          }}
        />
        <Questionnaire
          number={"3"}
          title={"디자인 산출물 전달 가능 여부"}
          desc={
            "디자인 산출물을 전달해 주셔야 해당 디자인에 맞춰 퍼블리싱 작업을 진행할 수 있습니다.\n파워포인트, 엑셀, 그림판, jpg/png 이미지 등 불명확한 형태의 산출물은 작업이 불가합니다."
          }
          btnData={model[2].data}
          state={{
            selectedValue: three.value,
            onSelectedChange: three.handleChange,
          }}
        />
        <Questionnaire
          number={"4"}
          title={"반응형 대응의 범위"}
          desc={
            "기본적으로 1920px 기준의 PC 버전에 호환되도록 진행하며, 이외 해상도 필요 시 추가 비용이 발생할 수 있습니다."
          }
          btnData={model[3].data}
          state={{
            selectedValue: four.value,
            onSelectedChange: four.handleChange,
          }}
        />
        <Questionnaire
          number={"5"}
          title={"애니메이션 필요 여부"}
          desc={
            "사용자들에게 생동감 있는 느낌을 전달하기 위해 페이지에 애니메이션을 구현하여 스크롤 시 또는 이미지나 동영상 등에 애니메이션을 추가할 수 있습니다."
          }
          btnData={model[4].data}
          state={{
            selectedValue: five.value,
            onSelectedChange: five.handleChange,
          }}
        />

        <QuestionnaireDate
          number={"6"}
          title={"희망 착수 및 마감 일자"}
          desc={
            "페이지당 최소 1~2일이 소요되며, 페이지당 하루 안에 마감되어야 하는 급건일 경우 진행이 거절될 수 있으니, 최소한 여유로운 시간을 확보하신 후 문의 부탁드립니다."
          }
          state={dateState}
        />

        <div css={styles.wrapper}>
          <Questionnaire
            number={"7"}
            title={"실서버 업로드 필요 여부"}
            desc={
              "퍼블리싱 진행 이후 완성 파일을 실서버에 배포하는 작업이 필요하실 경우 체크하여 주시기 바랍니다. 배포가 필요하실 경우 FTP 등 서비스 접속 정보를 별도로 전달주셔야 합니다.\n아임웹, 카페24 쇼핑몰, 워드프레스 등 솔루션에 직접 코드 업로드는 작업 불가합니다."
            }
            btnData={model[6].data}
            state={{
              selectedValue: seven.value,
              onSelectedChange: seven.handleChange,
            }}
          />
          <QuestionnaireAlert />
        </div>
        <Questionnaire
          number={"8"}
          title={"검색 엔진 최적화 (SEO) 필요 여부"}
          desc={
            "퍼블리싱 진행 이후 별도의 검색 엔진 최적화가 필요하실 경우 체크하여 주시기 바랍니다."
          }
          btnData={model[7].data}
          state={{
            selectedValue: eight.value,
            onSelectedChange: eight.handleChange,
          }}
        />
        <Questionnaire
          number={"9"}
          title={"페이지 유입 및 상담 신청 경로"}
          desc={"유레카를 어떻게 알게 되셨나요?"}
          btnData={model[8].data}
          state={{
            selectedValue: nine.value,
            onSelectedChange: nine.handleChange,
          }}
        />
        <div css={styles.buttonContainer}>
          <Button
            disabled={buttonState.disabled}
            onClick={buttonState.onClick}
            variant="contained"
            color="primary"
            css={styles.button}
          >
            <Typography color="white" fontSize="20px">
              제출하기
            </Typography>
          </Button>
        </div>
      </Stack>
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    height: 100%;
    position: relative;

    display: flex;
    align-items: center;
  `,
  header: css`
    width: 100%;
    height: 80px;
    background-color: white;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    z-index: 99;
  `,
  headerContainer: css`
    width: 100%;
    max-width: 700px;
    height: 100%;

    display: flex;
    align-items: center;
    padding: 0 16px;

    margin: 0 auto;
  `,
  headerIcon: css`
    color: #2d82ff;
    font-size: 40px;
    font-weight: 700;
    font-family: "Karla" sans-serif;

    cursor: pointer;
  `,

  container: css`
    width: 100%;
    max-width: 700px;
    margin: 0 auto;

    padding: 180px 16px 100px 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  wrapper: css`
    width: 100%;
  `,
  buttonContainer: css`
    width: 100%;
    padding: 0 40px;
  `,
  button: css`
    width: 100%;
    height: 60px;
  `,
};

const Header = () => {
  return (
    <header css={styles.header}>
      <div css={styles.headerContainer}>
        <h2 css={styles.headerIcon}>ureca</h2>
      </div>
    </header>
  );
};
