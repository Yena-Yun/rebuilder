import {
  InstagramImage,
  LinkedinImage,
  NaverBlogImage,
  TistoryImage,
} from '../icons';

const BASE_URL = 'https://rebuilderai.com';

export const ANCHOR = {
  company: {
    name: '(주)리빌더에이아이',
    url: `${BASE_URL}`,
    ariaLabel: 'Go to RebuilderAI Homepage',
  },
  service: {
    text: '서비스 소개',
    path: `${BASE_URL}`,
  },
  contact: {
    text: '기업문의',
    path: `${BASE_URL}/contact`,
  },
};

export const COMPANY_INFO = [
  {
    id: 0,
    info: '사업자 등록번호: 483-88-02098 | 대표: 김정현',
  },
  {
    id: 1,
    info: '호스팅 서비스: 주식회사 리빌더에이아이 | 통신판매업 신고번호: 2022-서울서초-0594',
  },
  {
    id: 2,
    info: '주소: 13561 경기도 성남시 분당구 정자일로 95 네이버 1784 4층',
  },
];

export const COPY_RIGHT = 'COPYRIGHT ©2024 Rebuilderai. ALL RIGHTS RESERVED.';

export const TERM = [
  [
    {
      id: 0,
      title: '서비스 이용약관 동의',
      path: `${BASE_URL}/policy/service-using`,
    },
    {
      id: 1,
      title: '개인정보 처리방침 동의',
      path: `${BASE_URL}/policy/privacy`,
    },
  ],
  [
    {
      id: 2,
      title: '데이터 이용동의',
      path: `${BASE_URL}/policy/data-afford`,
    },
    {
      id: 3,
      title: '제 3자 정보제공 동의',
      path: `${BASE_URL}/policy/third-agree`,
    },
  ],
  [
    {
      id: 4,
      title: '광고성 정보수신 동의',
      path: `${BASE_URL}/policy/advertise-agree`,
    },
  ],
];

export const SOCIAL_MEDIA = [
  {
    id: 0,
    url: 'https://www.instagram.com/rebuilderai/',
    ariaLabel: 'Go to SNSPage',
    image: InstagramImage,
    alt: 'Go to RebuilderAI Instagram',
  },
  {
    id: 1,
    url: 'https://www.linkedin.com/company/%EB%A6%AC%EB%B9%8C%EB%8D%94ai/',
    ariaLabel: 'Go to SNSPage',
    image: LinkedinImage,
    alt: 'Go to RebuilderAI LinkedIn',
  },
  {
    id: 2,
    url: 'https://blog.naver.com/rebuilderai',
    ariaLabel: 'Go to SNSPage',
    image: NaverBlogImage,
    alt: 'Go to RebuilderAI Naver blog',
  },
  {
    id: 3,
    url: 'https://rebuilderaitech.tistory.com/',
    ariaLabel: 'Go to SNSPage',
    image: TistoryImage,
    alt: 'Go to RebuilderAI Tistory',
  },
];
