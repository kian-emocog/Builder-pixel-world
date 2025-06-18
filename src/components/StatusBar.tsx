const StatusBar = () => {
  return (
    <div className="flex justify-between items-end w-full px-6 py-4">
      <div className="text-sm font-medium text-gray-800">9:30</div>
      <div className="flex items-center gap-1">
        {/* Signal Icon */}
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.1"
            d="M8.5 1.41667C5.1 1.41667 2.125 2.90417 0 5.24167L8.5 15.5833L17 5.24167C14.875 2.90417 11.9 1.41667 8.5 1.41667Z"
            fill="#1D1B20"
          />
        </svg>
        {/* Network Icon */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.916748 1.41667L14.0834 15.5833H0.916748V1.41667Z"
            fill="#1D1B20"
          />
        </svg>
        {/* Battery Icon */}
        <svg
          width="24"
          height="15"
          viewBox="0 0 24 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M21.5 1H18.5V2.5H17C16.4477 2.5 16 3.00368 16 3.625V14.875C16 15.4963 16.4477 16 17 16H23C23.5523 16 24 15.4963 24 14.875V3.625C24 3.00368 23.5523 2.5 23 2.5H21.5V1Z"
            fill="#1D1B20"
          />
          <path
            d="M16 9C16 9.58333 16 14.3667 16 14.95C16 15.5299 16.4477 16 17 16H23C23.5523 16 24 15.5299 24 14.95C24 14.3667 24 9.58333 24 9H16Z"
            fill="#1D1B20"
          />
        </svg>
      </div>
    </div>
  );
};

export default StatusBar;
