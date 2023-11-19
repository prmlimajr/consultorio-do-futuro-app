import { Bars3BottomRightIcon } from 'react-native-heroicons/outline';
import { useClinic } from '../../hooks/useClinic';
import { Container, Logo, LogoPlaceholder, Menu } from './styles';

interface HeaderProps {
  setIsMenuOpen: (value: boolean) => void;
}

export function Header({ setIsMenuOpen }: HeaderProps) {
  const { clinic } = useClinic();

  return (
    <Container>
      {!clinic.logo?.path ? (
        <Logo source={{ uri: clinic.logo?.path }} />
      ) : (
        <LogoPlaceholder>Logotype</LogoPlaceholder>
      )}

      <Menu onPress={() => setIsMenuOpen(true)}>
        <Bars3BottomRightIcon color="#000" fill="black" size={32} />
      </Menu>
    </Container>
  );
}
