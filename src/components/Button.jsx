// import React from 'react'


// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-4 mt px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] ${styles}`}>Get Started</button>
  )
}

export default Button;