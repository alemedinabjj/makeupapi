import { AiFillStar } from 'react-icons/ai'

export function CardRecomendation() {
  return (
    <div>
      <div className="w-96 flex flex-col justify-center items-center bg-violet-400 rounded p-5 text-white relative shadow">
        <div>
          <h1 className="pb-20">
            <blockquote>
              <span className="text-3xl">&ldquo;</span> Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Perferendis aspernatur iusto
              expedita illum labore velit fugiat aliquam at iste maxime!{' '}
              <span className="text-3xl">&rdquo;</span>
            </blockquote>
          </h1>
        </div>
        <div className="absolute -bottom-24 flex items-center flex-col">
          <img
            src="https://randomuser.me/api/portraits/women/89.jpg"
            alt="randomuser"
            className="rounded-full border-4 shadow border-gray-50"
          />
          <p className="text-gray-600 text-center">Mulher</p>
          <div className="flex items-center justify-center">
            <AiFillStar className="text-yellow-500" size={30} />
            <AiFillStar className="text-yellow-500" size={30} />
            <AiFillStar className="text-yellow-500" size={30} />
            <AiFillStar className="text-yellow-500" size={30} />
            <AiFillStar className="text-yellow-500" size={30} />
          </div>
        </div>
      </div>
    </div>
  )
}
