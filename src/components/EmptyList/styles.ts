import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  border-radius: 16px;
  border: 1px solid #efefef;
  elevation: 1;
  padding: 16px 0;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  letter-spacing: 0.2px;
`;
