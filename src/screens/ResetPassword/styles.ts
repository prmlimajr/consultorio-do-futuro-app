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

export const GreetingContainer = styled.View<{ isVerifying?: boolean }>`
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

export const InputWrapper = styled.View`
  margin-bottom: 24px;
`;

export const RequirementsList = styled.View`
  margin-top: 12px;
  padding: 0 10px;
`;

export const RequirementItem = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Dot = styled.View`
  width: 2px;
  height: 2px;
  border-radius: 4px;
  background-color: #6d6e71;
  margin-right: 6px;
`;

export const RequirementText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 12px;
  color: #6d6e71;
`;

export const ButtonWrapper = styled.View`
  height: 40px;
  margin-top: 32px;
`;

export const SuccessContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
`;

export const CheckContainer = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: #cce6d3;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
`;

export const SuccessButtonWrapper = styled.View`
  height: 40px;
  width: 100%;
  margin-top: 40px;
`;
