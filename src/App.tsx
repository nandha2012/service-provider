import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/authContext"
import store from "./redux/store";
const Register =React.lazy(() =>import('./pages/home/register'))
const ServiceCategory = React.lazy(() => import('./pages/serviceCategory'))
const Login = React.lazy(()=> import('./pages/home/login'))
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Register} />
            <Route path='/category' component={ServiceCategory} />
            <Route path='/login' component={Login} />
          </Switch>
        </Suspense>
        </AuthProvider>
      </Router>
    </div >
    </Provider>
  );
}

export default App;
