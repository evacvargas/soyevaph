// import Image from "next/image";
import Logo from "../../../../public/logo.png";
import bdayPic from "../../../../public/birthdays.JPG";
import bdayPicI from "../../../../public/birthdaysII.JPG";
import Link from "next/link";

export default function Profesionales() {
  const generateWhatsAppLink = (plan) => {
    const phoneNumber = "+5804129207967"; 
    const message = encodeURIComponent(`¡Hola! Me gustaría reservar el ${plan} para la Mini Sesión de Navidad.`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="min-h-screen flex flex-col gap-8">
      EN CONSTRUCCION

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
