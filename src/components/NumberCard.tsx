interface NumberCardProps {
  number: number;
  selected?: boolean;
}

const NumberCard = ({ number, selected = false }: NumberCardProps) => {
  return (
    <div className="flex w-[120px] h-[160px] p-2 justify-center items-center bg-white rounded-2xl shadow-lg">
      <div className="flex w-[108px] h-[148px] flex-col justify-center items-center rounded-xl border-3 border-happy-blue-1000 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg
            width="108"
            height="148"
            viewBox="0 0 108 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.1" clipPath="url(#clip0_10_17)">
              {/* Pattern elements would go here */}
            </g>
          </svg>
        </div>

        {/* Number */}
        <span className="text-happy-blue-1000 text-center font-pop text-[64px] font-normal leading-none z-10">
          {number}
        </span>
      </div>
    </div>
  );
};

export default NumberCard;
