import { QuestionnaireBtnModel } from "../components/Questionnaire";

type modelsType = {
  number: number;
  data: QuestionnaireBtnModel[];
};

export const models: modelsType[] = [
  {
    number: 1,
    data: [
      {
        value: "1",
        text: "이벤트 홍보 목적 (광고 랜딩 페이지 등)",
      },
      {
        value: "2",
        text: "회사 소개 목적 (회사 홈페이지, 회사 블로그 등)",
      },
      {
        value: "3",
        text: "웹앱 구축 목적 (하이브리드 웹 에서의 퍼블리싱 등)",
      },
      { value: "4", text: "기타 (직접 입력)" },
    ],
  },
  {
    number: 2,
    data: [
      {
        value: "1",
        text: "순수 HTML 스펙 (HTML, CSS, JavaScript 등)",
      },
      {
        value: "2",
        text: "리액트 SPA 스펙 (React, TypeScript, MUI, Emotion 등)",
      },
    ],
  },
  {
    number: 3,
    data: [
      {
        value: "1",
        text: "포토샵 (psd) 원본 파일 전달 가능",
      },
      {
        value: "2",
        text: "일러스트 (ai) 원본 파일 전달 가능",
      },
      {
        value: "3",
        text: "제플린 (zeplin) 계정 초대 가능",
      },
      {
        value: "4",
        text: "피그마 (figma) 공유 링크 전달 가능",
      },
      {
        value: "5",
        text: "기타 형식으로 전달 가능 (직접 입력)",
      },
    ],
  },
  {
    number: 4,
    data: [
      {
        value: "1",
        text: "알아서 해주세요 (기본)",
      },
      {
        value: "2",
        text: "2560px 이상 (고해상도 모니터)",
      },
      {
        value: "3",
        text: "1280px ~ 768px (태블릿)",
      },
      {
        value: "4",
        text: "576px ~ 360px (휴대폰)",
      },
      {
        value: "5",
        text: "기타 (직접 입력)",
      },
    ],
  },
  {
    number: 5,
    data: [
      {
        value: "1",
        text: "알아서 해주세요 (애니메이션 필요 없음)",
      },
      {
        value: "2",
        text: "기본적인 애니메이션 필요\n스크롤을 따라 텍스트나 이미지가 천천히 올라오는 정도의 애니메이션",
      },
      {
        value: "3",
        text: "복잡한 애니메이션 필요\n바운스, 슬라이딩, 반복, 조건 등 복잡한 로직이 필요한 애니메이션",
      },
      {
        value: "4",
        text: "기타 (직접 입력)",
      },
    ],
  },
  {
    number: 6,
    data: [],
  },
  {
    number: 7,
    data: [
      {
        value: "1",
        text: "그냥 코드만 주시면 됩니다",
      },
      {
        value: "2",
        text: "카페24 서버에 배포",
      },
      {
        value: "3",
        text: "가비아 서버에 배포",
      },
      {
        value: "4",
        text: "AWS 서버에 배포",
      },
      {
        value: "5",
        text: "기타 웹서버에 배포 (직접 입력)",
      },
    ],
  },
  {
    number: 8,
    data: [
      {
        value: "1",
        text: "알아서 해주세요 (필요 없음)",
      },
      {
        value: "2",
        text: "기본 작업 필요 (메타 태그, 파비콘 등)",
      },
      {
        value: "3",
        text: "추가 작업 필요 (구글 서치 콘솔, 구글 애널리틱스, 네이버 서치 어드바이저 등)",
      },
      {
        value: "4",
        text: "기타 (직접 입력)",
      },
    ],
  },
  {
    number: 9,
    data: [
      {
        value: "1",
        text: "인스타그램 광고",
      },
      {
        value: "2",
        text: "페이스북 광고",
      },
      {
        value: "3",
        text: "숨고 플랫폼",
      },
      {
        value: "4",
        text: "크몽 플랫폼",
      },
      {
        value: "5",
        text: "네이버, 구글 등 포털",
      },
      {
        value: "6",
        text: "지인 소개",
      },
      {
        value: "7",
        text: "기타 (직접 입력)",
      },
    ],
  },
];
