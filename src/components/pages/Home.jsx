import React from 'react'

import {IoLocateOutline} from 'react-icons/io5'
import IllOnlineResto from '../../assets/img/ill_online_resto.svg'
import IlllaptopOutline from '../../assets/img/ill_laptop--outline.svg'
import RestoOne from '../../assets/img/home/resto_1.jpg'

export default function Home() {
    return (
        <>

            <div className="section" style={styles.section1}>
                <div className="center">

                    <div className="flex_child">

                        <div className="header_wrapper">
                            <h1 className="primary_header">
                                LOREM IPSUM DOLOR SIT AMET 
                                <br />
                                CONSECTETUR ADIPICISING ELIT.
                            </h1>
                        <div className="pHeader_highlighter"></div>
                        </div>

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

                        <img src={IllOnlineResto} alt="" className="illus" />

                    </div>
                    {/* <img src={RestoOne} alt="" className="flex_child" /> */}
                    
                </div>
            </div>

            <div className="section" style={{backgroundColor: "#0080FF"}} >
                <div className="center">

                    <div className="flex_child">
                        
                        <div className="header_wrapper">
                            <h1 className="primary_header" style={{color:"#fff"}}>
                            HOW IT WORKS
                            </h1>
                            <div className="pHeader_highlighter"></div>
                        </div>

                        <p style={{color: "#fff"}}>
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

            <div className="section" style={{backgroundColor: ""}} >
                <div className="center">
                     <div className="flex_child">
                        <div className="header_wrapper">
                            <h1 className="primary_header">
                                Featured Restaurants
                            </h1>
                            <div className="pHeader_highlighter"></div>
                        </div>
                    </div>
                    <div className="flex_child"></div>
                </div>
            </div>

            <div className="section" >
                <div className="center">
                    
                   <div className="flex_child">
                       <div className="header_wrapper">
                           <h1 className="primary_header">Get Your Restaurant Online</h1>
                           <div className="pHeader_highlighter"></div>
                       </div>
                   </div>
                   <div className="flex_child"></div>

                </div>
            </div>
            
        </>
    )
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