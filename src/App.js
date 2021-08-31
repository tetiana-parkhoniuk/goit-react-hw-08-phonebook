import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import AppBarMui from 'components/AppBar';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import Loader from 'components/Loader';
import { authOperations, authSelectors } from 'redux/auth';
import styles from './App.module.css';

import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import '@fontsource/roboto';
import { Container } from '@material-ui/core';

const HomeView = lazy(() =>
  import('./views/HomeView/HomeView' /* webpackChunkName: "home-view" */),
);
const RegisterView = lazy(() =>
  import(
    './views/RegisterView/RegisterView' /* webpackChunkName: "register-view" */
  ),
);
const LoginView = lazy(() =>
  import('./views/LoginView/LoginView' /* webpackChunkName: "login-view" */),
);
const ContactsView = lazy(() =>
  import(
    './views/ContactsView/ContactsView' /* webpackChunkName: "contacts-view" */
  ),
);

const theme = createTheme({
  typography: {},
  palette: {
    primary: {
      light: '#6573c3',
      main: '#3f51b5',
      dark: '#2c387e',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffcf33',
      main: '#ffc400',
      dark: '#b28900',
      contrastText: '#fff',
    },
  },
});

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <ThemeProvider theme={theme}>
        <Container maxWidth="md">
          <AppBarMui />
          <ToastContainer autoClose={3000} position="top-right" />

          <div className={styles.bodyContainer}>
            <Switch>
              <Suspense fallback={<Loader />}>
                <PublicRoute exact path="/">
                  <HomeView />
                </PublicRoute>

                <PublicRoute path="/register" restricted>
                  <RegisterView />
                </PublicRoute>

                <PublicRoute path="/login" restricted>
                  <LoginView />
                </PublicRoute>

                <PrivateRoute path="/contacts" redirectTo="/login">
                  <ContactsView />
                </PrivateRoute>
              </Suspense>
            </Switch>
          </div>
        </Container>
      </ThemeProvider>
    )
  );
}
