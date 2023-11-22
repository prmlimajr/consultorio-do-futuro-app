import { ArrowRightIcon, XMarkIcon } from 'react-native-heroicons/outline';
import {
  Button,
  ButtonText,
  ButtonWrapper,
  Clickable,
  CloseArea,
  Container,
  Item,
  MenuList,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/useAuth';

interface MenuProps {
  setIsMenuOpen: (value: boolean) => void;
}

export function Menu({ setIsMenuOpen }: MenuProps) {
  const navigator = useNavigation();
  const { signOut, user } = useAuth();

  const handlePress = (route: string, isSigningOut?: string) => {
    if (isSigningOut) {
      signOut();
    }

    navigator.navigate(route);

    setIsMenuOpen(false);
  };

  return (
    <Container>
      <CloseArea>
        <Clickable onPress={() => setIsMenuOpen(false)}>
          <XMarkIcon color="#fff" size={32} />
        </Clickable>
      </CloseArea>

      <MenuList>
        <Clickable onPress={() => handlePress('Home')}>
          <Item>Início</Item>
        </Clickable>
        {!user?.id && (
          <>
            <Clickable onPress={() => handlePress('SignIn')}>
              <Item>Fazer login</Item>
            </Clickable>
            <Clickable onPress={() => handlePress('SignUp')}>
              <Item>Cadastre-se</Item>
            </Clickable>
          </>
        )}
        <Clickable>
          <Item>Mensagens</Item>
        </Clickable>
      </MenuList>

      <ButtonWrapper>
        <Button onPress={() => null}>
          <ButtonText>Agendar</ButtonText>

          <ArrowRightIcon color="#FFF" fill="white" size={16} />
        </Button>
      </ButtonWrapper>

      <MenuList>
        <Clickable onPress={() => handlePress('Home', 'signout')}>
          <Item>Sair</Item>
        </Clickable>
      </MenuList>
    </Container>
  );
}
