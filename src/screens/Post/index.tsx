/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogPost } from '../../components/BlogPost';
import { Empty } from '../../components/Empty';
import { GoBackButton } from '../../components/GoBackButton';
import { Container, Content, Header, Title } from './styles';

export function Post({ route, navigation }: any) {
  const { title, content, link, file, isDetails } = route.params;

  return (
    <Container>
      <Header>
        <GoBackButton backTo={() => navigation.goBack()} />

        <Title>Detalhes</Title>

        <Empty width={40} height={40} />
      </Header>

      <Content>
        <BlogPost
          title={title}
          content={content}
          link={link || undefined}
          file={file || undefined}
          isDetails={isDetails}
        />
      </Content>
    </Container>
  );
}
