import { ButtonText } from './styles';
import { useTheme } from 'styled-components';
import { RectButton } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  text: string;
  first?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

export function Button({
  onPress,
  text,
  first,
  loading,
  disabled,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <RectButton
      onPress={disabled ? () => null : onPress}
      enabled={!disabled}
      style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? '#E0E0E0' : theme.COLORS.HIGHLIGHT_COLOR,
        height: 40,
        borderRadius: 8,
        marginRight: first ? 16 : 0,
      }}
    >
      <ButtonText>{text}</ButtonText>

      {loading && <ActivityIndicator color="#fff" style={{ marginLeft: 8 }} />}
    </RectButton>
  );
}
