import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import Home from './components/pages/Home';

import './css/main.css'
import Register from './components/pages/Register';
import SignIn from './components/pages/SignIn';

// import {} from '@fullpage/react-fullpage'


function App({fullpageProps}) {

  return (
    <>
      

      <Router>

        <Header />

        <Switch>

            <Route path="/" exact component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/signin" component={SignIn} />

        </Switch>


      </Router>


      
    </>
  );
}



export default App;
