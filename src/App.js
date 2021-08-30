import { useEffect, Suspense, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AppBar from "components/AppBar";
import Container from "components/Container";
import { authOperations } from "redux/auth";

const HomeView = lazy(() => import('./views/HomeView/HomeView'  /* webpackChunkName: "home-view" */));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'  /* webpackChunkName: "register-view" */));
const LoginView = lazy(() => import('./views/LoginView/LoginView'  /* webpackChunkName: "login-view" */));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'  /* webpackChunkName: "contacts-view" */));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Suspense fallback={<p>Loading...</p>}>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Suspense>
      </Switch>
    </Container>
  )
}