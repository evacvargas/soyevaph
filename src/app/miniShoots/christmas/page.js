import Image from "next/image";
import Logo from "../../../../public/logo.png";
import xmasPic from "../../../../public/xmas.JPG";
import xmas from "../../../../public/xmasInfo.JPG";
import Link from "next/link";

export default function Navidad() {
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
        <div className="relative w-full flex justify-center mb-10">
          <Image
            src={xmasPic}
            alt="Mini Sesión Navidad"
            className="rounded-full"
            width="100%"
            height={600}
          />
        </div>
        <h1 className="font-serif text-5xl text-[#323336] mb-4">
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
        <p className="text-lg text-[#323336] mb-4 font-bold">
          POR FAVOR LEER
        </p>
        <p className="text-lg text-[#323336] mb-4">
          No hay reembolsos en ediciones como esta - siempre puedes utilizar tu crédito para otra fecha y hora si no puede asistir. 
          <span className="font-bold text-[#b92a49]"> Gracias por tu comprensión. </span>
        </p>
      </section>

      <section className="bg-white p-12 flex gap-8">
        <div className="flex-1">
          <h1 className="font-serif text-5xl text-[#323336] mb-4">
            HO HO HO!!!! Paquetes Fotográficos
          </h1>
          <div className="max-w-2xl flex flex-col gap-4">
            {[
              {
                name: "Ticket AZUL",
                description: "30 MINUTOS DE SESIÓN\n10 IMAGENES DIGITALES + 1 POLAROID IMPRESA",
                cost: "40 USD",
              },
              {
                name: "Ticket PLATA",
                description: "30 MINUTOS DE SESIÓN\n15 IMAGENES DIGITALES + 1 POSTAL IMPRESA",
                cost: "45 USD",
              },
              {
                name: "Ticket ORO",
                description: "35 MIN DE SESIÓN\n2 CAMBIOS DE VESTUARIO\n15 IMAGENES DIGITALES + 1 POSTAL IMPRESA",
                cost: "55 USD",
              },
              {
                name: "Ticket PLATINO",
                description: "40 MIN DE SESIÓN\n2 CAMBIOS\n15 IMAGENES DIGITALES + 1 POSTAL IMPRESA + UN MINI CLIP AUDIOVISUAL A CARGO DE BRYAN NINO",
                cost: "80 USD",
              },
              {
                name: "Ticket DIAMANTE",
                description: "40 MIN DE SESIÓN\n2 CAMBIOS\n20 IMAGENES DIGITALES + 1 POSTAL IMPRESA + UN CLIP AUDIOVISUAL A CARGO DE BRYAN NINO",
                cost: "85 USD",
              },
            ].map((ticket) => (
              <div className="flex items-start mb-4" key={ticket.name}>
                <div className="flex-1">
                  <h1 className="text-lg text-[#323336] mb-1">
                    <span className={`font-extrabold ${ticket.name === "Ticket AZUL" ? "text-[#97d8f4]" : ticket.name === "Ticket PLATA" ? "text-[#b8b8b8]" : ticket.name === "Ticket ORO" ? "text-[#e6a638]" : ticket.name === "Ticket PLATINO" ? "text-[#2c9d93]" : "text-[#bb2929]"}`}>{ticket.name}</span>:
                  </h1>
                  <p>
                    {ticket.description}
                    <br />
                    Costo: <span className={`font-extrabold ${ticket.name === "Ticket AZUL" ? "text-[#97d8f4]" : ticket.name === "Ticket PLATA" ? "text-[#b8b8b8]" : ticket.name === "Ticket ORO" ? "text-[#e6a638]" : ticket.name === "Ticket PLATINO" ? "text-[#2c9d93]" : "text-[#bb2929]"}`}>{ticket.cost}</span>
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
        </div>
        
        <div className="flex-none w-1/3">
          <Image
            src={xmas}
            alt="Imagen de Navidad"
            width={400}
            height={400}
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
