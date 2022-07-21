import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <nav className="w-full flex navbar h-full">
      <ul className="flex gap-5 text-xl relative top-[50%] -translate-y-[15px]">
        <Link to="/" className="text-black">
          Home
        </Link>

        <li className="text-black text-xl bold cursor-pointer" onClick={toggle}>
          Produtos
          {isOpen ? (
            <ul className="flex flex-col bg-gray-100 py-10 pl-5 pr-10 gap-5 text-xl text-start rounded-b-xl rounded-tr-xl transition-all">
              <Link to="/maybelline" className="text-black">
                Maybelline
              </Link>
              <Link to="/loreal" className="text-black">
                Loreal
              </Link>
              <Link to="/nars" className="text-black">
                Nars
              </Link>
              <Link to="/lancome" className="text-black">
                Lancome
              </Link>
              <Link to="/covergirl" className="text-black">
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
