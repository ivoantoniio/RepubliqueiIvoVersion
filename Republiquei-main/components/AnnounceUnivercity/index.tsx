import Image from "next/image";
import { type } from "os";
import { MapPinIcon } from "@heroicons/react/24/solid";
import { FaMale, FaFemale } from "react-icons/fa";
import { IoMaleFemale } from "react-icons/io5";

type AnnounceUnivercityProps = {
    image: string;
    accessibility: string,
    title: string;
    location: string;
}




function AnnounceRepublic({ image, accessibility, title, location}: AnnounceUnivercityProps) {

    return (
        <>
            <div className="transition ease-in-out delay-200 w-full max-w-sm bg-white border-2 mb-8 rounded-lg drop-shadow-md dark:bg-gray-800 dark:border-gray-700 hover:scale-105 text-center flex flex-col">
                <div className="carousel">
                    <div className="carousel-item w-full">
                        <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
                    </div>
                    <div className="carousel-item w-full">
                        <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
                    </div>
                    <div className="carousel-item w-full">
                        <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
                    </div>
                    <div className="carousel-item w-full">
                        <img className="pb-4 rounded-t-lg" src={image} alt={accessibility} />
                    </div>
                </div>
                <div className="px-7 pb-5 text-center">
                    <a>
                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                    </a>
                    <div className="flex justify-between items-center px-3 mt-2.5 mb-5">
                    </div>
                    <div className="pl-20 flex justify-between items-center text-center">
                    <div className="pl-2 flex items-center font-bold text-center">
                        <MapPinIcon className="h-6 w-6 text-red-500 text-center" />
                        <h2 className="text-red-500 text-center">{location}</h2>
                    </div>
                    </div>
                </div>
            </div>
        </>)
}

export default AnnounceRepublic;