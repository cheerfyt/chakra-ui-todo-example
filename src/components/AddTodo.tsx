import { Button, HStack, Input, useToast } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React, { SyntheticEvent, useState } from 'react';

import { Task } from '../constants';

export interface AddTodoProps {
  add(todo: Task): void;
}

export function AddTodo({ add }: AddTodoProps): JSX.Element {
  const [context, setContext] = useState<string>('');
  const toast = useToast();

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    if (!context) {
      toast({
        description: 'Please input task title',
        isClosable: true,
        duration: 2000,
        status: 'error',
        position: 'top-right',
      });
    } else {
      const todo: Task = {
        id: nanoid(),
        text: context,
      };
      add(todo);
      setContext('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt={10}>
        <Input
          type='text'
          variant='outline'
          value={context}
          onChange={(e) => setContext(e.target.value)}
        />
        <Button colorScheme='orange' type='submit'>
          Add Task
        </Button>
      </HStack>
    </form>
  );
}
