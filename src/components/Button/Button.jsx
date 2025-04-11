import React from 'react'

const Button = ({name}) => {
  return (
    <button className="btn btn-primary" type="submit"><span className='btn-text'>{name}</span> <span className='btn-bg'></span></button>
  )
}

export default Button
