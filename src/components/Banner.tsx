import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  EffectCoverflow
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Product } from '../types/Products'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function Banner () {

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await fetch(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    )
    const json = await response.json()
    return json
  }

  useEffect(() => {
    setLoading(true)
    fetchData().then(data => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  loading && <div className="m-auto">Loading...</div>

  return (
    <Swiper
    className="bg-white mt-10 shadow p-2 min-h-[373px]"
    spaceBetween={7}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false
    }}
    effect={'fade'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={4}
    modules={[EffectCoverflow, Pagination, Autoplay]}
    breakpoints={{
      // when window width is >= 220px
      220: {
        slidesPerView: 1,
        spaceBetween: 10
      }, 650: {
        slidesPerView: 3,
        spaceBetween: 20
      }, 
        // when window width is >= 640px
        1200: {
          slidesPerView: 5,
          spaceBetween: 30
      },
    }}
  >
    {products.map(product => (
      <SwiperSlide key={product.id}>
        {product ? (
        <div className="flex items-center flex-col justify-between">
          <img src={product.image_link} alt={product.name} />
          <h1 className="text-center pt-2 font-light">{product.name}</h1>
       <div className="flex items-center justify-center">
       <span className="flex items-center flex-col">
            <p className="text-green-600 font-xl font-bold pt-3">${product.price}</p>
            <p>
              Ou até 7x de R$ {(product.price / 7).toFixed(2)}
            </p>
            <p>
              No pix/transferência: $ <span className="text-green-600 font-xl font-bold pt-3"> {(product.price - (20 / 1000) * 100).toFixed(2)}
              </span>
            </p>
            <p>com desconto de 20%</p>
          </span>
       </div>
          <Link to={`/details/${product.id}`}>
            <button className="p-3 bg-transparent border-2 border-pink-300  text-pink-500 hover:bg-pink-300 hover:text-white rounded-md m-5 hover:brightness-125 transition">
              Mais informações
            </button>
          </Link>
        </div>) : <div>Loading...</div>}
      </SwiperSlide>
    ))}
  </Swiper>
  )
}