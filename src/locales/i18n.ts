import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import English from './en/sentences.json';
import Korean from './ko/sentences.json';

const resources = {
  en: {
    translation: English,
  },
  ko: {
    translation: Korean,
  },
};

// 유저 브라우저의 언어 확인
const userLanguage = navigator.language.toLowerCase();
const isKor = userLanguage.includes('ko'); // 브라우저 공통으로 들어가는 앞 글자 "ko"로 확인

i18n.use(initReactI18next).init({
  resources,
  lng: isKor ? 'ko' : 'en', // 기본 언어 설정
  fallbackLng: 'en', // 기본 언어가 지원되지 않을 때의 대체 언어 설정
  interpolation: {
    escapeValue: false, // 리액트는 HTML 태그도 렌더링할 수 있어서 escapeValue를 false로 설정
  },
});
