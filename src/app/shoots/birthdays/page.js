import Image from "next/image";
import Logo from "../../../../public/logo.png";
import bdayPic from "../../../../public/birthdays.jpg";
import bdayPicI from "../../../../public/birthdaysII.jpg";
import Link from "next/link";

export default function Cumples() {
  const generateWhatsAppLink = (plan) => {
    const phoneNumber = "+5804129207967"; 
    const message = encodeURIComponent(`¡Hola! Me gustaría reservar el ${plan} para la Mini Sesión de Navidad.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen flex flex-col gap-8">
      <div className="w-full flex justify-center py-4 bg-[#ffebe7]">
        <Image src={Logo} alt="logo" width={150} height={150} />
      </div>

      <section className="w-full mx-auto p-10 bg-[#ffebe7]">
        <div className="relative w-full flex justify-center mb-10 shadow-md">
          <Image
            src={bdayPic}
            alt="Birthdays"
            width="100%"
            height={600}
          />
        </div>
        <h1 className="font-serif text-5xl text-[#323336] mb-4">
          Sesiones <span className="font-serif text-5xl text-[#323336]">Celebra-Te</span>
        </h1>
        <p className="text-lg text-[#323336] mb-4">
          Una buena forma de celebrarse siempre sera dejar impresa la sonrisa que nos genera alcanzar un año mas de vida...
          <span className="font-bold text-[#b92a49]"> Será un placer FOTOGRAFIARTE. </span>
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
                name: "Feliz Cumpleaños 1",
                description: "30 MINUTOS DE SESIÓN\n15 IMAGENES DIGITALES + 1 POLAROID IMPRESA (Puede traer su torta y props)",
                cost: "35 USD",
              },
              {
                name: "Feliz Cumpleaños 2",
                description: "30 MINUTOS DE SESIÓN\n15 IMAGENES DIGITALES + 1 POSTAL IMPRESA (Puede traer su torta y props)",
                cost: "40 USD",
              },
              {
                name: "Feliz Cumpleaños 3",
                description: "40 MIN DE SESIÓN\n2 CAMBIOS DE VESTUARIO\n15 IMAGENES DIGITALES + 1 Mini Cake Sencilla + Pequeña Deco",
                cost: "60 USD",
              },
              {
                name: "Feliz Cumpleaños 4",
                description: "1 hora DE SESIÓN\n2 CAMBIOS\n20 IMAGENES DIGITALES + 2 POSTALES IMPRESAS + 1 Mini Cake Sencilla + Pequeña Deco",
                cost: "75 USD",
              },
            ].map((packageOption) => (
              <div className="flex flex-col sm:flex-row items-start mb-4" key={packageOption.name}>
                <div className="flex-1">
                  <h1 className="text-lg text-[#323336] mb-1 font-bold">
                    {packageOption.name}:
                  </h1>
                  <p>
                    {packageOption.description.split("\n").map((line, index) => (
                      <span key={index}>{line}<br /></span>
                    ))}
                    <br />
                    Costo: <span className="font-extrabold text-[#b92a49]">{packageOption.cost}</span>
                  </p>
                </div>
                <a
                  href={generateWhatsAppLink(packageOption.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#a6a6a6] text-white text-sm px-3 py-1 rounded-lg mt-4 sm:mt-0 sm:ml-4 self-center"
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
            height={400}
            className="w-full h-auto"
          />
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
