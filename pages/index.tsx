import Link from 'next/link';
import { Box, Button, Container } from '@chakra-ui/react';
import Layout from '../components/layout';
import { theme } from '../styles/theme';
import BasicLoader from '../components/BasicLoader';
import { useUserSignIn } from '../hooks/use-user-sign-in.hook';
import Character from '../components/Character/Character';

export default function Home() {
  const [isLoading, currentUser] = useUserSignIn();

  if (isLoading) <BasicLoader />;

  return (
    <Layout home>
      <Container pos="relative" mt={5} p={0} width="100%" maxW="inherit">
        {currentUser ? (
          <Box mt="2">
            {currentUser.characters.map((character) => (
              <Box key={character._id.toString()}>
                {character._id.toString()}
                <Character {...character} />
              </Box>
            ))}
            <Link href="/api/auth/logout?returnTo=http%3A%2F%2Flocalhost%3A3000">
              Logout
            </Link>
          </Box>
        ) : (
          <Link href="/api/auth/login">
            <Button
              textColor={theme.colors.gray['100']}
              colorScheme="brandPrimary"
              mt="10rem"
              p={5}
            >
              Login
            </Button>
          </Link>
        )}
      </Container>
    </Layout>
  );
}
