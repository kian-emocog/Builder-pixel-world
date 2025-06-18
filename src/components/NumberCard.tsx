interface NumberCardProps {
  number: number;
  selected?: boolean;
}

const NumberCard = ({ number, selected = false }: NumberCardProps) => {
  return (
    <div className="flex w-[100px] h-[130px] sm:w-[110px] sm:h-[140px] lg:w-[120px] lg:h-[160px] p-2 justify-center items-center bg-white rounded-2xl shadow-lg transition-all duration-200 hover:scale-105 active:scale-95">
      <div className="flex w-full h-full flex-col justify-center items-center rounded-xl border-3 border-happy-blue-1000 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-happy-blue-100 to-transparent"></div>

        {/* Number */}
        <span className="text-happy-blue-1000 text-center font-pop text-[48px] sm:text-[56px] lg:text-[64px] font-normal leading-none z-10">
          {number}
        </span>
      </div>
    </div>
  );
};

export default NumberCard;
