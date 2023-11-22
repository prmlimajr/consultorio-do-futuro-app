import { useEffect, useState } from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import { Input } from '../../components/Input';
import {
  ButtonWrapper,
  Container,
  Form,
  HighlightedText,
  ForgotPasswordWrapper,
  GreetingContainer,
  Message,
  GreetingTitle,
  InputWrapper,
  Logo,
  LogoPlaceholder,
  Content,
  Footer,
  Clickable,
} from './styles';
import { Button } from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

export function SignIn() {
  const navigator = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { signIn, loading, user } = useAuth();

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  useEffect(() => {
    if (user?.id) {
      navigator.navigate('Home');
    }
  }, [user]);

  const handleSubmit = async () => {
    await signIn({ email, password });
  };

  const handleChange = (field: string, value: string) => {
    switch (field) {
      case 'email':
        if (!emailRegex.test(value.trim())) {
          setEmail(value.trim());
          return;
        }

        setEmail(value.trim());

        break;
      default:
        setPassword(value.trim());
        break;
    }
  };

  return (
    <Container>
      <GoBackButton />

      <Content>
        <Form>
          <GreetingContainer>
            {/* <Logo source={{ uri: 'https://picsum.photos/200/300' }} /> */}
            <LogoPlaceholder>Logotype</LogoPlaceholder>

            <GreetingTitle>É bom te ver aqui!</GreetingTitle>

            <Message>
              Entre ou cadastre-se para realizar {'\n'} agendamentos conosco.
            </Message>
          </GreetingContainer>

          <InputWrapper>
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              onChangeText={(value) => handleChange('email', value)}
              value={email}
              hasError={email.length > 0 && !emailRegex.test(email)}
            />
          </InputWrapper>

          <Input
            label="Senha"
            placeholder="Digite sua senha"
            icon={isPasswordVisible ? 'eye-off' : 'eye-on'}
            onChangeText={(value) => handleChange('password', value)}
            secureTextEntry={!isPasswordVisible}
            onClickIcon={() => setIsPasswordVisible(!isPasswordVisible)}
            value={password}
          />

          <ForgotPasswordWrapper>
            <HighlightedText
              onPress={() => navigator.navigate('ForgotPassword')}
            >
              Esqueceu a senha?
            </HighlightedText>
          </ForgotPasswordWrapper>

          <ButtonWrapper>
            <Button
              text="Entrar"
              onPress={handleSubmit}
              disabled={loading || !(email && password)}
              loading={loading}
            />
          </ButtonWrapper>
        </Form>

        <Footer>
          <Message>Ainda não tem uma conta? </Message>

          <Clickable onPress={() => navigator.navigate('SignUp')}>
            <HighlightedText>Cadastre-se</HighlightedText>
          </Clickable>
        </Footer>
      </Content>
    </Container>
  );
}
