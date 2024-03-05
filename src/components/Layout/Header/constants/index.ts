const BASE_URL = 'https://rebuilderai.com';

export const LANGUAGES = [
  {
    code: 'ko',
    display: 'KOR',
  },
  {
    code: 'en',
    display: 'ENG',
  },
];

export const KOR = LANGUAGES[0].display;

export const MENUS = [
  {
    name: 'Service',
    link: `${BASE_URL}/service`,
  },
  {
    name: 'Technology',
    link: '/technology',
  },
  {
    name: 'About',
    link: `${BASE_URL}/about`,
  },
  {
    name: 'Contact',
    link: `${BASE_URL}/contact`,
  },
];

export const TECHNOLOGY = MENUS[1].name;

export const TECH_MENUS = ['광원추론', '재질추론', '실측크기', '3D 공간 영상'];
