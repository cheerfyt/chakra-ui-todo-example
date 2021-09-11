import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

import { AddTodo } from './components/AddTodo';
import { TodoList } from './components/TodoList';
import { exampleTasks, Task, TASK_STORAGE_KEY } from './constants';

function App() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const tasks = localStorage.getItem(TASK_STORAGE_KEY);
    if (typeof tasks === 'string') {
      return JSON.parse(tasks);
    }
    return exampleTasks;
  });

  const { colorMode, toggleColorMode } = useColorMode();

  const addTodo = (todo: Task): void => {
    setTasks([...tasks, todo]);
  };

  const delTodo = (id: string): void => {
    const newTodo = tasks.filter((todo) => {
      return todo.id !== id;
    });
    setTasks(newTodo);
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
      <TodoList todoCollection={tasks} delTodo={delTodo} />

      {/* add todo form */}
      <AddTodo add={addTodo} />
    </VStack>
  );
}

export default App;
