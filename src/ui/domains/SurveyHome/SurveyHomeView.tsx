import { mq } from "@/ui/theme/Screen";
import { css } from "@emotion/react";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import Link from "next/link";

export const SurveyHomeView = () => {
  return (
    <div css={styles.root}>
      <Header />
      <Content />
    </div>
  );
};

const styles = {
  root: css`
    width: 100%;
    height: 100vh;
    position: relative;

    display: flex;
    align-items: center;
  `,
  header: css`
    width: 100%;
    height: 80px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    z-index: 99;
  `,
  headerContainer: css`
    width: 100%;
    max-width: 1024px;
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

    ${mq[1]} {
      font-size: 32px;
    }
  `,

  contentContainer: css`
    width: 100%;
    max-width: 1024px;

    margin: 0 auto;
    margin-top: 80px;

    padding: 0 16px;

    ${mq[1]} {
      padding: 0 16px;
      margin-top: 0px;
    }
  `,
  title: css`
    font-size: 40px;
    font-weight: 700;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 30px;

    ${mq[4]} {
      font-size: 32px;
    }
    ${mq[1]} {
      font-size: 24px;
      margin-bottom: 20px;
    }
  `,

  contentTitleSpan: css`
    color: #2d82ff;
  `,

  ul: css`
    font-size: 20px;
    line-height: 32px;
    font-weight: 300;
    list-style-type: disc;
    margin-left: 24px;
    margin-bottom: 100px;

    ${mq[4]} {
      font-size: 14px;
      line-height: 26px;
    }
    ${mq[1]} {
      font-size: 12px;
      line-height: 22px;
      margin-bottom: 60px;
    }
  `,

  button: css`
    width: 100%;
    max-width: 648px;
    height: 60px;

    background-color: #2d82ff;
    color: white;
    font-size: 20px;
    font-weight: 500;

    border-radius: 8px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;

    ${mq[4]} {
      height: 50px;
      font-size: 16px;
    }
  `,
  alertTitleWrapper: css`
    display: flex;
    align-items: center;
    margin-top: 40px;
    margin-bottom: 4px;
    ${mq[1]} {
      margin-top: 20px;
      margin-bottom: 2px;
    }
  `,
  alertTitle: css`
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    margin-left: 6px;

    ${mq[4]} {
      font-size: 14px;
    }
    ${mq[1]} {
      font-size: 12px;
    }
  `,
  alertContent: css`
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    margin-left: 30px;

    ${mq[4]} {
      font-size: 12px;
    }
    ${mq[1]} {
      font-size: 10px;
      line-height: 14px;
    }
  `,

  alertContentSpan: css`
    font-weight: 500;
    text-decoration: underline;
  `,
};

const Header = () => {
  return (
    <header css={styles.header}>
      <div css={styles.headerContainer}>
        <Link href="/">
          <h2 css={styles.headerIcon}>ureca</h2>
        </Link>
      </div>
    </header>
  );
};

const Content = () => {
  return (
    <section css={styles.contentContainer}>
      <h1 css={styles.title}>
        퍼블리싱 <span css={styles.contentTitleSpan}>자가 진단 </span>항목
      </h1>
      <ul css={styles.ul}>
        <li>
          고객님께서 유레카에 웹 퍼블리싱 프로젝트를 의뢰함에 있어 상담에 필요한
          기본 정보를 수집합니다.
        </li>
        <li>
          본 퍼블리싱 업무는 유지보수 업무가 아닌 신규 개발 업무만 진행
          가능합니다.
        </li>
        <li>
          기존 코드 수정 및 유지보수 업무이실 경우 별도의 상담을 요청해 주세요.
        </li>
        <li>
          문의 사항은 본 페이지 우측 하단의 채팅 버튼을 클릭하여 언제든 상담이
          가능합니다.
        </li>
      </ul>

      <SurveyButton />
      <AlertSection />
    </section>
  );
};

const SurveyButton = () => (
  <Link href="/survey">
    <button css={styles.button}>진단하러 가기</button>
  </Link>
);

const AlertSection = () => {
  return (
    <section>
      <div css={styles.alertTitleWrapper}>
        <ErrorOutlineOutlinedIcon sx={{ color: "#2d82ff" }} />
        <h5 css={styles.alertTitle}>최소 작업 비용 안내</h5>
      </div>
      <div css={styles.alertContent}>
        웹 퍼블리싱의 경우 페이지당{" "}
        <span css={styles.alertContentSpan}>최소 10만원</span> 금액으로 진행해
        드리고 있습니다.
        <br />
        상세 요청 사항에 따라{" "}
        <span css={styles.alertContentSpan}>실제 견적은 변동</span>될 수 있으니,
        아래 항목에 체크하신 후 상세 견적 요청을 부탁드립니다.
      </div>
    </section>
  );
};
