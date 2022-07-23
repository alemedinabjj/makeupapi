import { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { MdOutlineArrowDownward } from 'react-icons/md'
import { Autoplay, Keyboard, Mousewheel, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Product } from '../types/Products'
import { CardRecomendation } from './CardRecomendation'
import { ProductCard } from './ProductCard'


import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Link } from 'react-router-dom'

export function Queridinhos() {
  const [products, setProducts] = useState<Product[]>([])

  const fetchData = async () => {
    const response = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl'
    )
    const json = await response.json()
    return json
  }

  useEffect(() => {
    fetchData().then(data => {
      setProducts(data)
    })
  }, [])

  return (
    <section className="px-32">
       <h1 className="text-3xl text-center font-light p-10 flex items-center justify-center ">
      <AiOutlineStar className="mr-2 flex self-end text-violet-500" />
      <span className="italic relative after:w-full after:h-1 after:absolute after:bg-gradient-to-r from-violet-500 to-transparent after:-bottom-1 after:left-0">
      Os queridinhos da Covergirl

      </span>{' '}
      <MdOutlineArrowDownward className="animate-bounce text-violet-500" />
    </h1>
    <Swiper 
       cssMode={true}
       navigation={true}
       mousewheel={true}
       keyboard={true}
       autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
       modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
       slidesPerView={4}
       className="mySwiper px-20 bg-white shadow"
>
  {products.map(product => (
    <SwiperSlide key={product.id}>
      <ProductCard product={product} />
    </SwiperSlide>
  ))}
</Swiper>
    </section>

)
}
