import 'styled-components';
import { DefaultTheme as theme } from '../../types/theme.default';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
