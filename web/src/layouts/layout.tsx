import React from 'react'

import { Box, Container, Flex, HStack } from '@chakra-ui/react'

import { Navbar } from 'src/features/navbar'
import Routes from 'src/Routes'

export const Layout = () => {
  return (
    <HStack>
      <Box bgColor="teal.50">
        <Navbar />
      </Box>
      <Flex h="100vh" flexGrow="1" bgColor="white">
        <Container maxW="lg" py="10" flexGrow="1">
          <Routes />
        </Container>
      </Flex>
    </HStack>
  )
}
