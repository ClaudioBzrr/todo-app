"use client"

import { Box, Checkbox, Flex, FormControl, FormLabel, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
export default function Home() {
  interface ITask{
    name:string,
    finished:boolean
  }
  const [items,setitems] = useState<ITask[]>([])
  const [currentValue,setCurrentValue] = useState<string>('')


  function handleSubmitTask(event:FormEvent<HTMLInputElement>){
    console.log('test')
    setitems([...items,{name:currentValue,finished:false}])
  }

  return (
    <Flex minH={'100vh'} align={'center'} justify={'center'} bg={useColorModeValue('gra.50','gra.800')}>
      <Stack maxW={'lg'}>
        <Stack align={'center'} justify={'center'}>
          <Heading>ToDo App</Heading>
          <Text>Descreva e gerencie breve tarefas</Text>
        </Stack>
        <Box boxShadow={'lg'} rounded={'lg'} p={8} bg={useColorModeValue('white','gray.700')}>
          <Stack>
            <FormControl>
              <Stack direction={'row'}>
                <InputGroup variant={'flushed'}>
                  <InputLeftElement>
                    <AiOutlinePlus size={24}/>
                  </InputLeftElement>
                  <Input 
                    type='text'
                    value={currentValue}
                    onChange={e => setCurrentValue(e.target.value)}
                    onSubmit={e => handleSubmitTask(e)}
                  />
                </InputGroup>
              </Stack>
            </FormControl>
            {
              items.map(({name,finished},index) =>(
                <Box p={8}>
                    <Checkbox rounded={'full'} key={index} isChecked ={finished}>{name}</Checkbox>
                </Box>
              ))
            }
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
