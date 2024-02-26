import 'styled-components';
import { ColorTypes, MediaTypes } from './src/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    color: ColorTypes;
    media: MediaTypes;
  }
}
