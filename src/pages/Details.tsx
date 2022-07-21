import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'


export function Details(){
  const [products, setProducts] = useState<any>({})
  const [loading, setLoading] = useState(true)

  const [searchParams] = useSearchParams()
  const productId = searchParams.get('id')

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const url = await fetch(`http://makeup-api.herokuapp.com/api/v1/products/${id}.json`)
      .then(response => response.json())
      .then(data => setProducts(data))
    }
    fetchData()
  },[id])

  return(
    <main>
      <section className="flex">
      <div className="flex flex-col items-center justify-center pt-20">
              <div className="flex flex-col items-center justify-center bg-slate-50  w-72 max-h-[600px]  ">
                <div className=" flex flex-col items-center bg-white   mb-5 w-full px-2 py-1">
                <img src={products.image_link} alt={products.name} className="rounded-xl text-gray-500 hover:rotate-12 transition-transform m-3 hover:-translate-y-3" />
                <h1 className="text-center h-20 pb-3 text-xl text-gray-900">{products.name}</h1>
                </div>
                
                <div className="text-start self-start pl-5" >
                <p>Brand: <span className="font-bold">{products.brand}</span> </p>
                <p>Type: <span className="font-bold">{products.product_type}</span> </p>
                <p className="text-green-600">${products.price}</p>
                <p>
                {products.createdAt}
                </p>
                </div>
              </div>
          
            </div>
            <div className="p-10 bg-slate-100">
              <h1 className='text-3xl font-bold text-center'>Description</h1>
               <h3>
                {products.description}
              </h3>
            </div>
      </section>
    </main>
  )
}