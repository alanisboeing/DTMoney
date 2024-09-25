import styled from "styled-components";
import { DefaultTheme } from "styled-components";
import { defaultTheme } from "../../styles/themes/DefaultTheme";

type ThemeType = typeof defaultTheme;

declare module 'styled-components' {
  interface DefaultTheme extends ThemeType{}
}
