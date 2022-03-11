import React from 'react'
import er404 from '../img/404.png'
import './Styles.css'

const Error404 = () => {
  return (
    <div className='altura error__flex'>
        <img src={er404} alt="error" className='error__img'/>
        
      </div>
  )
}

export default Error404