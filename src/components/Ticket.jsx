import { titleFont } from "@/app/miniShoots/christmas/page";

const Ticket = ({ item, onClick }) => {
  const originalCost = parseFloat(item.cost.split(" ")[0]);
  
  const discountedCost = item.presale 
    ? (originalCost * 0.75).toFixed(2)
    : item.promotion 
    ? (originalCost * 0.85).toFixed(2)
    : originalCost.toFixed(2);

  return (
    <div className="rounded-3xl shadow-[0px_0px_5px_#c0c0c0] pt-8 p-5 text-center relative h-[450px] flex flex-col justify-between">
      {item.presale && (
        <div className="flex items-center justify-center bg-[#b91b1d] text-white font-medium absolute top-[-20px] right-[-10px] rounded-lg py-2 px-4 uppercase">
          Pre-venta 25% off
        </div>
      )}

      {item.promotion && !item.presale && (
        <div className="flex items-center justify-center bg-[#b91b1d] text-white font-medium absolute top-[-20px] right-[-10px] rounded-lg py-2 px-4 uppercase">
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
        {item.promotion && !item.presale && (
          <span className="text-red-500 line-through mr-3">{item.cost}</span>
        )}
        {item.presale && (
          <span className="text-red-500 line-through mr-3 text-xl">{item.cost}</span>
        )}
        <span className={`${item.promotion || item.presale ? 'text-green-800' : ''}`}>
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
