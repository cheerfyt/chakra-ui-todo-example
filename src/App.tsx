import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { Task, todoExample } from './constants';

function App() {
  const [todoList, setTodoList] = useState<Task[]>(() => {
    const context = localStorage.getItem('todo');
    if (typeof context === 'string') {
      return JSON.parse(context);
    }
    return todoExample;
  });

  const { colorMode, toggleColorMode } = useColorMode();

  const addTodo = (todo: Task): void => {
    setTodoList([...todoList, todo]);
  };

  const delTodo = (id: string): void => {
    const newTodo = todoList.filter((todo) => {
      return todo.id !== id;
    });
    setTodoList(newTodo);
  };

  return (
    <VStack>
      {/* banner */}
      <IconButton
        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
        aria-label=''
        isRound
        alignSelf='flex-end'
        size='lg'
        mr={6}
        mt={6}
        onClick={toggleColorMode}
      />

      {/* header  */}
      <Heading
        fontWeight='extrabold'
        mb={20}
        size='xl'
        bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
        bgClip='text'
      >
        ToDo Application
      </Heading>

      {/* todo */}
      <TodoList todoCollection={todoList} delTodo={delTodo} />

      {/* add todo form */}
      <AddTodo add={addTodo} />
    </VStack>
  );
}

export default App;
