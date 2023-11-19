import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  z-index: 999;
  margin-top: ${Platform.OS === 'ios' ? 0 : '24px'};
  elevation: 1;
`;

export const Logo = styled.Image`
  height: 20px;
  width: 20px;
`;

export const LogoPlaceholder = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 23px;
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_900};
`;

export const Menu = styled.TouchableOpacity``;
