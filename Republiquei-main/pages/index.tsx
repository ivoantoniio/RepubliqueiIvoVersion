import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { ImSearch } from 'react-icons/im'
import { IoFilterOutline } from 'react-icons/io5'
import AnnounceRepublic from '../components/AnnounceRepublic'
import AnnounceUnivercity from '../components/AnnounceUnivercity'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Pagination from '../components/Pagination'
import { AnnounceRepublicData, SearchLocation } from './searchRepublic'
import { AnnounceUnivercityData} from './Univercity'

const Inicial = () => {
  return (
        <>
        <div className="">
          <img className="absolute top-60 right-80 h-96 w-4/12  shadow-2xl rounded-lg blur-2xl  " src="https://i.pinimg.com/736x/b4/c0/ff/b4c0ff611b5bd34fcbd241e9e4ca76ce.jpg"/>
          <img className="absolute top-52 right-96 h-96 w-4/12  shadow-2xl rounded-lg" src="https://i.pinimg.com/736x/b4/c0/ff/b4c0ff611b5bd34fcbd241e9e4ca76ce.jpg"/>
        </div>

          <div className="flex flex-col space-y-80">
              <div className="flex flex-wrap ">
                <div className="w-full lg:w-10/12 px-4">
                
                    <p className="pt-20 pb-12 pl-32 font-bold text-6xl w-1/2 mb-4">
                       ENCONTRE A SUA REPÚBLICA IDEAL
                   </p>
                </div>
                <div className='pb-20 pl-40 w-1/2'>
                  <h1 className="w-4/5 text-4xl">
                  "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado."
                  </h1>
                  <h4 className="w-4/5 text-1xl pt-4 pl-4">
                                  - Roberto Shinyashiki
                  </h4>
                  <p className="pt-10">
                  <a href="https://uliving.com.br/blog/republica-estudantil-o-que-e-e-como-funciona/" target="_blank" className="text-blue-800 no-underline hover:underline">
                      O que é uma república, e porque eu precisaria de uma?
                  </a>
                  </p>
                </div>
              </div>
          </div>
        </>
 )
 }
 
<p></p>

const Home: NextPage = () => {
  return (
     <div>
      <Head>
        <title>Republiquei</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Inicial />
      <Search />
      <Univercity />
      <Footer />
    </div>
  )
  
}

export function Search() {
  const [search, setSearch] = useState('')

  const filterAnnounceRepublicData = AnnounceRepublicData.filter(republica => republica.location.startsWith(search))


  return (
    
    <main className="flex flex-row flex-wrap justify-center gap-4 mt-8 bg-origin-content p-28 bg-slate-100">
      <div className="text-justify pl-60 flex flex-row space-x-8">
        <h2 className="pb-20 font-bold text-6xl">
            Repúblicas em ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        </h2>
        <h2 className="text-justify pl-96 font-bold text-6xl absolute text-sky-400">
          destaque ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        </h2>
      </div>
        {filterAnnounceRepublicData.map((data, id) => <AnnounceRepublic key={id} image={data.image}
          accessibility={data.acessibility}
          title={data.title}
          location={data.location}
          price={data.price}
          sex={data.sex} />
        )}
      </main>
  )
}

export function Univercity() {
  const [search, setSearch] = useState('')

  const filterAnnounceUnivercityData = AnnounceUnivercityData.filter(republica => republica.location.startsWith(search))


  return (
    <main className="flex flex-row flex-wrap justify-center gap-4 bg-origin-content p-28 bg-slate-800 text-center">
      <div className="text-justify pl-44 flex flex-row space-x-40">
        <h2 className="pb-10 font-bold text-6xl text-white">
            Universidades mais ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        </h2>
        <h2 className="text-justify pl-96 font-bold text-6xl absolute text-rose-600">
          procuradas ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ
        </h2>
      </div>
        {filterAnnounceUnivercityData.map((data, id) => <AnnounceUnivercity key={id} image={data.image}
        accessibility={data.acessibility}
        title={data.title}
        location={data.location}/>
        )}
      </main>
  )
}


export default Home
