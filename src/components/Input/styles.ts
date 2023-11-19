import styled from 'styled-components/native';

export const Wrapper = styled.View``;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  letter-spacing: 0.4px;
  margin-bottom: 8px;
`;

export const InputContainer = styled.View<{
  isFocused?: boolean;
  hasError?: boolean;
}>`
  background-color: ${({ theme, hasError }) =>
    hasError ? '#FBEFEF' : theme.COLORS.BACKGROUND.GRAY_100};
  border: ${({ isFocused, hasError }) =>
    hasError
      ? '2px solid #C83532'
      : isFocused
        ? '2px solid #c6c6c6'
        : '1px solid #c6c6c6'};
  border-radius: 4px;
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const InputField = styled.TextInput`
  width: 90%;
`;

export const ErrorContainer = styled.View`
  margin-top: 8px;
  flex-direction: row;
  align-items: center;
`;

export const Message = styled.Text`
  margin-left: 4px;
  color: #c83532;
  font-size: 12px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
