import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.GRAY_100};
  flex: 1;
`;

export const GreetingContainer = styled.View`
  margin-top: 24px;
  margin-bottom: 32px;
  padding: 0 16px;
`;

export const GreetingTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_1000};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  letter-spacing: 0.2px;
`;

export const Bold = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const GreetingText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_600};
  letter-spacing: 0.2px;
`;

export const Section = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.GRAY_100};
  padding: 0 16px;
  margin-bottom: 44px;
`;

export const SectionTitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_1000};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  letter-spacing: 0.2px;
  margin-bottom: 12px;
`;

export const Wrapper = styled.View`
  padding: 0 16px;
`;
