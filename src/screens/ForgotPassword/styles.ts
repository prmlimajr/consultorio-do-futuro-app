import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  padding-top: ${Platform.OS === 'ios' ? '22px' : '44px'};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
`;

export const Content = styled.View`
  margin-top: 24px;
`;

export const GreetingContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const GreetingTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_900};
  margin: 8px 0;
  letter-spacing: 0.2px;
  text-align: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`;

export const ButtonWrapper = styled.View`
  height: 40px;
  margin-top: 32px;
`;
