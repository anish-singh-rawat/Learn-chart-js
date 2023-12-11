import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import TodoApp from './TODOAPP/TodoApp';
import Chart from './ChartJs/Chart';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode='light'></ColorModeScript>
      {/* <App /> */}
      {/* <TodoApp/> */}
    </ChakraProvider>
    <Chart/>
  </React.StrictMode>
);