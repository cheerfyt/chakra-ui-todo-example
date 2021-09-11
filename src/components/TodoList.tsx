import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaTrash } from 'react-icons/fa';

import { Task } from '../constants';

export interface TodoListProps {
  todoCollection: Task[];

  delTodo(id: string): void;
}

export function TodoList({
  todoCollection,
  delTodo,
}: TodoListProps): JSX.Element {
  return todoCollection.length > 0 ? (
    <VStack
      divider={<StackDivider />}
      p={4}
      w='100%'
      maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
      borderWidth={2}
      borderColor='gray.100'
      borderRadius='lg'
      alignItems='stretch'
    >
      {todoCollection.map((todo) => {
        return (
          <HStack key={todo.id}>
            <Text ml={10}>{todo.text}</Text>
            <Spacer />
            <IconButton
              icon={<FaTrash />}
              aria-label=''
              isRound
              onClick={() => delTodo(todo.id)}
            />
          </HStack>
        );
      })}
    </VStack>
  ) : (
    <Badge p={4} m={4} colorScheme='green' borderRadius='lg'>
      {'No tasks here, have a rest'}
    </Badge>
  );
}
