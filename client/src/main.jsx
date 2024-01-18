import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import App from './App';
// import { MembersProvider } from './contexts/MembersContext';
import { AuthProvider } from './contexts/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/*  <MembersProvider> */}
      <AuthProvider>
        <App />
      </AuthProvider>
      {/*       </MembersProvider>
       */}{' '}
    </BrowserRouter>
  </React.StrictMode>,
);
