import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
  EffectCoverflow,
  Mousewheel,
  Keyboard
} from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import { Product } from '../types/Products'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export function BannerMaisVendidos() {

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
      <section className="px-32">
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
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
      </section>
 
  )
}