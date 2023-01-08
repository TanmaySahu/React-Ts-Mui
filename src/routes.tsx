import { Suspense, lazy } from 'react';
import type { PartialRouteObject } from 'react-router';
import AuthGuard from './components/AuthGuard';
import DashboardLayout from './components/dashboard/DashboardLayout';
import GuestGuard from './components/GuestGuard';
import LoadingScreen from './components/LoadingScreen';

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
);

// Authentication pages

const Login = Loadable(lazy(() => import('./pages/authentication/Login')));
// const PasswordRecovery = Loadable(lazy(() => import('./pages/authentication/PasswordRecovery')));
// const PasswordReset = Loadable(lazy(() => import('./pages/authentication/PasswordReset')));
const Register = Loadable(lazy(() => import('./pages/authentication/Register')));
// const VerifyCode = Loadable(lazy(() => import('./pages/authentication/VerifyCode')));

// Dashboard pages

const Overview = Loadable(lazy(() => import('./pages/dashboard/Overview')));

const routes: PartialRouteObject[] = [
  {
    path: '*',
    children: [
      {
        path: '/',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        )
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        )
      },
      {
        path: 'app',
        element: (
          <AuthGuard>
            <DashboardLayout />
          </AuthGuard>
        ),
        children: [
          {
            path: '/',
            element: <Overview />
          },
        ]
      }
    ]
  }
];

export default routes;
