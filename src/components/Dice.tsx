interface DiceProps {
  number: number;
  selected?: boolean;
  onClick?: () => void;
}

const Dice = ({ number, selected = false, onClick }: DiceProps) => {
  const renderDots = () => {
    const dots = [];

    switch (number) {
      case 1:
        dots.push(<circle key="1" cx="50" cy="50" r="12" fill="black" />);
        break;
      case 2:
        dots.push(<circle key="1" cx="23" cy="23" r="12" fill="black" />);
        dots.push(<circle key="2" cx="77" cy="77" r="12" fill="black" />);
        break;
      case 3:
        dots.push(<circle key="1" cx="23" cy="23" r="12" fill="black" />);
        dots.push(<circle key="2" cx="50" cy="50" r="12" fill="black" />);
        dots.push(<circle key="3" cx="77" cy="77" r="12" fill="black" />);
        break;
      case 4:
        dots.push(<circle key="1" cx="23" cy="23" r="12" fill="black" />);
        dots.push(<circle key="2" cx="77" cy="77" r="12" fill="black" />);
        dots.push(<circle key="3" cx="77" cy="23" r="12" fill="black" />);
        dots.push(<circle key="4" cx="23" cy="77" r="12" fill="black" />);
        break;
      default:
        break;
    }

    return dots;
  };

  return (
    <button
      onClick={onClick}
      className={`p-2.5 rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 ${
        selected ? "" : "hover:bg-happy-blue-100"
      }`}
    >
      {number === 0 ? (
        <div
          className={`w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] rounded-2xl shadow-lg ${
            selected ? "bg-happy-blue-1000" : "bg-white"
          }`}
        ></div>
      ) : (
        <svg
          width="80"
          height="80"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] drop-shadow-lg"
        >
          <rect width="100" height="100" rx="16" fill="white" />
          {renderDots()}
        </svg>
      )}
    </button>
  );
};

export default Dice;
