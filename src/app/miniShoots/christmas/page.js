'use client';
import Image from "next/image";
import logo from "../../../../public/logo.png";
import xmasPic from "../../../../public/xmas2.jpg";
import Link from "next/link";
import { useState } from "react";
import GoBackButton from "@/components/GoBackBtn";
import Carousel from "@/components/Carousel";

export default function Navidad() {
  const generateWhatsAppLink = (plan) => {
    const phoneNumber = "+5804129207967"; 
    const message = encodeURIComponent(`¡Hola! Me gustaría reservar el ${plan} para la Mini Sesión de Navidad.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const [availableDates, setAvailableDates] = useState([
    { date: "16 de Nov", available: true },
    { date: "17 de Nov", available: true },
    { date: "23 de Nov", available: true },
    { date: "24 de Nov", available: true },
    { date: "29 de Nov", available: true },
    { date: "06 de Dic", available: true },
    { date: "07 de Dic", available: true },
    { date: "08 de Dic", available: true },
  ]);

    const christmasImages = [
      '/xmasx.jpg',
      '/xmas1.jpg',
      '/xmas3.jpg',
      '/xmas5.jpg',
      '/xmas6.jpg',
      '/xmas7.jpg',
      '/xmas8.jpg',
      '/xmas9.jpg',
    ];

  return (
    <div className="min-h-screen flex flex-col gap-8">
        <GoBackButton />
      <div className="w-full flex justify-center py-4 bg-[#ffebe7]">
        <Image src={logo} alt="logo" width={150} height={150} />
      </div>

      <section className="w-full mx-auto p-10 bg-[#ffebe7]">
        <div className="relative w-full flex justify-center mb-10">
          <Image
            src={xmasPic}
            alt="Mini Sesión Navidad"
            width="70%"
            height={400}
          />
        </div>
        <h1 className="font-serif text-5xl text-red-700 mb-4">
          Mini Sesiones Navidad <span className="font-serif text-5xl text-[#323336]">2024</span>
        </h1>
        <p className="text-lg text-[#323336] mb-4">
          Ya está abierta la PRE VENTA para 2024.
        </p>
        <p className="text-lg text-[#323336] mb-4">
          Es mi segundo año creando este set.
        </p>
        <p className="text-lg text-[#323336] mb-4">
          Tendré un espacio nuevo y completamente sorpresa para ti.
        </p>
      </section>

      <section className="bg-white p-6 md:p-12 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <h1 className="font-serif text-5xl text-[#323336] mb-6">
            <span className="text-red-700">HO HO HO!!!!</span>Paquetes Fotográficos
          </h1>
          <div className="max-w-2xl flex flex-col gap-4">
            {[
              {
                name: "Ticket Blanco",
                description: "20 MIN DE SESIÓN\n5 IMAGENES DIGITALES + 1 POLAROID IMPRESA",
                cost: "30 USD",
              },
              {
                name: "Ticket AZUL",
                description: "30 MIN DE SESIÓN\n10 IMAGENES DIGITALES + 1 POLAROID IMPRESA",
                cost: "40 USD",
              },
              {
                name: "Ticket PLATA",
                description: "30 MIN DE SESIÓN\n15 IMAGENES DIGITALES + 1 POSTAL IMPRESA",
                cost: "45 USD",
              },
              {
                name: "Ticket ORO",
                description: "35 MIN DE SESIÓN\n2 CAMBIOS DE VESTUARIO\n15 IMAGENES DIGITALES + 1 POSTAL IMPRESA",
                cost: "55 USD",
              },
              {
                name: "Ticket PLATINO",
                description: "40 MIN DE SESIÓN\n2 CAMBIOS\n15 IMAGENES DIGITALES + 1 POSTAL IMPRESA + UN MINI CLIP AUDIOVISUAL A CARGO DE\n@bryanninor",
                cost: "80 USD",
                ig: "https://www.instagram.com/bryanninor",
              },
              {
                name: "Ticket DIAMANTE",
                description: "40 MIN DE SESIÓN\n2 CAMBIOS\n20 IMAGENES DIGITALES + 1 POSTAL IMPRESA + UN CLIP AUDIOVISUAL A CARGO DE\n@bryanninor",
                cost: "85 USD",
                ig: "https://www.instagram.com/bryanninor",
              },
            ].map((ticket) => (
              <div className="flex items-start mb-3" key={ticket.name}>
                <div className="flex-1">
                  <h1 className="text-lg text-[#323336] mb-1">
                    <span className={`font-extrabold ${ticket.name === "Ticket AZUL" ? "text-[#97d8f4]" : ticket.name === "Ticket PLATA" ? "text-[#b8b8b8]" : ticket.name === "Ticket ORO" ? "text-[#e6a638]" : ticket.name === "Ticket PLATINO" ? "text-[#2c9d93]" : "text-[#bb2929]"}`}>{ticket.name}</span>:
                  </h1>
                  <p>
                    {ticket.description.split("@bryanninor")[0]}
                    {ticket.ig && (
                      <>
                        <a href={ticket.ig} target="_blank" rel="noopener noreferrer" className={`font-extrabold ${ticket.name === "Ticket PLATINO" ? "text-[#2c9d93]" : "text-[#bb2929]"}`}>
                          @bryanninor
                        </a>
                      </>
                    )}
                    <br />
                    <span className={`font-extrabold ${ticket.name === "Ticket AZUL" ? "text-[#97d8f4]" : ticket.name === "Ticket PLATA" ? "text-[#b8b8b8]" : ticket.name === "Ticket ORO" ? "text-[#e6a638]" : ticket.name === "Ticket PLATINO" ? "text-[#2c9d93]" : "text-[#bb2929]"}`}>{ticket.cost}</span>
                  </p>
                </div>
                <a
                  href={generateWhatsAppLink(ticket.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#a6a6a6] text-white text-sm px-3 py-1 rounded-lg ml-4 self-center"
                >
                  Reservar
                </a>
              </div>
            ))}
          </div>
          <div className="w-[70%] mt-7">
            <p className="text-lg text-[#b92a49] mb-1 font-bold">
              POR FAVOR LEER
            </p>
            <p className="text-lg text-[#323336] mb-4">
              Se muestran los costos full, en pre venta aplicamos el 25% de Descuento a cada ticket.
            </p>
            <p className="text-lg text-[#323336] mb-4">
              <span className="font-bold text-[#b92a49]"> Ticket Blanco </span>: 
              No aplica para PRE VENTA - Ni sorteos.
            </p>
            <p className="text-lg text-[#323336] mb-4">
              No hay reembolsos en ediciones como esta - siempre puedes utilizar tu crédito para otra fecha y hora si no puede asistir. 
              <span className="font-bold text-[#b92a49]"> Gracias por tu comprensión. </span>
            </p>
          </div>
        </div>
          <Carousel images={christmasImages} intervalTime={3000}/>
      </section>

      <section className="bg-white p-6 md:p-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h1 className="font-serif text-5xl text-[#a6a6a6] mb-6">Planes de Pago</h1>
          <div>
            <p className="text-lg text-[#a6a6a6] mb-1 font-bold">
              Tienes la oportunidad de apartar tu cupo y cancelar en <span className="text-[#b92a49]"> TRES (03) CUOTAS</span>
            </p>
            <h1 className="font-extrabold text-[#a6a6a6] mb-5">Fechas de Pago:</h1>
            <div className="text-[#b92a49]">
              <p>15 de Octubre</p>
              <p>30 de Octubre</p>
              <p>15 de Noviembre</p>
            </div>
            <br />
            <p className="text-lg text-[#b92a49] mb-1 font-bold">POR FAVOR LEER</p>
            <p className="text-lg text-[#323336] mb-4">
              Estos planes de pago no son aplicables a la pre venta
              <span className="font-bold text-[#b92a49]"> Gracias por tu comprensión. </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#ffebe7] p-4 shadow-lg">
          <h1 className="font-serif text-3xl text-red-700 mb-6">Fechas Disponibles</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
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

      <footer className="p-6 bg-[#f1f1f1] flex items-center justify-center">
        <div className="flex space-x-8">
          <Link href="https://www.instagram.com/soyevaph/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <span className="text-lg text-[#a6a6a6]">Instagram</span>
          </Link>

          <Link href="https://wa.me/+5804129207967" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <span className="text-lg text-[#a6a6a6]">WhatsApp</span>
          </Link>

          <Link href="mailto:evargasabg@gmail.com" className="flex items-center space-x-2">
            <span className="text-lg text-[#a6a6a6]">Email</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
