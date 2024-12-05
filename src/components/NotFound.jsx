import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex flex-col gap-2'>404 - Page Not Found
        <Link to='/'>Home from Link</Link>       
    </div>
  )
}

export default NotFound