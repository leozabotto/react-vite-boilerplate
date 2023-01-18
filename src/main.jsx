import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './templates/App';
import { MyThemeProvider } from './styles/MyThemeProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyThemeProvider>
      <App>Hello, world 🚀</App>
    </MyThemeProvider>
  </React.StrictMode>,
);
