interface NumberCardProps {
  number: number;
  selected?: boolean;
  onClick?: () => void;
}

const NumberCard = ({ number, selected = false, onClick }: NumberCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex w-[100px] h-[130px] sm:w-[110px] sm:h-[140px] lg:w-[120px] lg:h-[160px] p-2 justify-center items-center rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
        selected ? "bg-happy-blue-1000" : "bg-white hover:bg-happy-blue-50"
      }`}
    >
      <div
        className={`flex w-full h-full flex-col justify-center items-center rounded-xl border-3 relative overflow-hidden ${
          selected ? "border-sun-orange-500" : "border-happy-blue-1000"
        }`}
      >
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-happy-blue-100 to-transparent"></div>

        {/* Number */}
        <span
          className={`text-center font-pop text-[48px] sm:text-[56px] lg:text-[64px] font-normal leading-none z-10 ${
            selected ? "text-sun-orange-500" : "text-happy-blue-1000"
          }`}
        >
          {number}
        </span>
      </div>
    </button>
  );
};

export default NumberCard;
