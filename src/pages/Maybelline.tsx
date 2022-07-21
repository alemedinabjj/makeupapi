import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export function Maybelline() {
  const [products, setProducts] = useState<products[]>([])
  const [loading, setLoading] = useState(true)

  const [data, setData] = useState('')

  const handleChange = (event: any) => {
    return setData(event.target.value)
  }

  interface products {
    id: number
    name: string
    product_type: string
    brand: string
    price: number
    description: string
    image_link: string
    category: string
    createdAt: string
    updatedAt: string
  }
  useEffect(() => {
    const dataFetch = async () => {
      const url = await fetch(
        'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
      )
        .then(response => response.json())
        .then(data => setProducts(data))
    }

    dataFetch()
  }, [])

  return (
    <main className="bg-slate-100">
      <section className="w-full min-h-screen text-black">
        <h1 className="text-3xl text-center py-10">Produtos Maybelline</h1>
        <div className="m-auto">
          <div>
            <select name="" id="" onChange={handleChange}>
              <option value="">All</option>
              <option value="bronzer">Bronzer</option>
              <option value="lipstick">Lipstick</option>
              <option value="mascara">Mascara</option>
              <option value="eyeliner">Eyeliner</option>
              <option value="eyebrow">Eyebrow</option>
              <option value="foundation">Foundation</option>
              <option value="blush">Blush</option>
              <option value="lip_liner">Lipliner</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 px-7">
          {products
            .filter(product => product.product_type === data)
            .map(product => (
             <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-slate-50  w-72 max-h-[600px] ">
                <div className=" flex flex-col items-center bg-white   mb-5 w-full px-2 py-1">
                  <img
                    src={product.image_link}
                    alt={product.name}
                    className="rounded-xl text-gray-500 hover:rotate-12 transition-transform m-3 hover:-translate-y-3"
                  />
                  <h1 className="text-center h-20 pb-3 text-xl text-gray-900">
                    {product.name}
                  </h1>
                </div>

                <div className="text-start self-start pl-5">
                  <p>
                    Marca:{' '}
                    <span className="font-bold">
                      {product.brand[0].toUpperCase() +
                        product.brand.substring(1)}
                    </span>{' '}
                  </p>
                  <p>
                    Tipo:{' '}
                    <span className="font-bold">{product.product_type}</span>{' '}
                  </p>
                  <p className="text-green-600">${product.price}</p>
                </div>
                <div>
                  <Link to={`/details/${product.id}`}>
                    <button className="p-3 bg-pink-400 text-white rounded-md m-5 hover:brightness-125 transition">
                      Mais informações
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            ))}
          {products.map(product => (
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-slate-50  w-72 max-h-[600px] ">
                <div className=" flex flex-col items-center bg-white   mb-5 w-full px-2 py-1">
                  <img
                    src={product.image_link}
                    alt={product.name}
                    className="rounded-xl text-gray-500 hover:rotate-12 transition-transform m-3 hover:-translate-y-3"
                  />
                  <h1 className="text-center h-20 pb-3 text-xl text-gray-900">
                    {product.name}
                  </h1>
                </div>

                <div className="text-start self-start pl-5">
                  <p>
                    Marca:{' '}
                    <span className="font-bold">
                      {product.brand[0].toUpperCase() +
                        product.brand.substring(1)}
                    </span>{' '}
                  </p>
                  <p>
                    Tipo:{' '}
                    <span className="font-bold">{product.product_type}</span>{' '}
                  </p>
                  <p className="text-green-600">${product.price}</p>
                </div>
                <div>
                  <Link to={`/details/${product.id}`}>
                    <button className="p-3 bg-pink-400 text-white rounded-md m-5 hover:brightness-125 transition">
                      Mais informações
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
