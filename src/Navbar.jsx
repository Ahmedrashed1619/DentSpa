import React from 'react';
import logo from './img/logo.png';


export default function Navbar({val , setVal}) {


  return (
        <nav className="navbar fixed-top bg-white shadow py-2" dir={val === 'ar' || val ===  'ur'? 'rtl' : 'ltr'}>
            <div className="container d-flex justify-content-between align-items-center">
                <span className="navbar-brand"><img src={logo} style={{width: '120px'}} alt="logo" /></span>
                <select value={val} onChange={(e) => {setVal(e.target.value)}} dir='ltr' className='form-select bg-select color-select fs-5' style={{width: '90px'}}>
                  <option value="en">En</option>
                  <option value="fr">Fr</option>
                  <option value="ru">Ru</option>
                  <option value="ar">Ar</option>
                  <option value="ur">Ur</option>
                </select>
            </div>
        </nav>
  )
}
