import { ActivityIndicator } from 'react-native';
import { Container } from './styles';

export function Loader() {
  return (
    <Container>
      <ActivityIndicator color="#fff" size="large" />
    </Container>
  );
}
