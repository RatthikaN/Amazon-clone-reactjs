
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom'; // ✅ Import this
import './index.css';
import { CartContextProvider } from "./Context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<CartContextProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</CartContextProvider>
  </React.StrictMode>
);


