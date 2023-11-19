import { useNavigation } from '@react-navigation/native';
import { Button } from '../../components/Button';
import { GoBackButton } from '../../components/GoBackButton';
import { Input } from '../../components/Input';
import {
  ButtonWrapper,
  Container,
  Content,
  GreetingContainer,
  GreetingTitle,
  Message,
} from './styles';

export function ForgotPassword() {
  const navigator = useNavigation();

  return (
    <Container>
      <GoBackButton />

      <Content>
        <GreetingContainer>
          <GreetingTitle>Esqueceu a senha?</GreetingTitle>

          <Message>
            Não se preocupe! Insira o {'\n'}e-mail vinculado à sua conta.
          </Message>
        </GreetingContainer>

        <Input label="E-mail" placeholder="Digite seu e-mail" />

        <ButtonWrapper>
          <Button
            text="Confirmar"
            onPress={() => navigator.navigate('ResetPassword')}
          />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
