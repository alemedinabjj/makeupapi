import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full flex navbar h-full">
      <ul className="flex gap-5 text-xl relative top-[50%] -translate-y-[15px]">
        <Link to="/" className="text-black">
          Home
        </Link>
      
        <li className="text-black text-xl bold cursor-pointer" onMouseEnter={toggle} onMouseLeave={toggle} >
         <div className="flex items-center">
         Produtos <MdOutlineKeyboardArrowDown className='flex self-end' />
         </div>
          {isOpen ? (
            <ul className="flex flex-col bg-gray-100 py-10 pl-5 pr-10 gap-5 text-xl text-start rounded-b-xl rounded-tr-xl transition-all" >
              <Link to="/products?brand=maybelline" className=" relative text-black transition hover:after:w-1 hover:after:h-full hover:after:bg-teal-600 hover:after:absolute hover:after:top-0 hover:after:-left-3">
                Maybelline
              </Link>
              <Link to="/products?brand=l'oreal" className="text-black relative transition hover:after:w-1 hover:after:h-full hover:after:bg-teal-600 hover:after:absolute hover:after:top-0 hover:after:-left-3">
                Loreal
              </Link>
              <Link to="/products?brand=zorah" className="text-black relative transition hover:after:w-1 hover:after:h-full hover:after:bg-teal-600 hover:after:absolute hover:after:top-0 hover:after:-left-3">
                Zorah
              </Link>
              <Link to="/products?brand=marcelle" className="text-black relative transition hover:after:w-1 hover:after:h-full hover:after:bg-teal-600 hover:after:absolute hover:after:top-0 hover:after:-left-3">
                Marcelle  
              </Link>
              <Link to="/products?brand=covergirl" className="text-black relative transition hover:after:w-1 hover:after:h-full hover:after:bg-teal-600 hover:after:absolute hover:after:top-0 hover:after:-left-3">
                CoverGirl
              </Link>
            </ul>
          ) : (
            ''
          )}
        </li>
      </ul>
    </nav>
  )
}
