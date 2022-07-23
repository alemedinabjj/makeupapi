import { useEffect, useState } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

export function ButtonToTop() {
const [btn, showBtn] = useState(false)

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        showBtn(true)
      } else {
        showBtn(false)
      }
    })
  })

  return (
    <>
    
    {btn && (
      <button
      className="fixed bottom-0 right-0 m-5 p-3 bg-pink-400 text-white rounded-md hover:brightness-125 transition"
      onClick={toTop}
    >
      <i><BsFillArrowUpCircleFill size={30} /></i>
    </button>
    )}

    </>

  )
}