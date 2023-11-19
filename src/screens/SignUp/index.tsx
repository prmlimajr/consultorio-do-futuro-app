import { useState } from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import {
  ButtonWrapper,
  CheckContainer,
  Clickable,
  Container,
  Content,
  Dot,
  Footer,
  Form,
  GreetingContainer,
  GreetingTitle,
  HighlightedText,
  InputWrapper,
  Message,
  PageNumber,
  PageTitle,
  Pagination,
  RequirementItem,
  RequirementText,
  RequirementsList,
  SuccessButtonWrapper,
  SuccessContainer,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { CodeVerifier } from '../../components/CodeVerifier';
import { CheckIcon } from 'react-native-heroicons/outline';
import { REQUIREMENTS } from '../../utils/passwordRequirements';
import { phoneMask } from '../../utils/phoneMask';

export function SignUp() {
  const navigator = useNavigation();

  const [formPage, setFormPage] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);
  const [verifyCode, setVerifyCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

  const handleSubmit = async () => {
    setSuccess(true);
  };

  const sendCode = async () => {
    console.log('send code');
  };

  const validateEmail = (value: string) => {
    if (!emailRegex.test(value.trim())) {
      setEmail(value.trim());
      return;
    }

    setEmail(value.trim());
  };

  const renderPage = () => {
    switch (formPage) {
      case 1:
        return (
          <>
            <InputWrapper>
              <Input
                label="Nome"
                placeholder="Digite seu nome"
                onChangeText={setName}
                value={name}
              />
            </InputWrapper>

            <Input
              label="Telefone"
              placeholder="+55 (00) 00000-0000"
              onChangeText={setPhone}
              value={phoneMask(phone)}
              maxLength={15}
              keyboardType="numeric"
            />
          </>
        );

      case 2:
        return (
          <>
            <InputWrapper>
              <Input
                label="E-mail"
                placeholder="Digite seu e-mail"
                onChangeText={(value) => validateEmail(value)}
                value={email}
                hasError={email.length > 0 && !emailRegex.test(email)}
              />
            </InputWrapper>

            <InputWrapper>
              <Input
                label="Senha"
                placeholder="Digite sua senha"
                icon={isPasswordVisible ? 'eye-off' : 'eye-on'}
                onChangeText={setPassword}
                secureTextEntry={!isPasswordVisible}
                onClickIcon={() => setIsPasswordVisible(!isPasswordVisible)}
                value={password}
              />
            </InputWrapper>

            <Input
              label="Confirme a senha"
              placeholder="Digite sua senha"
              icon={isPasswordConfirmationVisible ? 'eye-off' : 'eye-on'}
              onChangeText={setPasswordConfirmation}
              secureTextEntry={!isPasswordConfirmationVisible}
              onClickIcon={() =>
                setIsPasswordConfirmationVisible(!isPasswordConfirmationVisible)
              }
              value={passwordConfirmation}
            />

            <RequirementsList>
              {REQUIREMENTS.map((requirement, index) => {
                return (
                  <RequirementItem key={index.toString()}>
                    <Dot />
                    <RequirementText>{requirement}</RequirementText>
                  </RequirementItem>
                );
              })}
            </RequirementsList>
          </>
        );

      default:
        break;
    }
  };

  if (success) {
    return (
      <SuccessContainer>
        <CheckContainer>
          <CheckIcon color="#23A047" size={64} />
        </CheckContainer>

        <GreetingTitle>Oba, {'\n'}cadastro criado!</GreetingTitle>

        <Message>
          Agora é só acessar com seu e-mail e aproveitar os {'\n'} conteúdos e
          agendar nossos serviços.
        </Message>

        <SuccessButtonWrapper>
          <Button
            text="Voltar para login"
            onPress={() => navigator.navigate('SignIn')}
          />
        </SuccessButtonWrapper>
      </SuccessContainer>
    );
  }

  return (
    <Container>
      <GoBackButton
        backTo={
          formPage > 1 && formPage <= 3
            ? () => setFormPage(formPage - 1)
            : undefined
        }
      />

      <Content>
        <Form>
          {formPage < 3 ? (
            <>
              <GreetingContainer>
                <GreetingTitle>Olá visitante!</GreetingTitle>

                <Message>Cadastre-se para começar</Message>
              </GreetingContainer>

              <Pagination>
                {formPage === 1 ? (
                  <PageTitle>Dados pessoais</PageTitle>
                ) : (
                  <PageTitle>Dados de acesso</PageTitle>
                )}

                <PageNumber>{formPage}/2</PageNumber>
              </Pagination>
            </>
          ) : (
            <>
              <GreetingContainer isVerifying>
                <GreetingTitle>Código de {'\n'}verificação</GreetingTitle>

                <Message>
                  Digite o código de verificação que acabamos de {'\n'} enviar
                  em seu endereço de e-mail.
                </Message>
              </GreetingContainer>

              <CodeVerifier code={verifyCode} setCode={setVerifyCode} />
            </>
          )}

          {renderPage()}

          <ButtonWrapper>
            <Button
              text={formPage < 3 ? 'Continuar' : 'Verificar'}
              onPress={() => (formPage === 1 ? setFormPage(2) : handleSubmit())}
              disabled={
                (formPage === 1 && (!name || phone.length < 14)) ||
                (formPage === 2 &&
                  (!email || !password || !passwordConfirmation))
              }
            />
          </ButtonWrapper>
        </Form>

        <Footer isVerifying={formPage === 3}>
          {formPage === 3 ? (
            <>
              <Message>Não recebeu o código? </Message>

              <Clickable>
                <HighlightedText onPress={() => sendCode()}>
                  Reenviar
                </HighlightedText>
              </Clickable>
            </>
          ) : (
            <>
              <Message>Tem uma conta? </Message>

              <Clickable onPress={() => navigator.navigate('SignIn')}>
                <HighlightedText>Fazer login</HighlightedText>
              </Clickable>
            </>
          )}
        </Footer>
      </Content>
    </Container>
  );
}
