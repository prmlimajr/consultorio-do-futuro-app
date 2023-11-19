import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/outline';
import { Container } from './styles';

interface GoBackButtonProps {
  backTo?: () => void | null | undefined;
}

export function GoBackButton({ backTo }: GoBackButtonProps) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Container onPress={backTo || handleGoBack}>
      <ChevronLeftIcon color="#424242" size={28} />
    </Container>
  );
}
