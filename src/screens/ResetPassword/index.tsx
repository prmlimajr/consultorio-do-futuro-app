import { useState } from 'react';
import { GoBackButton } from '../../components/GoBackButton';
import { Input } from '../../components/Input';
import {
  ButtonWrapper,
  CheckContainer,
  Container,
  Content,
  Dot,
  GreetingContainer,
  GreetingTitle,
  InputWrapper,
  Message,
  RequirementItem,
  RequirementText,
  RequirementsList,
  SuccessButtonWrapper,
  SuccessContainer,
} from './styles';
import { REQUIREMENTS } from '../../utils/passwordRequirements';
import { Button } from '../../components/Button';
import { CheckIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';

export function ResetPassword() {
  const navigator = useNavigation();

  const [success, setSuccess] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordConfirmationVisible, setIsPasswordConfirmationVisible] =
    useState(false);

  if (success) {
    return (
      <SuccessContainer>
        <CheckContainer>
          <CheckIcon color="#23A047" size={64} />
        </CheckContainer>

        <GreetingTitle>Senha alterada {'\n'}com sucesso!</GreetingTitle>

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
      <GoBackButton />

      <Content>
        <GreetingContainer>
          <GreetingTitle>Criando uma {'\n'}nova senha</GreetingTitle>

          <Message>
            Sua nova senha deve ser diferente {'\n'}daquelas usadas
            anteriormente.
          </Message>
        </GreetingContainer>

        <InputWrapper>
          <Input
            label="Senha"
            placeholder="Digite sua senha"
            icon={isPasswordVisible ? 'eye-off' : 'eye-on'}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            onClickIcon={() => setIsPasswordVisible(!isPasswordVisible)}
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

        <ButtonWrapper>
          <Button text="Salvar nova senha" onPress={() => setSuccess(true)} />
        </ButtonWrapper>
      </Content>
    </Container>
  );
}
