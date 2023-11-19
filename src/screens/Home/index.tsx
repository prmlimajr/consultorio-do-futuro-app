import { useEffect, useState } from 'react';
import { BlogPost } from '../../components/BlogPost';
import { Header } from '../../components/Header';
import { ServiceCard } from '../../components/ServiceCard';
import { UserRegisterArea } from '../../components/UserRegisterArea';
import { BlogPostType } from '../../types/blog-post';
import {
  Bold,
  Container,
  GreetingContainer,
  GreetingText,
  GreetingTitle,
  Section,
  SectionTitle,
  Wrapper,
} from './styles';
import { AppError } from '../../utils/AppError';
import { api } from '../../config/api';
import { APP_CONFIG } from '../../config/app-config';
import { FlatList } from 'react-native';
import { Menu } from '../../components/Menu';
import Toast from 'react-native-toast-message';
import { useAuth } from '../../hooks/useAuth';

export function Home() {
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPostType[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    async function fetchBlogPosts() {
      try {
        setLoading(true);
        setHasError(false);

        const { data } = await api.get(
          `blog-post/${APP_CONFIG.clinicId}?page=${currentPage}&size=4`,
        );

        setCurrentPage(data.currentPage);
        setLastPage(data.lastPage);
        setBlogPosts(data.data);
      } catch (error) {
        setHasError(true);
        const isAppError = error instanceof AppError;

        const message = isAppError
          ? error.message
          : 'Ocorreu um erro ao buscar os posts do blog.';

        Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: message,
          position: 'top',
          onPress: () => Toast.hide(),
        });
      } finally {
        setLoading(false);
      }
    }

    fetchBlogPosts();
  }, []);

  const fetchNextPage = async () => {
    if (currentPage === lastPage) {
      return;
    }

    try {
      setLoading(true);
      setHasError(false);

      const { data } = await api.get(
        `blog-post/${APP_CONFIG.clinicId}?page=${currentPage + 1}&size=4`,
      );

      setCurrentPage(data.currentPage);
      setLastPage(data.lastPage);
      setBlogPosts((prev) => [...prev, ...data.data]);
    } catch (error) {
      setHasError(true);
      const isAppError = error instanceof AppError;

      const message = isAppError
        ? error.message
        : 'Ocorreu um erro ao buscar os posts do blog.';

      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: message,
        position: 'top',
        onPress: () => Toast.hide(),
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Container>
        <GreetingTitle>Carregando...</GreetingTitle>
      </Container>
    );
  }

  if (hasError) {
    return (
      <Container>
        <GreetingTitle>Ocorreu um erro ao carregar os dados.</GreetingTitle>
      </Container>
    );
  }

  return (
    <Container>
      <Header setIsMenuOpen={setIsMenuOpen} />

      {isMenuOpen && <Menu setIsMenuOpen={setIsMenuOpen} />}

      <FlatList
        data={blogPosts}
        showsVerticalScrollIndicator={false}
        keyExtractor={({ id }) => String(id)}
        ListHeaderComponent={() => {
          return (
            <>
              <UserRegisterArea />

              <GreetingContainer>
                <GreetingTitle>
                  Olá, <Bold>{user.name || 'visitante'}</Bold>,
                </GreetingTitle>

                <GreetingText>vamos cuidar de você!</GreetingText>
              </GreetingContainer>

              <Section>
                <SectionTitle>Serviço(s)</SectionTitle>

                <ServiceCard
                  name="Nome do serviço"
                  image="https://picsum.photos/200/300"
                  length="150"
                  link="https://google.com"
                />
              </Section>

              <Wrapper>
                <SectionTitle>Blog</SectionTitle>
              </Wrapper>
            </>
          );
        }}
        renderItem={({ item }) => {
          const { id, title, content, link, file }: BlogPostType = item;

          return (
            <BlogPost
              key={Math.random()}
              id={id}
              title={title}
              content={content}
              link={link || undefined}
              file={file || undefined}
            />
          );
        }}
        onEndReached={fetchNextPage}
        onEndReachedThreshold={0.2}
        ListFooterComponent={() => {
          if (lastPage === currentPage) {
            return null;
          }

          return <GreetingTitle>Carregando...</GreetingTitle>;
        }}
      />
    </Container>
  );
}
