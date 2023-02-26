import React from 'react';
import logo from './img/logo.png';


export default function Navbar({val , setVal}) {


  return (
        <nav className="navbar fixed-top bg-white shadow py-0" dir={val === 'ar' || val ===  'ur'? 'rtl' : 'ltr'}>
            <div className="container d-flex justify-content-between align-items-center">
                <span className="navbar-brand"><img src={logo} style={{width: '120px' , height: '65px'}} alt="logo" /></span>
                <select value={val} onChange={(e) => {setVal(e.target.value)}} dir='ltr' className='form-select bg-select color-select fs-5' style={{width: '100px'}}>
                  <option value="ar">Arabic</option>
                  <option value="en">English</option>
                  <option value="fr">French</option>
                  <option value="ru">Russian</option>
                  <option value="ur">Turkish</option>
                </select>
            </div>
        </nav>
  )
}
