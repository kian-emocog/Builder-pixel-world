interface TipSectionProps {
  text?: string;
}

const TipSection = ({
  text = "같은 수를 최대한 빨리 골라보자.",
}: TipSectionProps) => {
  const hasText = text && text.trim().length > 0;

  return (
    <div
      className={`flex w-full h-[52px] items-center rounded-full relative shadow-lg ${
        hasText ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* TIP section with otter */}
      <div className="flex items-center justify-center bg-happy-blue-1000 rounded-full px-4 py-1 shadow-lg shadow-black/25 relative z-10">
        {/* Simplified otter mascot */}
        <div className="w-8 h-8 bg-happy-blue-300 rounded-full mr-2 flex items-center justify-center relative">
          {/* Simple otter face */}
          <div className="w-1 h-1 bg-happy-blue-1300 rounded-full absolute top-2 left-2"></div>
          <div className="w-1 h-1 bg-happy-blue-1300 rounded-full absolute top-2 right-2"></div>
          <div className="w-2 h-1 bg-sunset-red-400 rounded-full absolute bottom-2"></div>
        </div>

        <div className="text-sun-orange-500 text-center font-pop text-lg font-normal leading-8 tracking-[1.2px]">
          TIP
        </div>
      </div>

      {/* Text content - only show if text exists */}
      {hasText && (
        <div className="flex flex-1 justify-center items-center px-4 sm:px-8 gap-2">
          <div className="text-happy-blue-1000 text-center font-pop text-base sm:text-lg lg:text-xl font-normal leading-6">
            {text}
          </div>
        </div>
      )}
    </div>
  );
};

export default TipSection;
