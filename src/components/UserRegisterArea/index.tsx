import { useNavigation } from '@react-navigation/native';
import { Button } from '../Button';
import { Container } from './styles';

export function UserRegisterArea() {
  const navigation = useNavigation();
  return (
    <Container>
      <Button
        onPress={() => navigation.navigate('SignIn')}
        text="Fazer login"
        first
      />

      <Button
        onPress={() => navigation.navigate('SignUp')}
        text="Cadastre-se"
      />
    </Container>
  );
}
