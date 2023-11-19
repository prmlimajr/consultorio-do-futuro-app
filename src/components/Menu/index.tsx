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

interface MenuProps {
  setIsMenuOpen: (value: boolean) => void;
}

export function Menu({ setIsMenuOpen }: MenuProps) {
  const navigator = useNavigation();

  return (
    <Container>
      <CloseArea>
        <Clickable onPress={() => setIsMenuOpen(false)}>
          <XMarkIcon color="#fff" size={32} />
        </Clickable>
      </CloseArea>

      <MenuList>
        <Clickable onPress={() => navigator.navigate('Home')}>
          <Item>Início</Item>
        </Clickable>
        <Clickable onPress={() => navigator.navigate('SignIn')}>
          <Item>Fazer login</Item>
        </Clickable>
        <Clickable onPress={() => navigator.navigate('SignUp')}>
          <Item>Cadastre-se</Item>
        </Clickable>
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
    </Container>
  );
}
