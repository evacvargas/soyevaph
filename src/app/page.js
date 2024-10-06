"use client";
import Image from "next/image";
import Wallpaper from "../../public/bg2.jpg";
import profilePic from "../../public/profile.jpg";
import xmasPic from "../../public/xmasx.jpg";
import logo from "../../public/logo.png"
import Button from "@/components/Button";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  return (
    <>
      <Navbar />
      <section
        className="relative h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Wallpaper.src})`,
          clipPath: "ellipse(100% 90% at 50% 0%)",
        }}
      >
        <div>
          <div className="absolute top-0 left-0 p-4">
            <Image 
            src={logo} 
            alt="logo" 
            width={250}
            height={250}
            />
          </div>
        </div>
      </section>

      <section className="p-14 bg-white min-h-screen flex flex-col gap-10">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <p className="text-lg md:text-xl text-[#a6a6a6] w-3/4 mb-5">
            <span className="font-bold text-red-700"> 2023 </span> fue un
            bonito año en el set, un ensayo y error, un experimento que
            resultó ser una experiencia inolvidable. Por lo que, 2024 no podía
            pasar desapercibido. He pensado a detalle lo que quiero ofrecer y
            espero que estén tan emocionados como yo...
          </p>
          <div className="flex flex-col gap-3">
            <p className="text-[#a6a6a6]">
              Ya tenemos  <span className="font-bold text-red-700"> PRE VENTA </span>
              25% de Descuento en nuestros tickets
            </p>
            <p className="font-bold text-red-700">
              HASTA EL 30 DE OCTUBRE
            </p>
          </div>

          <Link href="/miniShoots/christmas" className="mt-6">
            <Button
              bg="#FFF"
              title="RESERVA TU LUGAR"
              size="md"
              shadow={true}
              border={true}
              textColor="#a6a6a6"
            />
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <Image
            src={xmasPic}
            alt="Profile"
            layout="responsive"
            objectFit="contain"
            className="rounded-full shadow-2xl"
            width={800} 
            height={800}
          />
        </div>
      </div>
      </section>

      <footer className="p-6 bg-[#f1f1f1] flex items-center justify-center">
        <div className="flex space-x-8">
          <Link href="https://www.instagram.com/soyevaph/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#a6a6a6' }} />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">Instagram</span> {/* Oculta en pantallas pequeñas */}
          </Link>

          <Link href="https://wa.me/+5804129207967" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#a6a6a6' }} />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">WhatsApp</span> {/* Oculta en pantallas pequeñas */}
          </Link>

          <Link href="mailto:evargasabg@gmail.com" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#a6a6a6' }} />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">Email</span> {/* Oculta en pantallas pequeñas */}
          </Link>
        </div>
      </footer>
    </>
  );
}
