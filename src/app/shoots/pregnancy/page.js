"use client";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import Link from "next/link";
import GoBackButton from "@/components/GoBackBtn";
import Carousel from "@/components/Carousel";
import Ticket from "@/components/Ticket";

import { Playfair_Display } from "next/font/google";
export const titleFont = Playfair_Display({ subsets: ["latin"] });

const proImages = ["/pregnancy.jpg", "/pregnancy1.jpg", "/pregnancy2.jpg", 
  "/pregnancy3.jpg", "/pregnancy4.jpg", "/pregnancy5.jpg"];

const tickets = [
  {
    name: "Nest",
    description: "20 MIN DE SESION - 8 FOTOGRAFIAS DIGITALES",
    cost: "35 USD",
    promotion: false,
  },
  {
    name: "Glow",
    description: "30 MIN DE SESION - 10 FOTOGRAFIAS DIGITALES",
    cost: "40 USD",
    promotion: true,
  },
  {
    name: "Bloom",
    description: "40 MIN DE SESION - 2 CAMBIOS DE VESTUARIO - 15 FOTOGRAFIAS DIGITALES - 1 POSTAL IMPRESA",
    cost: "55 USD",
    promotion: true,
  },
];

export default function Pregnancy() {
  const generateWhatsAppLink = (plan) => {
    const phoneNumber = "+5804129207967";
    const message = encodeURIComponent(`¡Hola! Me gustaria reservar: ${plan}.`);

    window.open(`https://wa.me/${phoneNumber}?text=${message}`);
  };

  const discountedTickets = tickets.map((ticket) => {
    if (ticket.promotion) {
      const originalCost = parseFloat(ticket.cost.split(" ")[0]);
      const discount = originalCost * 0.15;
      const newCost = (originalCost - discount).toFixed(2);
      return { ...ticket, originalCost: originalCost, newCost: newCost };
    }
    return ticket;
  });

  return (
    <>
      <div className="w-full flex justify-between items-center py-4 px-8 bg-black">
        <GoBackButton />
        <Image
          src={logo}
          alt="logo"
          width={150}
          height={150}
          className="ml-10"
        />
        <div />
      </div>

      <section className="w-full mx-auto flex flex-col sm:flex-row justify-between">
        <div className="w-full sm:w-1/2 p-10 flex flex-col justify-center">
          <div className="mb-4">
            <div
              className={`${titleFont.className} text-5xl text-[#323336] mb-5`}
            >
              ¿En la Dulce Espera?
            </div>
            <p>
              Cada latido, cada movimiento, cada sonrisa que nace desde
              dentro...
              <p className="text-lg text-red-700 mb-4">
                ¡
                <b>
                  La maternidad es un milagro que merece ser recordado para
                  siempre!
                </b>
              </p>
              Déjame acompañarte en este viaje y capturar la esencia de este
              momento tan mágico y único en tu vida.
            </p>
          </div>
        </div>
        <div className="w-full sm:w-1/2">
          <Carousel images={proImages} intervalTime={3000} />
        </div>
      </section>

      <section className="p-6 md:py-[100px] md:px-24 flex flex-col md:flex-row gap-8 items-center bg-[#ffebe7]">
        <div className="flex-1">
          <h1
            className={`${titleFont.className} text-5xl text-red-700 mb-24 text-center`}
          >
            Paquetes Fotográficos
          </h1>
          <div className="flex flex-wrap gap-[40px]">
            {discountedTickets.map((ticket, index) => (
              <div
                className="w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.33%-40px)]"
                key={index}
              >
                <Ticket item={ticket} onClick={generateWhatsAppLink} />
              </div>
            ))}
          </div>
          <div className="w-full mt-8">
            <p className="text-lg text-[#a6a6a6] mb-4 text-center">
              No hay reembolsos
              <br />
              Siempre puedes utilizar tu crédito para otra fecha y hora.
              <br />
            </p>
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
