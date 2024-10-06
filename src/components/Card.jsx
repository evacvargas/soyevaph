import Image from "next/image";
import Link from "next/link";
import Imagen from '../../public/wedding-cover.jpg';


export default function Card({img, msg, title}){
  return (
      <div className="w-1/4 flex gap-2">
        <Link
          href={'/home'}
          role="button"
          className="bg-[#a6a6a6] flex flex-col items-center w-full p-3 rounded-lg justify-between h-52 object-fill"
          // style={{ backgroundImage: `url(${Imagen.src})` }}
        >
          <h1 className="text-white">
            {title}
          </h1>
          <Image
            src={img}
            height={100}
            width={100}
            alt="cover"
            className="relative h-70"
            loading="lazy"
            objectFit="scale-dow"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-white text-xs text-center">{msg}</h1>
            <button
            className="text-white"
            >
              Llevame al album
            </button>
          </div>
        </Link>
      </div>
  )
};