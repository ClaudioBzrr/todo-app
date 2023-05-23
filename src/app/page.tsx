"use client"

import { Box, Checkbox, Flex, FormControl, Heading, Input, InputGroup, InputLeftAddon, InputLeftElement, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import { ChangeEvent, FormEvent, useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'


export default function Home() {
  interface ITask{
    name:string,
    finished:boolean
  }
  const [items,setitems] = useState<ITask[]>([])
  const [currentValue,setCurrentValue] = useState<string>('')


  function handleSubmitTask(event:FormEvent<HTMLFormElement>){
    event.preventDefault()
    setitems([...items,{name:currentValue,finished:false}])
    setCurrentValue('')
  }

  function handleFinishTask(event:ChangeEvent<HTMLInputElement>){
    const {checked,value} = event.target
    const itemsUpdate =  items
    const selectedItem = itemsUpdate.find((e,index) => index ==  Number(value))!
    selectedItem.finished = checked
    setitems(itemsUpdate)
  }

  function handleWriteTask(event:ChangeEvent<HTMLInputElement>){
    const {value} = event.target
    setCurrentValue(value)
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
            <form onSubmit={e => handleSubmitTask(e)}>
              <FormControl>
                <Stack direction={'row'}>
                  <InputGroup variant={'flushed'}>
                    <InputLeftElement>
                      <AiOutlinePlus size={24}/>
                    </InputLeftElement>
                    <Input 
                      type='text'
                      value={currentValue}
                      onChange={e => handleWriteTask(e)}
                    />
                  </InputGroup>
                </Stack>
              </FormControl>
            </form>
            {
              items.map(({name,finished},index) =>(
                <Checkbox
                  defaultChecked={finished}
                  fontStyle={'oblique'} 
                  onChange={e => handleFinishTask(e)} 
                  rounded={'full'}
                  key={index} 
                  value={index}
                >
                    {
                      finished === true ?(
                        <Text as={'del'}>{name}</Text>
                      ):(
                        <Text>{name}</Text>
                      )
                    }
                </Checkbox>
              ))
            }
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}
