import { Navbar } from "./Navbar";

export function Header() {
  return(
    <header className="w-full flex p-10 h-20 bg-gray-100 fixed top-0 left-0 z-10 shadow">
      <div className="flex items-start"> 
        <Navbar />
      </div>
    
    </header>
  )
}