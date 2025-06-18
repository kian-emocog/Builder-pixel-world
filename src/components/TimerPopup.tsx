interface TimerPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const TimerPopup = ({ isVisible, onClose }: TimerPopupProps) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="flex flex-col items-center justify-center gap-7 px-6">
        {/* Popup container */}
        <div className="flex p-2.5 flex-col justify-center items-center rounded-full bg-white shadow-lg">
          <div className="flex h-[116px] py-7 px-11 justify-center items-center gap-5 rounded-full border-4 border-dashed border-red-600 bg-white">
            {/* Timer/Clock icon */}
            <svg
              width="44"
              height="56"
              viewBox="0 0 44 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_11_879)">
                <path
                  d="M23.6718 10.5339H20.3273C20.1315 10.5339 19.9729 10.6938 19.9729 10.8912C19.9729 11.0885 20.1315 11.2484 20.3273 11.2484H21.2364C21.1548 11.3726 21.1077 11.5225 21.1077 11.6823C21.1077 12.12 21.4594 12.4745 21.8935 12.4745H22.1065C22.5407 12.4745 22.8923 12.12 22.8923 11.6823C22.8923 11.5216 22.8452 11.3726 22.7636 11.2484H23.6727C23.8685 11.2484 24.0271 11.0885 24.0271 10.8912C24.0271 10.6938 23.8685 10.5339 23.6727 10.5339H23.6718Z"
                  fill="#3B3B3B"
                />
                <path
                  d="M37.5557 49.5052C46.147 40.8452 46.147 26.8047 37.5557 18.1447C28.9643 9.48471 15.035 9.48471 6.44363 18.1447C-2.14773 26.8047 -2.14773 40.8452 6.44363 49.5052C15.035 58.1652 28.9643 58.1652 37.5557 49.5052Z"
                  fill="#FB5050"
                />
                <path
                  d="M35.4336 47.3662C42.853 39.8876 42.853 27.7623 35.4336 20.2837C28.0142 12.805 15.985 12.805 8.56565 20.2837C1.14626 27.7623 1.14626 39.8876 8.56565 47.3662C15.985 54.8449 28.0143 54.8449 35.4336 47.3662Z"
                  fill="#D50707"
                />
                <path
                  d="M39.7011 33.8248C39.7011 26.1203 34.8565 19.556 28.0695 17.0591C26.6212 16.6726 25.1003 16.467 23.5313 16.467C13.7552 16.467 5.83072 24.4557 5.83072 34.309C5.83072 42.0135 10.6753 48.5778 17.4622 51.0748C18.9106 51.4612 20.4315 51.6668 22.0005 51.6668C31.7766 51.6668 39.7011 43.6781 39.7011 33.8248Z"
                  fill="white"
                />
                <path
                  d="M22.4808 18.7939C22.4808 19.6518 22.266 20.3462 22.0005 20.3462C21.7349 20.3462 21.5201 19.6509 21.5201 18.7939C21.5201 17.937 21.7349 17.2417 22.0005 17.2417C22.266 17.2417 22.4808 17.937 22.4808 18.7939Z"
                  fill="#3B3B3B"
                />
                <path
                  d="M21.5192 48.8555C21.5192 47.9976 21.734 47.3032 21.9995 47.3032C22.2651 47.3032 22.4799 47.9985 22.4799 48.8555C22.4799 49.7124 22.2651 50.4077 21.9995 50.4077C21.734 50.4077 21.5192 49.7124 21.5192 48.8555Z"
                  fill="#3B3B3B"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_879">
                  <rect width="44" height="56" fill="white" />
                </clipPath>
              </defs>
            </svg>

            {/* Text */}
            <div className="text-center font-pop text-4xl font-normal leading-10">
              <span className="text-gray-800">더 </span>
              <span className="text-red-600">빨리</span>
              <span className="text-gray-800"> 풀어보세요.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimerPopup;
