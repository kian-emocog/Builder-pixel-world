interface NumberCardProps {
  number: number;
  selected?: boolean;
}

const NumberCard = ({ number, selected = false }: NumberCardProps) => {
  return (
    <div className="flex w-[120px] h-[160px] p-2 justify-center items-center bg-white rounded-2xl shadow-lg">
      <div className="flex w-[108px] h-[148px] flex-col justify-center items-center rounded-xl border-3 border-happy-blue-1000 relative overflow-hidden">
        {/* Background pattern overlay */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-happy-blue-100 to-transparent"></div>

        {/* Number */}
        <span className="text-happy-blue-1000 text-center font-pop text-[64px] font-normal leading-none z-10">
          {number}
        </span>
      </div>
    </div>
  );
};

export default NumberCard;
