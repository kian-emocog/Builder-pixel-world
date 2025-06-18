interface DiceProps {
  number: number;
  selected?: boolean;
}

const Dice = ({ number, selected = false }: DiceProps) => {
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
    <div
      className={`p-2.5 ${selected ? "bg-happy-blue-200" : ""} rounded-lg shadow-lg`}
    >
      {number === 0 ? (
        <div className="w-[100px] h-[100px] bg-white rounded-2xl"></div>
      ) : (
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-lg"
        >
          <rect width="100" height="100" rx="16" fill="white" />
          {renderDots()}
        </svg>
      )}
    </div>
  );
};

export default Dice;
