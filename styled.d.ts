import 'styled-components';
import { ColorTypes, QueryTypes } from './src/styles/theme';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorTypes;
    fontSize: QueryTypes;
  }
}
