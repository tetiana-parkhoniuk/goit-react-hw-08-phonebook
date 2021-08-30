import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import AppBar from "components/AppBar";
import HomeView from "views/HomeView";
import RegisterView from "views/RegisterView";
import LoginView from "views/LoginView";
import ContactsView from "views/ContactsView";
import Container from "components/Container";
import { authOperations } from "redux/auth";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </Container>
  )
}