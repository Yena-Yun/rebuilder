import { DefaultTheme } from 'styled-components';

const breakpoint = {
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

const media = {
  mobile: `(max-width: ${breakpoint.mobile}px)`,
  tabletS: `(max-width: ${breakpoint.tabletS}px)`,
  tabletM: `(max-width: ${breakpoint.tabletM}px)`,
  tabletL: `(max-width: ${breakpoint.tabletL}px)`,
  laptop: `(max-width: ${breakpoint.laptop}px)`,
};

export type ColorTypes = typeof color;
export type MediaTypes = typeof media;

const theme: DefaultTheme = {
  color,
  media,
};

export default theme;
