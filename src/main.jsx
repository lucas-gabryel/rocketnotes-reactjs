import React from 'react';
import ReactDOM from 'react-dom/client';
import { New } from './pages/New' // problema com o nome deails, letra maiuscula e minuscula
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';

import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <New />
    </ThemeProvider>
  </React.StrictMode>
)
