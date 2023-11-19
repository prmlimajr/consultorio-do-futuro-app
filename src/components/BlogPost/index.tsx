import { BlogPostType } from '../../types/blog-post';
import { Button } from '../Button';
import {
  BlogImage,
  ButtonWrapper,
  Container,
  Content,
  ContentContainer,
  Footer,
  Link,
  LinkWrapper,
  Title,
} from './styles';
import { parseHtml } from '../../utils/parseHtml';
import { useNavigation } from '@react-navigation/native';

export function BlogPost({
  title,
  content,
  link,
  file,
  isDetails,
}: BlogPostType) {
  const navigator = useNavigation();

  const truncateContent = (content: string, isDetails = false) => {
    const maxLength = 112;

    if (content.length > maxLength && !isDetails) {
      return content.slice(0, maxLength) + '...';
    }

    return content;
  };

  return (
    <Container>
      {file && (
        <BlogImage
          source={{
            uri: 'https://picsum.photos/200/300',
          }}
        />
      )}

      <ContentContainer>
        <Title>{title}</Title>

        <Content>{truncateContent(parseHtml(content), isDetails)}</Content>

        <Footer>
          {content.length > 112 && !isDetails && (
            <ButtonWrapper>
              <Button
                onPress={() =>
                  navigator.navigate('Post', {
                    title,
                    content,
                    link,
                    file,
                    isDetails: true,
                  })
                }
                text="Ler mais"
              />
            </ButtonWrapper>
          )}

          {link && (
            <LinkWrapper>
              <Link onPress={() => console.log({ link })}>Link</Link>
            </LinkWrapper>
          )}
        </Footer>
      </ContentContainer>
    </Container>
  );
}
