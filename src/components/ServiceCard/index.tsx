import { ArrowRightIcon, ClockIcon } from 'react-native-heroicons/outline';
import {
  ServiceButton,
  ButtonText,
  Container,
  ContentWrapper,
  Length,
  LengthWrapper,
  ServiceImage,
  Title,
} from './styles';

interface ServiceCardProps {
  name: string;
  image: string;
  length: string;
  link: string;
}

export function ServiceCard({ name, image, length, link }: ServiceCardProps) {
  const convertIntoTime = (length: string) => {
    const padToTwo = (number: number) => (number <= 9 ? `0${number}` : number);

    const hours = Math.floor(parseInt(length) / 60);
    const minutes = parseInt(length) % 60;

    return `${padToTwo(hours)}:${padToTwo(minutes)}min`;
  };

  return (
    <Container>
      <ServiceImage source={{ uri: image }} />

      <ContentWrapper>
        <Title>{name}</Title>

        <LengthWrapper>
          <ClockIcon color="#757575" fill="none" size={20} />

          <Length>{convertIntoTime(length)}</Length>
        </LengthWrapper>

        <ServiceButton onPress={() => console.log({ link })}>
          <ButtonText>Agendar</ButtonText>

          <ArrowRightIcon color="#2DA59D" fill="white" size={16} />
        </ServiceButton>
      </ContentWrapper>
    </Container>
  );
}
