import React from 'react'
import gif from '../../Assets/thanks5.gif'
import './thankyou.css'

function Thankyou() {
  return (
    <div className='thank'>
        <img src={gif} alt=""  className='thank-img'/>
    </div>
  )
}

export default Thankyou