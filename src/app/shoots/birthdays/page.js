"use client";
import Image from "next/image";
import Logo from "../../../../public/logo.png";
import bdayPicI from "../../../../public/birthdayBg.jpg";
import Link from "next/link";
import GoBackLink from "@/components/GoBackBtn";
import Carousel from "@/components/Carousel";

const bdaysImages = [
  "/BirthdaysI.jpg", 
  "/BirthdaysIII.jpg",
  "/birthdays.jpg", 
  "/bdays.jpg", 
  "/bdaysI.jpg", 
  "/bdaysII.jpg",
  "/bdaysIII.jpg",
  "/bdaysIV.jpg",
  "/bdaysV.jpg",
  "/bdaysVI.jpg",
];

export default function Cumples() {
  const generateWhatsAppLink = (plan) => {
    const phoneNumber = "+5804129207967";
    const message = encodeURIComponent(
      `¡Hola! Me gustaría reservar el ${plan} para CUMPLEAÑOS.`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen flex flex-col gap-8">
      <GoBackLink />
      <div className="w-full flex justify-center py-4 bg-[#ffebe7]">
        <Image src={Logo} alt="logo" width={150} height={150} />
      </div>

      <section className="w-full mx-auto p-10 bg-[#ffebe7] flex flex-col items-center ">
        <div className="w-full sm:w-1/2 mb-4">
          <Carousel images={bdaysImages} intervalTime={3000} />
        </div>
        <h1 className="font-serif text-5xl text-[#323336] mb-4 self-start">
          Sesiones{" "}
          <span className="font-serif text-5xl text-[#323336]">Celebra-Te</span>
        </h1>
        <p className="text-lg text-[#323336] mb-4">
          Una buena forma de celebrarse siempre será dejar impresa la sonrisa
          que nos genera alcanzar un año más de vida. Ya sea{" "}
          <span className="font-bold">CELEBRÁNDOTE</span> a ti mismo o a tus
          seres más especiales,
          <span className="font-bold text-[#b92a49]">
            {" "}
            será un placer FOTOGRAFIARLES.{" "}
          </span>
        </p>
      </section>

      <section className="bg-white p-6 md:p-12 flex flex-col md:flex-row gap-8">
        <div className="flex-1 bg-[#ffebe7] shadow-xl p-5">
          <h1 className="font-serif text-4xl md:text-5xl text-[#323336] mb-4">
            Paquetes Fotográficos
          </h1>
          <div className="max-w-full md:max-w-2xl flex flex-col gap-4">
            {[
              {
                name: "Feliz Cumpleaños EXPRESS",
                description:
                  "20 MIN DE SESIÓN\n5 IMAGENES DIGITALES (Puede traer su torta - accesorios - globos)",
                cost: "25 USD",
                isExpress: true,
              },
              {
                name: "Feliz Cumpleaños 1",
                description:
                  "30 MINUTOS DE SESIÓN\n12 IMAGENES DIGITALES (Puede traer su torta - accesorios - globos)",
                cost: "35 USD",
              },
              {
                name: "Feliz Cumpleaños 2",
                description:
                  "30 MINUTOS DE SESIÓN\n12 IMAGENES DIGITALES + 1 Mini Cake Sencilla",
                cost: "45 USD",
              },
              {
                name: "Feliz Cumpleaños 3",
                description:
                  "40 MIN DE SESIÓN\n15 IMAGENES DIGITALES + 1 Mini Cake Sencilla + Algunos Globos",
                cost: "55 USD",
              },
              {
                name: "Feliz Cumpleaños 4",
                description:
                  "40 MIN DE SESIÓN\n2 CAMBIOS\n15 IMAGENES DIGITALES + 1 Mini Cake Sencilla + Pequeña Deco PERSONALIZADA (Tema - Colores)",
                cost: "75 USD",
              },
            ].map((packageOption) => (
              <div
                className={`flex flex-col sm:flex-row items-start mb-4 ${
                  packageOption.isExpress ? "bg-[#ffdddd] p-6 rounded-md shadow-lg" : ""
                }`}
                key={packageOption.name}
              >
                <div className="flex-1">
                  <h1
                    className={`text-lg mb-1 font-bold ${
                      packageOption.isExpress ? "text-[#b92a49]" : "text-[#323336]"
                    }`}
                  >
                    {packageOption.name}:
                  </h1>
                  <p>
                    {packageOption.description.split("\n").map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                    <br />
                    Costo:{" "}
                    <span
                      className={`font-extrabold ${
                        packageOption.isExpress ? "text-[#b92a49]" : "text-[#323336]"
                      }`}
                    >
                      {packageOption.cost}
                    </span>
                  </p>
                </div>
                <a
                  href={generateWhatsAppLink(packageOption.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${
                    packageOption.isExpress
                      ? "bg-[#ff6f61] hover:bg-[#ff4f41] text-white font-bold"
                      : "bg-[#a6a6a6] text-white"
                  } text-sm px-4 py-2 rounded-lg mt-4 sm:mt-0 sm:ml-4 self-center transition-transform duration-300 transform hover:scale-105`}
                >
                  Reservar
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-none w-full md:w-1/3 self-center">
          <Image
            src={bdayPicI}
            alt="Imagen de Cumpleaños"
            width={400}
            height={500}
            className="w-full"
          />
        </div>
      </section>
      <section className="w-full mx-auto p-10 bg-[#ffebe7]">
        <h1 className="font-serif text-3xl md:text-5xl text-[#323336] mb-4">
          Consideraciones
        </h1>

        <div className="flex-1">
          <h1 className="text-lg text-[#323336] mb-1">
            - Toda sesión se reserva con el 50% del costo, sin excepción, y de no poder asistir, se fija nueva fecha.
            <br />
            - La opcion de Decoracion PERSONALIZADA, puede variar su costo segun los requerimientos del cliente.
            <br />
            - No se permiten pinturas, estrellitas (fuego) o cualquier elemento que cause daños.
            <br />
            - Las fotografias extras tienen un costo aparte.
            <br />
            - Se ofrece el servicio de fotografias impresas, consultar costos segun el tamaño.
            <br />
            - Es un espacio pequeño, por favor consultar antes si pueden ir mas de 4 personas a las sesiones.
          </h1>
        </div>
      </section>

      <footer className="p-6 bg-[#f1f1f1] flex items-center justify-center">
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
    </div>
  );
}
