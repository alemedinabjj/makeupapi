import { MdOutlineArrowDownward } from 'react-icons/md'
import { AiOutlineStar } from 'react-icons/ai'
import { CardRecomendation } from './CardRecomendation'


export function Recomendations() {
  return (
    <div className='flex items-center justify-center flex-col'>
        <h1 className="text-3xl text-center font-light p-10 flex items-center justify-center ">
      <AiOutlineStar className="mr-2 flex self-end text-violet-500" />
      <span className="italic relative after:w-full after:h-1 after:absolute after:bg-gradient-to-r from-violet-500 to-transparent after:-bottom-1 after:left-0">
      Quem já comprou e recomenda

      </span>{' '}
      <MdOutlineArrowDownward className="animate-bounce text-violet-500" />
    </h1>
      <div className='flex gap-5'>
      <CardRecomendation />
      <CardRecomendation />
      <CardRecomendation />
      </div>
    </div>
  
  )
}
