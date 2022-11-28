import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'App';
import { GlobalStyles } from 'app/styles/Globals';
import { appTheme } from 'app/styles/theme';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={appTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
