import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  letter-spacing: 0.4px;
  margin-bottom: 8px;
`;

export const InputContainer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.GRAY_100};
  border: 1px solid #c6c6c6;
  border-radius: 4px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputField = styled.TextInput``;
