import { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import AppBar from "components/AppBar";
import Container from "components/Container";
import { authOperations, authSelectors } from "redux/auth";
import PrivateRoute from "components/PrivateRoute";
import PublicRoute from "components/PublicRoute";


const HomeView = lazy(() => import('./views/HomeView/HomeView'  /* webpackChunkName: "home-view" */));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'  /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('./views/LoginView/LoginView'  /* webpackChunkName: "login-view" */));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'  /* webpackChunkName: "contacts-view" */));

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <AppBar />
        
        <Switch>
          <Suspense fallback={<p>Loading...</p>}>

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
      </Container>
    )
  );
}