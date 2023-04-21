import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'src/App';
import 'src/services/i18n';
import 'src/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <React.Suspense fallback='Loading...'>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
