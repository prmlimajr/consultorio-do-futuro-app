import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ first?: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
  height: 40px;
  margin-right: ${({ first }) => (first ? '16px' : '0')};
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.TEXT.WHITE};
`;
