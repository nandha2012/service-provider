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
import CircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './AppStyle';
const Register =React.lazy(() =>import('./pages/home/register/register'))
const ServiceCategory = React.lazy(() => import('./pages/serviceCategory/main'))
const Profile = React.lazy(()=> import('./pages/profile/profile'));
const Login = React.lazy(()=> import('./pages/home/login/login'))
const HomePage = React.lazy(() =>import('./pages/home/main/home'))
function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
      <AuthProvider>
        <Suspense fallback={ <div className={classes.lodingContainer}>
                  <CircularProgress className={classes.spinner} thickness={4} size={50} />
            </div>}>
          <Switch>
            <Route exact path='/' component={HomePage} />
            {/* <Route exact path='/' render={ ():any=>{window.location.href='/OurGenie/home.html'}} /> */}
            <Route path='/register' component={Register} />
            <Route path='/category' component={ServiceCategory} />
            <Route path='/login' component={Login} />
            <Route path='/userProfile' component={Profile} />
            <Route path='/companyList' render={ ():any=>{window.location.href='/OurGenie/company-list.html'}} />
            {/* <Route path='/userProfile' render={ ():any=>{window.location.href='/OurGenie/user-profile.html'}} 
              <Route path='/' render={ ():any=>{window.location.href='/OurGenie/home.html'}}
            /> 
            
            */
            }
          </Switch>
        </Suspense>
        </AuthProvider>
      </Router>
    </div >
    </Provider>
  );
}

export default App;
