import { ButtonText, Container } from './styles';

interface ButtonProps {
  onPress: () => void;
  text: string;
  first?: boolean;
}

export function Button({ onPress, text, first }: ButtonProps) {
  return (
    <Container onPress={onPress} first={first}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
