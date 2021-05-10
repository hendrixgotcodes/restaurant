import React from 'react'
import { IoPencil } from 'react-icons/io5'

export default function SignIn() {
    return (
        <div className="section si_section">
            
            <div className="center">

                <div className="flex_child">

                    <header>

                            <div className="header_wrapper">
                            <h1 className="primary_header">SIGN IN</h1>
                            <div className="pHeader_highlighter"></div>
                        </div>
                        <p>Complete the form below to sign in.</p>   

                    </header>


                    <form action="" className="form">

                        <label htmlFor="" className="fm_lbl">
                            <input type="email" className="fm_tb" />
                        </label>

                        <label htmlFor="" className="fm_lbl">
                            <input type="password" className="fm_tb" />
                        </label>


                        <button className="primary_button">
                            <IoPencil fontWeight={800} size={20} /> Sign In 
                        </button>

                    </form>

                </div>

            </div>
            
        </div>
    )
}
