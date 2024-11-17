import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VeryfyUser  from './utils/verifyUser';
import Login from './pages/login/login';
import Dashboard from './pages/dashboard/dashboard';
import Register from './pages/register/register';
import RecupCont from './pages/recupCont/recupCont';
import NewPassword from './pages/newPassword/newPassword';
import VerifyCode from './pages/verifyCode/verifyCode';
import { ThemeProvider } from './utils/ThemeCtx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgotMyPassword',
    element: <RecupCont />,
  },
  {
    path: '/dashboard',
    element: <VeryfyUser element={<Dashboard />} route='/'/>,
  }, 
  {
    path: '/newPassword',
    element: <NewPassword />,
  },
  {
    path: '/verifyCode',
    element: <VerifyCode />,
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
