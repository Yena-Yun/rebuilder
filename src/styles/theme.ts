import { DefaultTheme } from 'styled-components';

const media = {
  mobile: '600',
  tabletS: '768',
  tabletM: '1024',
  tabletL: '1200',
  laptop: '1280',
};

const color = {
  white: 'rgb(255, 255, 255)',
  black: 'rgb(0, 0, 0)',
  lightBlack1: 'rgba(0, 0, 0, 0.05)',
  lightBlack2: 'rgba(0, 0, 0, 0.12)',
  lightBlack3: 'rgba(40, 45, 50, 0.3)',
  lightBlack4: 'rgba(0, 0, 0, 0.5)',
  darkBlack1: 'rgb(18, 20, 23);',
  darkBlack2: 'rgb(20, 20, 20)',
  gray1: 'rgb(246, 247, 248)',
  gray2: 'rgb(230, 232, 235)',
  gray3: 'rgb(189, 193, 199)',
  gray4: 'rgb(111, 117, 123)',
  blue: 'rgb(23, 60, 254)',
};

const query = {
  mobile: `(max-width: ${media.mobile}px)`,
  tabletS: `(max-width: ${media.tabletS}px)`,
  tabletM: `(max-width: ${media.tabletM}px)`,
  tabletL: `(max-width: ${media.tabletL}px)`,
  laptop: `(max-width: ${media.laptop}px)`,
};

export type ColorTypes = typeof color;
export type QueryTypes = typeof query;

const theme: DefaultTheme = {
  color,
  query,
};

export default theme;
