import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

const About = () => {
    return (
        <>
        <NavBar/>
        <div className="">
        <h2 className="mt-20 mb-10 pb-10 font-bold text-6xl text-center">
            A melhor solução hoje...
        </h2>
        <h2 className="mt-4 mb-10 pb-10 font-bold text-6xl text-center">
            ...para aqueles que querem fazer melhor amanhã!
        </h2>
        <h2 className="mt-12 text-xl text-center">
            O Republiquei é um software que nasce com a ideia de proporcionar uma melhor e mais estável infraestrutura para estudantes universitários.
        </h2>
        </div>
        <h2 className="mt-10 pt-10 pb-20 font-bold text-6xl text-center bg-slate-800 text-white">
            Como funciona?
        </h2>
        <h2 className="pb-10 text-xl text-center bg-slate-800 text-white">
            1) Proprietários de imóveis sedem suas residências como républicas estudantis, e as alugam.
        </h2>
        <h2 className="pb-10 text-xl text-center bg-slate-800 text-white">
            2) Universitários solicitam moradia nas residências e pagar um valor justo.
        </h2>
        <h2 className="pb-10 text-xl text-center bg-slate-800 text-white">
            3) Todas as repúblicas contam com regras que variam de residência para residência.
        </h2>
        <h2 className="pb-10 text-xl text-center bg-slate-800 text-white">
            Nosso papel é encaixar da melhor maneira possível pessoas entre sí, com o melhor custo benefício e comodidade para todos! :)
        </h2>
        <h2 className="mt-20 mb-12 text-xl text-center">
            Feito de universitários para universitários, nós temos a missão de levar a sua força de vontade a sério!
        </h2>
        <button className="rounded-full text-xl w-1/2 bg-slate-400 text-white ml-80 w-60 h-12">
                        Quero ajudar essa causa
        </button>
        <button className="rounded-full text-xl w-1/2 bg-sky-400 text-white ml-48 w-60 h-12">
                        Sou universitário
        </button>
        <button className="mt-12 rounded-full text-xl w-1/2 bg-pink-600 text-white ml-44 w-60 h-12 mb-24">
                        Sou proprietário
        </button>
        <Footer />
        </>
    )
}

export default About;