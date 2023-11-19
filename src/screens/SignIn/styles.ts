import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 16px;
  padding-top: ${Platform.OS === 'ios' ? '22px' : '44px'};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top: 40px;
`;

export const GreetingContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  border-radius: 12px;
  margin-bottom: 3px;
`;

export const LogoPlaceholder = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 24px;
  color: #141414;
  margin-bottom: 3px;
`;

export const GreetingTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_900};
  margin: 8px 0;
  letter-spacing: 0.2px;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
`;

export const InputWrapper = styled.View`
  margin-bottom: 24px;
`;

export const ForgotPasswordWrapper = styled.TouchableOpacity`
  width: 100%;
  margin-top: 11px;
  margin-bottom: 40px;
`;

export const Clickable = styled.TouchableOpacity``;

export const HighlightedText = styled.Text`
  text-align: right;
  color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const ButtonWrapper = styled.View`
  height: 40px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
