import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
// import { SidebarProvider,SidebarTrigger } from './components/ui/sidebar';

import App from './App.jsx'
import { FirebaseProvider } from './context/FirebaseContext/FirebaseContext.jsx'
import AuthContextProvider from './context/AuthContext/AuthContext.jsx';
// import CartContextProvider from './context/CartContext/CartContext.js';
import CartContextProvider from './context/CartContext/CartContext.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <SidebarProvider> */}
    <CartContextProvider>
    <AuthContextProvider>
   <FirebaseProvider>
    {/* <SidebarTrigger/> */}
    <App />
    </FirebaseProvider>
    </AuthContextProvider>
    </CartContextProvider>
    {/* </SidebarProvider> */}
  </React.StrictMode>,
)
