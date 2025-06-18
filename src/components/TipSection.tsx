const TipSection = () => {
  return (
    <div className="flex w-full max-w-4xl h-[52px] items-center bg-white rounded-full relative shadow-lg">
      {/* TIP section with otter */}
      <div className="flex items-center justify-center bg-happy-blue-1000 rounded-full px-5 shadow-lg shadow-black/25 relative z-10">
        <div className="flex w-[54px] h-[52px] flex-col justify-end items-center">
          {/* Otter mascot */}
          <div className="flex h-[43.706px] items-center flex-shrink-0 relative">
            <div className="w-[47px] h-[52px] relative">
              {/* Otter SVG components */}
              <svg
                className="absolute top-[29px] left-0 w-5 h-2 fill-happy-blue-300"
                style={{ transform: "rotate(22.525deg)" }}
                viewBox="0 0 19 9"
              >
                <path
                  d="M18.4819 9.47832C17.8036 11.114 14.1246 10.9918 10.4752 9.47832C6.8258 7.96485 -0.243937 3.58877 0.434406 1.95309C1.32327 -0.19022 7.92251 -0.151004 11.5719 1.36246C15.2213 2.87593 19.1603 7.84264 18.4819 9.47832Z"
                  fill="#B2C5EB"
                />
              </svg>

              <svg
                className="absolute top-[27px] left-[14px] w-[25px] h-[19px] fill-happy-blue-300"
                viewBox="0 0 26 14"
              >
                <path
                  d="M25.6562 12.1633C25.6562 17.4756 19.9899 19.8583 13 19.8583C6.01015 19.8583 0.34375 17.4756 0.34375 12.1633C0.34375 6.851 6.01015 0.620789 13 0.620789C19.9899 0.620789 25.6562 6.851 25.6562 12.1633Z"
                  fill="#B2C5EB"
                />
              </svg>

              {/* Face features */}
              <div className="absolute top-[17px] left-[17px] w-[5px] h-[4px] bg-sunset-red-200 rounded-full"></div>
              <div className="absolute top-[17px] left-[32px] w-[5px] h-[4px] bg-sunset-red-200 rounded-full"></div>
              <div className="absolute top-[22px] left-[25px] w-[4px] h-[4px] bg-sunset-red-400 rounded-full"></div>

              {/* Eyes */}
              <div className="absolute top-[16px] left-[22px] w-[10px] h-[8px]">
                <div className="absolute top-0 left-[1px] w-[1.5px] h-[2px] bg-happy-blue-1300 rounded-full"></div>
                <div className="absolute top-0 right-[1px] w-[1.5px] h-[2px] bg-happy-blue-1300 rounded-full"></div>
              </div>

              {/* Additional otter details... */}
            </div>
          </div>
        </div>

        <div className="text-sun-orange-500 text-center font-pop text-2xl font-normal leading-8 tracking-[1.2px] ml-2">
          TIP
        </div>
      </div>

      {/* Text content */}
      <div className="flex flex-1 justify-center items-center px-8 gap-2">
        <div className="text-happy-blue-1000 text-center font-pop text-2xl font-normal leading-7">
          같은 수를 최대한 빨리 골라보자.
        </div>
      </div>
    </div>
  );
};

export default TipSection;
