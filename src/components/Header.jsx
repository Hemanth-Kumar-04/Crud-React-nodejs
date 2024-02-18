import React from 'react'
import {Navbar} from 'flowbite-react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <Navbar className='border-b-2'>
        <Link
         to="/" className='self-center whitespace-nowrap text-sm sm:text-xl'>
          <span>
            Sample
          </span>
          Blog
        </Link>
      
      </Navbar>
    </div>
  )
}

export default Header
