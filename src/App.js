import './App.scss';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ConfirmEmail from './pages/ConfirmEmail';

function App() {
  return (
    <BrowserRouter>
      <div class="App">
        <Switch>
          <Route path="/sign-in">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/forgot-password">
            <ForgotPassword />
          </Route>
          <Route path="/confirm-email">
            <ConfirmEmail />
          </Route>
          <Redirect to="/sign-in" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
