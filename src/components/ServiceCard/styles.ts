import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  padding: 16px 12px;
  border: 1px solid #efefef;
  elevation: 1;
`;

export const ServiceImage = styled.Image`
  width: 104px;
  height: 104px;
  border-radius: 12px;
`;

export const ContentWrapper = styled.View`
  /* background-color: blue; */
  flex: 1;
  padding: 0 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_900};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  letter-spacing: 0.2px;
`;

export const LengthWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const Length = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 12px;
  letter-spacing: 0.2px;
  margin-left: 4px;
`;

export const ServiceButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND.WHITE};
  height: 40px;
  width: 150px;
  margin-top: 16px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.HIGHLIGHT_COLOR};
  line-height: 26px;
  letter-spacing: 0.2px;
  margin-right: 8px;
`;
