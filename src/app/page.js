"use client";
import Image from "next/image";
import Wallpaper from "../../public/bg2.jpg";
import logo from "../../public/logo.png";
import logoBryan from "../../public/logobryan.png";
import logoAlex from "../../public/logoalex.png";
import logoMangos from "../../public/logomangos.png";
import logoBrisas from "../../public/logobrisas.png";
import logoBrulee from "../../public/logobrulee.png";
import Button from "@/components/Button";
import Link from "next/link";
import Navbar from "@/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { titleFont } from "./miniShoots/christmas/page";
import { FaHeart } from "react-icons/fa";

export default function Home() {
  const logos = [
    { src: logoBryan, alt: "Logo Bryan" },
    { src: logoAlex, alt: "Logo Alex" },
    { src: logoMangos, alt: "Logo Mangos" },
    { src: logoBrisas, alt: "Logo Brisas" },
    { src: logoBrulee, alt: "Logo Brulee" },
  ];

  const quotes = [
    "/testimonios/testimonio3.png", "/testimonios/testimonio1.png", "/testimonios/testimonio2.png",
  ];

  return (
    <div>
      <Navbar />
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url(${Wallpaper.src})`,
        }}
      >
        <div className="bg-black/[0.5] absolute w-full h-full"></div>
        <div className="absolute top-0 left-0 md:left-24 p-4">
          <Image src={logo} alt="logo" width={250} height={250} />
        </div>
        <div className="absolute left-0 md:left-24 bottom-24 md:bottom-unset md:top-[30%] z-1 text-center md:text-left px-6">
          <p
            className={`text-[#a6a6a6] ${titleFont.className} font-medium text-[20px] md:text-[30px]`}
          >
            &quot;Lo que la memoria olvida, lo que el tiempo se lleva...
          </p>
          <p
            className={`text-[#a6a6a6] ${titleFont.className} font-bold text-[30px] md:text-[40px]`}
          >
            La fotografía lo rescata&quot;
          </p>
        </div>
      </section>

      <section className="flex items-center flex-wrap text-center md:text-left">
        <div className="flex justify-center w-full md:w-1/2">
          <img src="/profile.jpg" alt="Profile" className="w-full" />
        </div>
        <div className="flex flex-col justify-center w-full md:w-1/2 p-8 lg:p-24">
          <h1
            className={`text-4xl text-[#323336] mb-10 ${titleFont.className}`}
          >
            Bienvenido/a, soy{" "}
            <span className="font-extrabold text-red-700 text-4xl">
              EVA VARGAS
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
            Siempre he sido la persona de:{" "}
            <span className="text-red-700 font-bold">
              {" "}
              &quot;HEY, una foto&quot;...
            </span>
          </p>
          <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
            Y por supuesto todo comenzó como un lindo pasatiempo.
          </p>
          <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
            Pero como me esfuerzo constantemente por mejorar... quise
            convertirlo en una profesión.
          </p>
          <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
            Cada sesión es una oportunidad para perfeccionar mi oficio, siempre
            con la convicción de que mi mejor trabajo está aún por llegar. Una
            cosa permanece constante:{" "}
            <span className="text-red-700">
              mi amor inquebrantable por la fotografía.{" "}
            </span>
          </p>
          <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
            No es solo un trabajo, es mi pasión, mi vocación y la mejor carrera
            que jamás podría haber imaginado.
          </p>
        </div>
      </section>

      <section className="bg-[#ffebe7] flex flex-col min-h-screen relative overflow-hidden">
        {/* Contenido principal (texto) */}
        <div className="flex flex-col md:flex-row w-full items-center z-10 relative p-6">
          <div className="flex flex-col justify-center w-full md:w-1/2 p-8 lg:p-24 relative z-10">
            {/* Contenedor de corazones flotantes dentro del área de texto */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div
                className="absolute text-red-500 animate-float"
                style={{
                  top: "10%",
                  left: "5%",
                  fontSize: "1.5rem",
                  color: "#ff0000", // Corazón rojo
                }}
              >
                <FaHeart />
              </div>
              <div
                className="absolute text-red-500 animate-float"
                style={{
                  top: "5%",
                  left: "20%",
                  fontSize: "2rem",
                  color: "#ff3366", // Corazón rosa
                }}
              >
                <FaHeart />
              </div>
              <div
                className="absolute text-red-500 animate-float"
                style={{
                  top: "2%",
                  left: "80%",
                  fontSize: "2.5rem",
                  color: "#ff6699", // Corazón en rosa claro
                }}
              >
                <FaHeart />
              </div>
              <div
                className="absolute text-[#ff4f41] animate-float"
                style={{
                  top: "80%",
                  left: "60%",
                  fontSize: "3rem",
                  color: "#ff6666", // Corazón naranja
                }}
              >
                <FaHeart />
              </div>
              <div
                className="absolute text-red-500 animate-float"
                style={{
                  top: "50%",
                  left: "100%",
                  fontSize: "1.8rem",
                  color: "#ff99cc", // Corazón lila
                }}
              >
                <FaHeart />
              </div>
            </div>

            <h1
              className={`text-4xl md:text-6xl text-[#323336] mb-4 ${titleFont.className}`}
            >
              Mini Sesiones SAN VALENTÍN 2025
            </h1>
            <p className="font-bold text-red-700 whitespace-nowrap text-2xl mb-4">
              ¡Ya el amor está en el aire! ❤️
            </p>
            <p className="text-lg md:text-xl text-[#a6a6a6] mb-5">
              Este San Valentín, captura momentos inolvidables con quien amas o
              celebrando la amistad. Un set{" "}
              <span className="font-bold text-red-700">minimalista</span>{" "}
              diseñado para risas, abrazos y mucho cariño.
            </p>
            <div className="flex flex-col">
              <p className="text-[#a6a6a6]">
                <span className="font-extrabold text-red-700">PRE VENTA</span>
                <br />
                <span className="text-3xl font-bold"> 25% de Descuento </span>
              </p>
              <p className="font-bold text-red-700">HASTA EL 30 DE ENERO</p>
            </div>

            <Link href="/miniShoots/valentinesDay" className="mt-6 w-64">
              <Button
                bg="#ff4f41"
                title="QUIERO MÁS DETALLES"
                size="md"
                shadow={false}
                border={false}
                textColor="#fff"
                className="transition-transform duration-300 transform hover:scale-105 hover:bg-[#ff4f41]"
              />
            </Link>
          </div>

          {/* Imagen en el lado derecho (para pantallas grandes) */}
          <div className="flex justify-center w-full md:w-1/2">
            <img
              src="/birthdayBg.jpg"
              alt="Profile"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center px-24 py-[100px] items-center text-center clip-path-polygon-shape">
        <div className="mb-12 text-center">
          <h1 className={`text-[#323336] text-4xl mb-4 ${titleFont.className}`}>
            Una imagen dice mas que mil palabras...{" "}
            {/* <span className="font-extrabold text-red-700">Aliados</span> */}
          </h1>
          {/* <p className="text-lg md:text-xl mb-5 font-light">
            &quot;Solo... llegarás más rápido, pero acompañado, seguramente
            muchísimo más lejos&quot;
          </p> */}
        </div>
        <div className="flex gap-12 flex-wrap w-full justify-center">
  {quotes.map((src, index) => {
    return (
      <div
      key={index}
      className="bg-[#212121] w-full sm:w-[calc(50%-48px)] lg:w-[calc(25%-48px)] h-[170px] flex justify-center items-center rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
    >
      <Image
        src={src}
        alt={`Image ${index + 1}`}
        className="w-full h-full object-contain"
        width={200}
        height={100}
      />
    </div>
    );
  })}
</div>
      </section>
      <section className="relative flex flex-col justify-center px-24 py-[100px] items-center text-center clip-path-polygon-shape">
        <div className="mb-12 text-center">
          <h1 className={`text-[#323336] text-4xl mb-4 ${titleFont.className}`}>
            Mis Grandes{" "}
            <span className="font-extrabold text-red-700">Aliados</span>
          </h1>
          <p className="text-lg md:text-xl mb-5 font-light">
            &quot;Solo... llegarás más rápido, pero acompañado, seguramente
            muchísimo más lejos&quot;
          </p>
        </div>
        <div className="flex gap-12 flex-wrap w-full justify-center">
          {logos.map((logo, index) => {
            return (
              <div
                key={index}
                className="bg-white w-full sm:w-[calc(50%-48px)] lg:w-[calc(25%-48px)] h-[200px] flex justify-center items-center rounded-2xl w-[80%] shadow-md"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className={`w-full md:w-auto mx-auto ${
                    logo.alt === "Logo Bryan" && "invert"
                  }`}
                  width={200}
                  height={100}
                />
              </div>
            );
          })}
        </div>
      </section>

      <footer className="p-6 flex items-center justify-center h-auto">
        <div className="flex space-x-8">
          <Link
            href="https://www.instagram.com/soyevaph/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              size="2x"
              style={{ color: "#a6a6a6" }}
            />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">
              Instagram
            </span>
          </Link>

          <Link
            href="https://wa.me/+5804129207967"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              size="2x"
              style={{ color: "#a6a6a6" }}
            />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">
              WhatsApp
            </span>
          </Link>

          <Link
            href="mailto:evargasabg@gmail.com"
            className="flex items-center space-x-2"
          >
            <FontAwesomeIcon
              icon={faEnvelope}
              size="2x"
              style={{ color: "#a6a6a6" }}
            />
            <span className="hidden md:inline text-lg text-[#a6a6a6]">
              Email
            </span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
