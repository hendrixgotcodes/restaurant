import React from 'react'

import {IoLocateOutline} from 'react-icons/io5'
import {ReactComponent as Logo} from './assets/img/logo.svg'
import IllOnlineResto from './assets/img/ill_online_resto.svg'
import IlllaptopOutline from './assets/img/ill_laptop--outline.svg'

import './css/main.css'
import './css/App.css'
// import {} from '@fullpage/react-fullpage'


function App() {
  return (
    <>
      <nav id="header" className="nav" style={styles.header}>
        
          <div className="center">

              <Logo className="nav_logo" />

              <ul className="nav_links">
                <li className="nav_link current">
                  <span>home</span>
                </li>
                <li className="nav_link">
                  <span>register</span>
                </li>
                <li className="nav_link">
                  <span>sign in</span>
                </li>
              </ul>

          </div>

      </nav>

      <div className="section" style={styles.section1}>
        <div className="center">

          <div className="flex_child">

            <h1 className="primary_header">
              LOREM IPSUM DOLOR SIT AMET 
              CONSECTETUR ADIPICISING ELIT.
            </h1>

            <p>
              jnjfnjnfffkmfkmskmkskfknsknfknksnfknksnknksnfkfnk
              nsknfknksnfknkffknfkknf. ffknsknknksnfknfknknfknfknkn.
              ffkndfksnkfnknfknfknfknfknfkffd jijrijijririjrijirjirija.
              iorhihwriipwiwiponiviniwnrinreiegninrinienrinbioernoiwni
              wnniwninoin.
            </p>

            <button className="primary_button">
              <IoLocateOutline fontWeight={800} size={20} /> Locate A Restaurant Near You
            </button>

          </div>

          <div className="flex_child">

            {/* <IllOnlineResto className="illus" /> */}
            <img src={IllOnlineResto} alt="" className="illus" />

          </div>
          
        </div>
      </div>

      <div className="section" >
        <div className="center">

            <div className="flex_child">
                <h1 className="primary_header">
                  HOW IT WORKS
                </h1>

                <p>
                    1. jnjfnjnfffkmfkmskmkskfknsknfknksnfknksnknksnfkfnk
                    nsknfknksnfknkffknfkknf. ffknsknknksnfknfknknfknfknkn.
                      <br/><br/>
                    2. ffkndfksnkfnknfknfknfknfknfkffd jijrijijririjrijirjirija.
                      <br/>  <br/>
                    3. iorhihwriipwiwiponiviniwnrinreiegninrinienrinbioernoiwni
                    wnniwninoin.
                </p>
            </div>

            <div className="flex_child">

                  <img src={IlllaptopOutline} alt="" className="illus illus-lg" />

            </div>

        </div>
      </div>

      <div className="section" >
        <div className="center"></div>
      </div>
      <div className="section" >
        <div className="center"></div>
      </div>
    </>
  );
}

const styles= {

    header:{
      // backgroundColor: "#333",
      // color: '#fff',
      // position: "fixed",
      // top: 0,
      // left: 0,
      // width: '100%',
      // height: '5%',
      // display: 'flex',
      // justityContent: 'center',
      // alignItems: 'center',
      // padding: '0rem 1rem'
    },
    section1: {
      backgroundColor: "#EFEFEF",
      // padding: '5% 1rem'
    },
    section2: {
      backgroundColor: "#EFEFEF"
    }

}

export default App;
