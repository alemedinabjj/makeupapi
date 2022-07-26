import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useParams } from 'react-router-dom'

export function Details() {
  const [products, setProducts] = useState<any>({})
  const [loading, setLoading] = useState(true)

  const [searchParams] = useSearchParams()
  const productId = searchParams.get('id')

  const { id } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const url = await fetch(
        `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
      )
        .then(response => response.json())
        .then(data => setProducts(data))
    }
    fetchData()
  }, [id])

  return (
    <main>
      <section className="flex p-10 flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center pt-7">
          <div className="flex flex-col items-center justify-center bg-slate-50  w-72 max-h-[600px]  ">
            <div className=" flex flex-col items-center bg-white   mb-5 w-full px-2 py-1 shadow">
              <img
                src={products.image_link}
                alt={products.name}
                className="rounded-xl text-gray-500 hover:rotate-12 transition-transform m-3 hover:-translate-y-3"
              />
              <h1 className="text-center h-20 pb-5 text-xl text-gray-900">
                {products.name}
              </h1>
            </div>

            <div className="text-start self-start pl-5">
              <p>
                Brand: <span className="font-bold">{products.brand}</span>{' '}
              </p>
              <p>
                Type: <span className="font-bold">{products.product_type}</span>{' '}
              </p>
              <p className="text-green-600">${products.price}</p>
              <p>Created At: {products.created_at?.split('T')[0]}</p>
              <p>Updated At: {products.updated_at?.split('T')[0]}</p>
              <div>
                Colors:{' '}
                {products.product_colors?.map(
                  (color: { colour_name: string; hex_value: string }) => {
                    return (
                      <div
                        className="flex items-center justify-between"
                        key={color.colour_name}
                      >
                        <span className="font-bold" key={color.colour_name}>
                          {color.colour_name}
                        </span>
                        <input
                          type="color"
                          name=""
                          id=""
                          value={color.hex_value}
                          disabled
                        />
                      </div>
                    )
                  }
                )}
                <div className="flex items-center justify-center">
                  {
                    <button className="p-3 mt-5 px-6 bg-pink-400 text-white rounded-md hover:brightness-125 transition">
                      <a href={products?.product_link} target="_blank">
                        Link de Compra
                      </a>
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-10 bg-slate-100 text-center">
          <h1 className="text-3xl font-bold text-center pt-1">Description</h1>
          <h3 className="pt-5">{products.description}</h3>
        </div>
        <Link to="/" className="flex self-end">
          <button className="p-3 px-6 bg-pink-400 text-white rounded-md hover:brightness-125 transition">
            Back
          </button>
        </Link>
      </section>
    </main>
  )
}
