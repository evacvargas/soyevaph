import { titleFont } from "@/app/miniShoots/christmas/page";
import { FaHeart } from "react-icons/fa";

const Ticket = ({ item, onClick, showHearts }) => {
  const originalCost = parseFloat(item.cost.split(" ")[0]);

  // Calcular el costo con descuento
  const discountedCost = item.presale 
    ? (originalCost * 0.80).toFixed(2)
    : item.promotion 
    ? (originalCost * 0.85).toFixed(2)
    : originalCost.toFixed(2)
    ;
    

  return (
    <div className="rounded-3xl shadow-[0px_0px_5px_#c0c0c0] pt-8 p-5 text-center relative h-[450px] flex flex-col justify-between overflow-visible">
      {/* Corazones flotantes si showHearts es true */}
      {showHearts && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <FaHeart
            className="absolute text-red-500 animate-float"
            style={{
              top: "10%",
              left: "15%",
              fontSize: "1rem",
              opacity: 0.7,
            }}
          />
          <FaHeart
            className="absolute text-red-400 animate-float"
            style={{
              top: "20%",
              left: "70%",
              fontSize: "1.5rem",
              opacity: 0.5,
            }}
          />
          <FaHeart
            className="absolute text-red-300 animate-float"
            style={{
              bottom: "10%",
              left: "30%",
              fontSize: "1rem",
              opacity: 0.6,
            }}
          />
          <FaHeart
            className="absolute text-red-600 animate-float"
            style={{
              bottom: "15%",
              left: "60%",
              fontSize: "1.2rem",
              opacity: 0.8,
            }}
          />
          <FaHeart
            className="absolute text-red-500 animate-float"
            style={{
              bottom: "5%",
              right: "10%",
              fontSize: "1rem",
              opacity: 0.4,
            }}
          />
        </div>
      )}

      {/* Mostrar etiqueta de pre-venta si aplica */}
      {item.presale && (
        <div className="absolute -top-6 -right-6 bg-[#b91b1d] text-white font-medium rounded-lg py-1 px-3 uppercase shadow-lg text-xs">
          Pre-venta 20% off
        </div>
      )}

      {/* Mostrar etiqueta de promoción si aplica */}
      {item.promotion && !item.presale && (
        <div className="flex items-center justify-center bg-[#b91b1d] text-white font-medium absolute top-2 right-2 rounded-lg py-2 px-4 uppercase z-10 shadow-md">
          15% de DESC de Contado
        </div>
      )}

      <h2
        className={`text-[#323336] font-bold text-[40px] uppercase mb-6 ${titleFont.className}`}
      >
        {item.name}
      </h2>
      <ul className="text-[18px]">
        {item.description.split(",").map((description, index) => {
          if (description.includes("@") && item.ig) {
            const splittedDescription = description.split("@");
            return (
              <span className="lowercase" key={index}>
                {splittedDescription[0]}
                <a
                  href={item.ig}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-bold`}
                >
                  @{splittedDescription[1]}
                </a>
              </span>
            );
          }

          return (
            <li className="lowercase" key={index}>
              {description}
            </li>
          );
        })}
      </ul>
      <div className={`${titleFont.className} my-[30px] text-[28px] font-semibold`}>
        {/* Mostrar el precio original tachado si hay descuento */}
        {(item.promotion || item.presale) && (
          <span className="text-red-500 line-through mr-3 text-xl">
            {originalCost.toFixed(2)} USD
          </span>
        )}
        {/* Mostrar el precio con descuento */}
        <span className="text-green-800">
          {discountedCost} USD
        </span>
      </div>
      <div
        onClick={() => onClick(item.name)}
        className="cursor-pointer text-[#b91b1d] p-4 rounded-xl bg-white border border-red-700 font-medium"
      >
        Reservar
      </div>
    </div>
  );
};

export default Ticket;
