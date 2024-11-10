"use client";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import GoBackButton from "@/components/GoBackBtn";
import Carousel from "@/components/Carousel";
import Ticket from "@/components/Ticket";

import { Playfair_Display } from "next/font/google";
export const titleFont = Playfair_Display({ subsets: ["latin"] });

const christmasImages = ["/xmasx.jpg", "/xmas2.jpg", "/xmas3.jpg", "/xmas4.jpg"];
const availableDates = [
  { date: "16 de Nov", available: true },
  { date: "17 de Nov", available: true },
  { date: "23 de Nov", available: true },
  { date: "24 de Nov", available: true },
  { date: "29 de Nov", available: true },
  { date: "06 de Dic", available: true },
  { date: "07 de Dic", available: true },
  { date: "08 de Dic", available: true },
];
const tickets = [
  {
    name: "Blanco",
    description:
      "20 MIN DE SESIÓN, 5 FOTOGRAFIAS DIGITALES, 1 POLAROID IMPRESA",
    cost: "30 USD",
    presale: false,
  },
  {
    name: "AZUL",
    description:
      "30 MIN DE SESIÓN, 10 FOTOGRAFIAS DIGITALES, 1 POLAROID IMPRESA",
    cost: "40 USD",
    presale: true,
  },
  {
    name: "PLATA",
    description: "30 MIN DE SESIÓN, 15 FOTOGRAFIAS DIGITALES, 1 POSTAL IMPRESA",
    cost: "45 USD",
    presale: true,
  },
  {
    name: "ORO",
    description:
      "35 MIN DE SESIÓN, 2 CAMBIOS DE VESTUARIO, 15 FOTOGRAFIAS DIGITALES, 1 POSTAL IMPRESA",
    cost: "55 USD",
    presale: true,
  },
  {
    name: "PLATINO",
    description:
      "40 MIN DE SESIÓN, 2 CAMBIOS DE VESTUARIO, 15 FOTOGRAFIAS DIGITALES, 1 POSTAL IMPRESA, 1 MINI CLIP AUDIOVISUAL DE @bryanninor",
    cost: "80 USD",
    ig: "https://www.instagram.com/bryanninor",
    presale: true,
  },
  {
    name: "DIAMANTE",
    description:
      "40 MIN DE SESIÓN, 2 CAMBIOS de vestuario, 20 FOTOGRAFIAS DIGITALES, 1 POSTAL IMPRESA, 1 CLIP AUDIOVISUAL DE @bryanninor",
    cost: "85 USD",
    ig: "https://www.instagram.com/bryanninor",
    presale: true,
  },
];

export default function Navidad() {
  const generateWhatsAppLink = (plan) => {
    const phoneNumber = "+5804129207967";
    const message = encodeURIComponent(
      `¡Hola! Me gustaría reservar el ${plan} para la Mini Sesión de Navidad.`
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center py-4 px-8 bg-black">
        <GoBackButton />
        <Image src={logo} alt="logo" width={150} height={150} className="ml-10"/>
        <div />
      </div>

      <section className="w-full mx-auto flex flex-col sm:flex-row justify-between bg-[#ffebe7]">
        <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-4">
            <div className={`${titleFont.className} text-5xl text-[#323336]`}>
              Mini Sesiones
            </div>
            <div
              className={`${titleFont.className} font-semibold text-6xl text-red-700`}
            >
              Navidad 2024
            </div>
          </div>
          <p className="text-lg text-[#323336] mb-4">
            ¡<b>PRE VENTA</b> <b className="line-through"> disponible!</b>
          </p>
          <p className="text-lg text-[#323336]">
            Es mi segundo año creando este set.
          </p>
          <p className="text-lg text-[#323336]">
            Tendré un espacio nuevo y completamente sorpresa para ti.
          </p>
        </div>
        <div className="w-full sm:w-1/2">
          <Carousel images={christmasImages} intervalTime={3000} />
        </div>
      </section>

      <section className="bg-white p-6 md:py-[100px] md:px-24 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1
            className={`${titleFont.className} text-5xl text-red-700 mb-24 text-center`}
          >
            Paquetes Fotográficos
          </h1>
          <div className="flex flex-wrap gap-[40px]">
            {tickets.map((ticket, index) => (
              <div className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-40px)]"  key={index}>
                <Ticket
                item={ticket} 
                onClick={generateWhatsAppLink} 
                />
              </div>
            ))}
          </div>
          <div className="w-full mt-8">
            <p className="text-lg text-[#a6a6a6] mb-4 text-center">
              No hay reembolsos en ediciones especiales.
              <br />
              Siempre puedes utilizar tu crédito para otra fecha y hora.
              <br/>
              <br/>
              <span className="font-extrabold text-red-700">FOTOS EXTRAS</span>
            </p>
            <div className="flex justify-center space-x-2">
              <span className="bg-gray-200 text-red-700 px-3 py-1 rounded-full text-xl">2 USD C/U</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f1f1f1] p-6 md:p-24 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className={`${titleFont.className} text-5xl text-[#323336] mb-2`}>
            Planes de Pago
          </h1>
          <div>
            <p className="text-lg text-[#323336] mb-1 font-medium mb-5">
              Tienes la oportunidad de apartar tu cupo y cancelar en{" "}
              <span className="text-[#b92a49] font-bold">
                {" "}
                TRES (03) CUOTAS
              </span>
            </p>
            <h1 className="text-xl font-bold text-[#323336]">
              Fechas de Pago:
            </h1>
            <div className="text-[#b92a49] font-semibold">
              <p>15 de Octubre</p>
              <p>30 de Octubre</p>
              <p>15 de Noviembre</p>
            </div>
            <br />
            <p className="text-md text-[#323336] mb-4">
              Estos planes de pago no son aplicables a la pre-venta.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#ffebe7] p-4 shadow-lg">
          <h1 className={`text-3xl text-red-700 mb-6 ${titleFont.className}`}>
            Fechas Disponibles
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {availableDates.map((date, index) => (
              <div
                key={index}
                className={`cursor-pointer px-4 py-2 rounded-lg text-white ${
                  date.available ? "bg-red-700" : "bg-[#a6a6a6] line-through"
                }`}
              >
                {date.date}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="p-6 flex items-center justify-center">
        <div className="flex space-x-8">
          <Link
            href="https://www.instagram.com/soyevaph/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span className="text-lg text-[#a6a6a6]">Instagram</span>
          </Link>

          <Link
            href="https://wa.me/+5804129207967"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <span className="text-lg text-[#a6a6a6]">WhatsApp</span>
          </Link>

          <Link
            href="mailto:evargasabg@gmail.com"
            className="flex items-center space-x-2"
          >
            <span className="text-lg text-[#a6a6a6]">Email</span>
          </Link>
        </div>
      </footer>
    </>
  );
}