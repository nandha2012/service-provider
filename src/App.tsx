import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/authContext"
import store from "./redux/store";
const Register =React.lazy(() =>import('./pages/home/register/register'))
const ServiceCategory = React.lazy(() => import('./pages/serviceCategory/main'))
const Login = React.lazy(()=> import('./pages/home/login/login'))
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <AuthProvider>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' render={ ():any=>{window.location.href='/OurGenie/home.html'}} />
            <Route path='/register' component={Register} />
            <Route path='/category' component={ServiceCategory} />
            <Route path='/login' component={Login} />
            <Route path='/companyList' render={ ():any=>{window.location.href='/OurGenie/company-list.html'}} />
            <Route path='/userProfile' render={ ():any=>{window.location.href='/OurGenie/user-profile.html'}} />
          </Switch>
        </Suspense>
        </AuthProvider>
      </Router>
    </div >
    </Provider>
  );
}

export default App;
