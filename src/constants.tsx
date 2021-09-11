import { extendTheme } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

export interface Task {
  id: string;
  text: string;
}

export const todoExample: Task[] = [
  {
    id: nanoid(),
    text: 'item1',
  },
  {
    id: nanoid(),
    text: 'item2',
  },
];

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
});
