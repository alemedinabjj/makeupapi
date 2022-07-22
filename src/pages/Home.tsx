import { MdOutlineArrowDownward } from 'react-icons/md'
import { Banner } from '../components/Banner'
import { BannerMaisVendidos } from '../components/BannerMaisVendidos'
import { Recomendations } from '../components/Recomendations'

export function Home() {
  return (
    <main className="min-h-screen">
      <section className="">
        <div className="pt-5">
          <h1 className="text-3xl text-center font-light p-10">
            Welcome to{' '}
            <span className="italic relative after:w-full after:h-1 after:absolute after:bg-gradient-to-r from-violet-500 to-transparent after:bottom-0 after:left-0">
              makeup
            </span>{' '}
            webpage!
          </h1>
        </div>
        <Banner />
        <h1></h1>

        <div>
          <div>
            <h1 className="text-3xl text-center font-light p-10 flex items-center justify-center ">
              <span className="italic relative after:w-full after:h-1 after:absolute after:bg-gradient-to-r from-violet-500 to-transparent after:bottom-0 after:left-0">
                Os mais vendidos
              </span>{' '}
              <MdOutlineArrowDownward className="animate-bounce text-violet-500" />
            </h1>
          </div>
        </div>
        <BannerMaisVendidos />
        <Recomendations />
      </section>
    </main>
  )
}
