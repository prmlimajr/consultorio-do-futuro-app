import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.TEXT.GRAY_900};
  padding: 12px 16px;
  position: absolute;
  top: 24px;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const CloseArea = styled.View`
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const Clickable = styled.TouchableOpacity``;

export const MenuList = styled.View``;

export const Item = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  letter-spacing: 0.2px;
  text-align: center;
  padding: 8px 0;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.View`
  margin-bottom: 20px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
  height: 40px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  letter-spacing: 0.2px;
  margin-right: 8px;
`;
