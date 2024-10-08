"use client";
import Image from "next/image";
import Wallpaper from "../../public/bg2.jpg";
import profilePic from "../../public/profile.jpg";
import xmasPic from "../../public/xmasx.jpg";
import logo from "../../public/logo.png";
import logoBryan from "../../public/logobryan.png";
import logoAlex from "../../public/logoalex.png";
import logoMangos from "../../public/logomangos.png";
import Button from "@/components/Button";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Wallpaper.src})`,
          clipPath: "ellipse(100% 90% at 50% 0%)",
        }}
      >
        <div className="absolute top-0 left-0 p-4">
          <Image 
            src={logo} 
            alt="logo" 
            width={250}
            height={250}
          />
        </div>
      </section>

      <section className="p-14 flex flex-col gap-10 min-h-screen items-center text-center md:text-left">
        <h1 className="text-4xl text-[#a6a6a6]">
          Bienvenido/a, soy <span className="font-extrabold text-red-700 text-4xl">EVA VARGAS</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-5 w-full max-w-6xl">
          <div className="flex justify-center md:w-1/2">
            <Image
              src={profilePic}
              alt="Profile"
              layout="responsive"
              objectFit="contain"
              className="w-full max-w-sm"
              width={300} 
              height={200}
            />
          </div>
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
              Siempre he sido la persona de: <span className="text-red-700 font-bold">  &quot;HEY, una foto&quot;...</span>
            </p>
            <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
              Y por supuesto todo comenzó como un lindo pasatiempo.
            </p>
            <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
              Pero como me esfuerzo constantemente por mejorar... quise convertirlo en una profesión.
            </p>
            <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
              Cada sesión es una oportunidad para perfeccionar mi oficio, 
              siempre con la convicción de que mi mejor trabajo está aún por llegar.
              Una cosa permanece constante: <span className="text-red-700">mi amor inquebrantable por la fotografía. </span>
            </p>
            <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
            No es solo un trabajo, es mi pasión, mi vocación y la mejor carrera que 
            jamás podría haber imaginado.
            </p>
            <div className="flex flex-col gap-3 italic">
              <p className="text-[#a6a6a6]">
                &quot;Lo que la memoria olvida, lo que el tiempo se lleva...
              </p>
              <p className="text-red-700 font-extrabold">
                ... La fotografía lo rescata&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-14 bg-[#ffebe7] flex flex-col gap-10 min-h-screen">
        <h1 className="text-6xl text-[#a6a6a6]">
          Mini Sesiones Navideñas <span className="animate-sparkle">2024</span>
        </h1>
        <p className="font-extrabold text-red-700 whitespace-nowrap text-5xl">¡Allá Vamos!</p>
        <div className="flex flex-col md:flex-row gap-5 w-full items-center">
          <div className="flex flex-col justify-center w-full md:w-1/2">
            <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
              <span className="font-bold text-red-700">2023</span> fue un
              bonito año en el set, un ensayo y error, un experimento que
              resultó ser una experiencia inolvidable. Por lo que, 2024 no podía
              pasar desapercibido. He pensado a detalle lo que quiero ofrecer y
              espero que estén tan emocionados como yo...
            </p>
            <div className="flex flex-col gap-3">
              <p className="text-[#a6a6a6]">
                Ya tenemos <span className="font-bold text-red-700">PRE VENTA</span>
                <br/>
                <span className="text-3xl"> 25% de Descuento </span> en nuestros tickets
              </p>
              <p className="font-bold text-red-700">
                HASTA EL 30 DE OCTUBRE
              </p>
            </div>

            <Link href="/miniShoots/christmas" className="mt-6 w-64">
              <Button
                bg="#B91C1C"
                title="QUIERO MÁS DETALLES"
                size="md"
                shadow={true}
                border={true}
                textColor="#ffffff"
              />
            </Link>
          </div>

          <div className="flex justify-center w-full md:w-1/2">
            <Image
              src={xmasPic}
              alt="Profile"
              layout="responsive"
              objectFit="contain"
              className="rounded-full shadow-2xl"
              width={800} 
              height={600}
            />
          </div>
        </div>
      </section>

      <section
        className="bg-[#a6a6a6] relative flex flex-col justify-center min-h-screen p-14 items-center text-center clip-path-polygon-shape"
      >
        <h1 className="text-white text-4xl mb-4">
          Mis Grandes <span className="font-extrabold text-red-700">Aliados</span>
        </h1>
        <p className="text-lg md:text-xl text-white w-3/4 mb-5">
          &quot;Solo... llegarás más rápido, pero acompañado, seguramente muchísimo más lejos&quot;
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center w-full">
          <Image 
            src={logoBryan} 
            alt="logos" 
            className="w-full md:w-auto"
            width={150}
            height={100}
          />
          <Image 
            src={logoAlex} 
            alt="logos" 
            className="w-full md:w-auto"
            width={150}
            height={100}
          />
          <Image 
            src={logoMangos} 
            alt="logos" 
            className="w-full md:w-auto"
            width={200}
            height={100}
          />
        </div>
      </section>

      <footer className="p-6 flex items-center justify-center h-auto">
        <div className="flex space-x-8">
          <Link href="https://www.instagram.com/soyevaph/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faInstagram} size="2x" style={{ color: '#a6a6a6' }} />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">Instagram</span>
          </Link>

          <Link href="https://wa.me/+5804129207967" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: '#a6a6a6' }} />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">WhatsApp</span>
          </Link>

          <Link href="mailto:evargasabg@gmail.com" className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} size="2x" style={{ color: '#a6a6a6' }} />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">Email</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
