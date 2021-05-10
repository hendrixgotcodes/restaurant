import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ReactFullPage from "@fullpage/react-fullpage"


const Fullpage = ()=>(

  <ReactFullPage
    licenseKey={'14CDBAB4-76C74D16-957F83C7-94169273'}
    scrollingSpeed= {2000}
    navigation
    controlArrows={false}
    verticalCentered={false}
    fixedElements = '#header'

    render={({state, fullpageApi})=>(

      <ReactFullPage.Wrapper>
        <App fullpageProps={{state, fullpageApi}} />
      </ReactFullPage.Wrapper>

    )}
  
  />

)

ReactDOM.render(
  <React.StrictMode>
    <Fullpage />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
