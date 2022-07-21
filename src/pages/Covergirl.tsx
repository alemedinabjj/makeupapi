import { useEffect, useState } from 'react'


interface products {
  id: number,
  name: string,
  product_type: string,
  brand: string,
  price: number,
  description: string,
  image_link: string,
  category: string,
  createdAt: string,
  updatedAt: string
}


export function Covergirl () {
  const [products, setProducts] = useState<products[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const url = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl')
      .then(response => response.json())
      .then(data => setProducts(data))
    }
    fetchData()
  })

  return (
    <main className="bg-pink-100">
    <section className="w-full min-h-screen text-black">
    <h1 className="text-3xl text-center py-10">Produtos Covergirl</h1>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-10 px-7">
        {

          products.map(product => (
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center justify-center bg-pink-300 w-72 max-h-[600px] rounded-t-full shadow-xl">
                <div className="bg-pink-400 rounded-b-3xl shadow border-2 border-white mb-5 w-full px-2 py-1">
                <h1 className="text-center h-20 pb-3 text-xl">{product.name}</h1>
                </div>
                <img src={product.image_link} alt={product.name[0].toUpperCase()} className="rounded-xl text-gray-500 hover:rotate-12 transition-transform hover:-translate-y-3" />
                <p>Marca: {product.brand[0].toUpperCase() + product.brand.substring(1)}</p>
                <p>Tipo: {product.product_type}</p>
                <p>${product.price}</p>
                <div>
                  <button className="p-3 bg-pink-400 rounded-3xl m-5 hover:brightness-125 transition">Mais informações</button>
                </div>
              </div>
              
            </div>
          ))
        }
      </div>
    </section>
  </main>
  )
}