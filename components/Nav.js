import React from 'react';
import { Flex, Button } from '@chakra-ui/react';
import { useSession, signIn, signOut } from 'next-auth/client';

export default function Nav() {
  const session = useSession();

  return (
    <Flex
      bg="blue.500"
      color="white"
      px="2"
      py="1"
      justifyContent="flex-end"
      shadow="md">
      <Button my="1" colorScheme="blue" onClick={() => signOut()}>
        Sign out
      </Button>
    </Flex>
  );
}
