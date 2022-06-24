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
        text: "이벤트 홍보 목적",
      },
      {
        value: "2",
        text: "회사 소개 목적",
      },
      {
        value: "3",
        text: "웹 페이지 구축 목적",
      },
      { value: "4", text: "기타" },
    ],
  },
  {
    number: 2,
    data: [
      {
        value: "1",
        text: "React 기반",
      },
      {
        value: "2",
        text: "HTML, CSS 기반",
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
        text: "기타 형식으로 전달 가능",
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
        text: "기타",
      },
    ],
  },
  {
    number: 5,
    data: [
      {
        value: "1",
        text: "필요 없어요",
      },
      {
        value: "2",
        text: "기본적인 애니메이션 필요 : 스크롤 위주의 단순한 애니메이션",
      },
      {
        value: "3",
        text: "복잡한 애니메이션 필요 : 바운스, 슬라이딩 등 고급 애니메이션",
      },
      {
        value: "4",
        text: "기타",
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
        text: "기타 웹서버에 배포",
      },
    ],
  },
  {
    number: 8,
    data: [
      {
        value: "1",
        text: "필요 없어요",
      },
      {
        value: "2",
        text: "기본 작업 필요 (메타 태그, 파비콘 등)",
      },
      {
        value: "3",
        text: "추가 작업 필요 (구글 서치 콘솔, 구글 애널리틱스 등)",
      },
      {
        value: "4",
        text: "기타",
      },
    ],
  },
  {
    number: 9,
    data: [
      {
        value: "1",
        text: "SNS 광고",
      },
      {
        value: "2",
        text: "외주 플랫폼",
      },
      {
        value: "3",
        text: "네이버, 구글 등 포털",
      },
      {
        value: "4",
        text: "지인 소개",
      },
      {
        value: "5",
        text: "기타",
      },
    ],
  },
];
