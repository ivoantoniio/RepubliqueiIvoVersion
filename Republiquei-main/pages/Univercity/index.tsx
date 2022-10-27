import AnnounceRepublic from "../../components/AnnounceRepublic";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import Pagination from "../../components/Pagination";
import { IoFilterOutline } from "react-icons/io5";
import { useState } from "react";
import { ImSearch } from "react-icons/im";
import AnnounceUnivercity from "../../components/AnnounceUnivercity";

export const AnnounceUnivercityData = [
    {
        image: "/univercityex.jpeg",
        acessibility: "Imagem de Republica",
        title: "FATEC - Faculdade Estadual de Tecnologia de Praia Grande",
        location: "Praia Grande - SP",
    },
    {
        image: "/univercityex.jpeg",
        acessibility: "Imagem de Republica",
        title: "UNS - Uniesquina",
        location: "Santos - SP",
    },    
    {
        image: "/univercityex.jpeg",
        acessibility: "Imagem de Republica",
        title: "Universidade Federal de Sergipe",
        location: "Sergipe - SE",
    }
]


export const Univercity = () => {
    const [search, setSearch] = useState('');

    const filterAnnounceUnivercityData = AnnounceUnivercityData.filter(republica => republica.location.startsWith(search))


    return (
        <>
            <div className="absolute top-5">
                <div className="absolute top-5 right-6">
                    <ImSearch />
                </div>
                <input value={search} type="text" onChange={(e) => setSearch(e.target.value)}
                    className="h-14 w-96 pl-10 pr-20 rounded-lg z-0 focus:shadow focus:outline-none" placeholder="Digite a localização" />
            </div>
            <div className="w-full flex flex-wrap items-center justify-between px-32">
                <h2 className="first-letter:font-bold">{filterAnnounceUnivercityData.length} repúblicas para morar em Praia Grande - SP</h2>
                <div className="flex flex-row gap-2 items-center bg-gray-200 px-4 py-2 rounded border-2 border-gray-500">
                    <IoFilterOutline className="text-gray-800 text-lg" />
                    <h2 className="font-bold">Filtrar</h2>
                </div>
            </div>
            <main className="flex flex-row flex-wrap justify-center gap-4 mt-8 mb-14 text-center">
                {filterAnnounceUnivercityData.map((data, id) =>
                    <AnnounceUnivercity key={id} image={data.image}
                        accessibility={data.acessibility}
                        title={data.title}
                        location={data.location}
                        />
                )}
            </main>
        </>
    )
}
