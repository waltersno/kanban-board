import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { GlobalStyles } from 'app/styles/Globals';
import { appTheme } from 'app/styles/theme';
import { ThemeProvider } from 'styled-components';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={appTheme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </DndProvider>
  </React.StrictMode>,
);
