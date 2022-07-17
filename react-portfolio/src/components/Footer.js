import React from 'react'

export default function Footer(){
   return(
      <div className='footer-wrap'>
         <p><span className='highlight'>made with &nbsp;<span className='smile'>&#128578;</span>,&nbsp; <img src={'/assets/react.svg'} alt='react' className='react-logo'/>, &nbsp;and sometimes <img src={'/assets/help-emoji.svg'} alt='help emoji' className='help'/></span></p>
      </div>
   )
}
