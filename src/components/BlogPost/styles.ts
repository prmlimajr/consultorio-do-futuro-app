import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  margin: 0 16px;
  margin-bottom: 24px;
  border-radius: 16px;
  border: 1px solid #efefef;
  elevation: 1;
`;

export const BlogImage = styled.Image`
  width: 100%;
  height: 188px;
  border-radius: 16px 16px 0 0;
`;

export const ContentContainer = styled.View`
  padding: 24px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_900};
  margin-bottom: 8px;
  letter-spacing: 0.2px;
`;

export const Content = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_600};
  letter-spacing: 0.2px;
  margin-bottom: 16px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonWrapper = styled.View`
  width: 115px;
  height: 40px;
  margin-right: 16px;
`;

export const LinkWrapper = styled.View`
  width: 80px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

export const Link = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
`;
