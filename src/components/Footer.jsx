import React from 'react'

const Footer = () => {
  const timeStamp = new Date().toLocaleString();
  return (
    <div className='footer'>
      <span>{timeStamp}</span>
    </div>
  )
}

export default Footer