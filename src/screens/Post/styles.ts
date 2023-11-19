import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding-top: ${Platform.OS === 'ios' ? 0 : 24}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.GRAY_100};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  height: 70px;
  elevation: 1;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_900};
  letter-spacing: 0.2px;
`;

export const Content = styled.View`
  padding: 24px 12px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.GRAY_100};
`;
