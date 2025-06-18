const TipSection = () => {
  return (
    <div className="flex w-full max-w-4xl h-[52px] items-center bg-white rounded-full relative shadow-lg">
      {/* TIP section with otter */}
      <div className="flex items-center justify-center bg-happy-blue-1000 rounded-full px-5 py-1 shadow-lg shadow-black/25 relative z-10">
        {/* Simplified otter mascot */}
        <div className="w-10 h-10 bg-happy-blue-300 rounded-full mr-2 flex items-center justify-center relative">
          {/* Simple otter face */}
          <div className="w-1 h-1 bg-happy-blue-1300 rounded-full absolute top-3 left-3"></div>
          <div className="w-1 h-1 bg-happy-blue-1300 rounded-full absolute top-3 right-3"></div>
          <div className="w-2 h-1 bg-sunset-red-400 rounded-full absolute bottom-3"></div>
        </div>

        <div className="text-sun-orange-500 text-center font-pop text-xl font-normal leading-8 tracking-[1.2px]">
          TIP
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 justify-center items-center px-8 gap-2">
        <div className="text-happy-blue-1000 text-center font-pop text-xl md:text-2xl font-normal leading-7">
          같은 수를 최대한 빨리 골라보자.
        </div>
      </div>
    </div>
  );
};

export default TipSection;
