"use client"

import { Box, Flex, Heading, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gra.50','gra.800')}>
      <Stack maxW={'lg'}>
        <Stack align={'center'} justify={'center'}>
          <Heading>ToDo App</Heading>
          <Text>Descreva e gerencie breve atividades</Text>
        </Stack>
        <Box boxShadow={'lg'} rounded={'lg'} p={8} bg={useColorModeValue('white','gray.700')}>
          <Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
