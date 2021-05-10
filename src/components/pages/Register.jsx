import React from 'react'
import { IoPencil } from 'react-icons/io5'

export default function Register() {
    return (
        
        <div className="section rg_section">
            
            <div className="center">

                <div className="flex_child">

                    <header>

                            <div className="header_wrapper">
                            <h1 className="primary_header">Register</h1>
                            <div className="pHeader_highlighter"></div>
                        </div>
                        <p>Complete the form below to register.</p>   

                    </header>


                    <form action="" className="form">

                        <label htmlFor="" className="fm_lbl">
                            <input type="text" className="fm_tb" />
                        </label>

                        <label htmlFor="" className="fm_lbl">
                            <input type="email" className="fm_tb" />
                        </label>

                        <label htmlFor="" className="fm_lbl">
                            <input type="phone" className="fm_tb" />
                        </label>

                        <label htmlFor="" className="fm_lbl">
                            <input type="address" className="fm_tb" />
                        </label>

                        <button className="primary_button">
                            <IoPencil fontWeight={800} size={20} /> Sign Up 
                        </button>

                    </form>

                </div>

            </div>
            
        </div>
    )
}
