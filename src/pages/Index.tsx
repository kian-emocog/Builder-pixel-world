import { useState, useEffect, useRef } from "react";
import StatusBar from "../components/StatusBar";
import ProgressSlider from "../components/ProgressSlider";
import Dice from "../components/Dice";
import NumberCard from "../components/NumberCard";
import TipSection from "../components/TipSection";
import ActionButtons from "../components/ActionButtons";
import TimerPopup from "../components/TimerPopup";

interface GameLevel {
  id: number;
  diceNumbers: number[];
  cardNumber: number;
  targetNumbers: number[];
}

const gameLevels: GameLevel[] = [
  {
    id: 1,
    diceNumbers: [0, 1, 2, 3, 4],
    cardNumber: 0,
    targetNumbers: [0],
  },
  {
    id: 2,
    diceNumbers: [5, 6, 2, 4, 3],
    cardNumber: 4,
    targetNumbers: [4],
  },
];

const Index = () => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [showTimerPopup, setShowTimerPopup] = useState(false);
  const [lastInteractionTime, setLastInteractionTime] = useState(Date.now());

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const popupTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const currentGameLevel = gameLevels[currentLevel] || gameLevels[0];

  // 사용자 상호작용 시간 업데이트
  const updateInteractionTime = () => {
    setLastInteractionTime(Date.now());
  };

  // 타이머 체크 및 팝업 표시
  useEffect(() => {
    const checkTimer = () => {
      const timeSinceLastInteraction = Date.now() - lastInteractionTime;

      // 2초(2000ms) 후에 팝업 표시 (레벨 1에서만)
      if (
        timeSinceLastInteraction >= 2000 &&
        currentLevel === 0 &&
        selectedNumbers.length === 0 &&
        !showTimerPopup
      ) {
        setShowTimerPopup(true);

        // 1.5초 후 팝업 자동 닫기
        popupTimeoutRef.current = setTimeout(() => {
          setShowTimerPopup(false);
          updateInteractionTime(); // 팝업 닫은 후 타이머 리셋
        }, 1500);
      }
    };

    // 500ms마다 체크
    timerRef.current = setInterval(checkTimer, 500);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      if (popupTimeoutRef.current) {
        clearTimeout(popupTimeoutRef.current);
      }
    };
  }, [
    lastInteractionTime,
    currentLevel,
    selectedNumbers.length,
    showTimerPopup,
  ]);

  const handleItemClick = (number: number) => {
    updateInteractionTime(); // 클릭 시 상호작용 시간 업데이트

    if (selectedNumbers.includes(number)) {
      // Deselect if already selected
      setSelectedNumbers(selectedNumbers.filter((n) => n !== number));
    } else {
      // Select if not selected
      const newSelectedNumbers = [...selectedNumbers, number];
      setSelectedNumbers(newSelectedNumbers);

      // Check if level is complete
      const targetNumbers = currentGameLevel.targetNumbers;
      const hasAllTargets = targetNumbers.every((target) =>
        newSelectedNumbers.includes(target),
      );

      if (hasAllTargets && newSelectedNumbers.length === targetNumbers.length) {
        // Level completed! Move to next level after a short delay
        setTimeout(() => {
          setCompletedLevels([...completedLevels, currentLevel]);
          setSelectedNumbers([]);
          if (currentLevel + 1 < gameLevels.length) {
            setCurrentLevel(currentLevel + 1);
          }
          updateInteractionTime(); // 레벨 완료 시 타이머 리셋
        }, 1000);
      }
    }
  };

  const isSelected = (number: number) => selectedNumbers.includes(number);

  const getTipText = () => {
    if (selectedNumbers.length === 0) {
      return "같은 수를 최대한 빨리 골라보자.";
    } else if (selectedNumbers.length > 0) {
      return "같은 수를 최대한 빨리 골라야 정답이야.";
    }
    return "";
  };

  const tipText = getTipText();

  const handlePopupClose = () => {
    setShowTimerPopup(false);
    updateInteractionTime();
    if (popupTimeoutRef.current) {
      clearTimeout(popupTimeoutRef.current);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-happy-blue-100 flex flex-col">
        {/* Main container - responsive for all screen sizes */}
        <div className="w-full max-w-sm mx-auto bg-happy-blue-100 min-h-screen flex flex-col sm:max-w-md lg:max-w-lg xl:max-w-xl">
          {/* Status Bar */}
          <StatusBar />

          {/* Header with progress slider and action buttons */}
          <div className="flex flex-col gap-4 px-6 py-2">
            <div className="flex justify-between items-center gap-4">
              {/* Progress Section */}
              <div className="flex-1 min-w-0">
                <ProgressSlider />
              </div>

              {/* Action Buttons */}
              <div className="flex-shrink-0">
                <ActionButtons />
              </div>
            </div>
          </div>

          {/* Main Game Area */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
            {/* Game Grid */}
            <div className="w-full max-w-md">
              <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-12 place-items-center">
                {/* First row */}
                <div className="flex justify-center">
                  <Dice
                    number={currentGameLevel.diceNumbers[0]}
                    selected={isSelected(currentGameLevel.diceNumbers[0])}
                    onClick={() =>
                      handleItemClick(currentGameLevel.diceNumbers[0])
                    }
                  />
                </div>
                <div className="flex justify-center">
                  <NumberCard
                    number={currentGameLevel.cardNumber}
                    selected={isSelected(currentGameLevel.cardNumber)}
                    onClick={() => handleItemClick(currentGameLevel.cardNumber)}
                  />
                </div>
                <div className="flex justify-center">
                  <Dice
                    number={currentGameLevel.diceNumbers[1]}
                    selected={isSelected(currentGameLevel.diceNumbers[1])}
                    onClick={() =>
                      handleItemClick(currentGameLevel.diceNumbers[1])
                    }
                  />
                </div>

                {/* Second row */}
                <div className="flex justify-center">
                  <Dice
                    number={currentGameLevel.diceNumbers[2]}
                    selected={isSelected(currentGameLevel.diceNumbers[2])}
                    onClick={() =>
                      handleItemClick(currentGameLevel.diceNumbers[2])
                    }
                  />
                </div>
                <div className="flex justify-center">
                  <Dice
                    number={currentGameLevel.diceNumbers[3]}
                    selected={isSelected(currentGameLevel.diceNumbers[3])}
                    onClick={() =>
                      handleItemClick(currentGameLevel.diceNumbers[3])
                    }
                  />
                </div>
                <div className="flex justify-center">
                  <Dice
                    number={currentGameLevel.diceNumbers[4]}
                    selected={isSelected(currentGameLevel.diceNumbers[4])}
                    onClick={() =>
                      handleItemClick(currentGameLevel.diceNumbers[4])
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Tip Section at bottom */}
          <div className="px-6 pb-6 mt-auto">
            <TipSection text={tipText} />

            {/* 데모용 레벨 완료 메시지 */}
            {completedLevels.length > 0 && (
              <div className="flex justify-center mt-4">
                <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  🎉 레벨 {completedLevels.length} 완료!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* For larger screens, show desktop view */}
        <div className="hidden xl:flex fixed inset-0 bg-gradient-to-br from-happy-blue-100 to-happy-blue-200 items-center justify-center p-8">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
            <div className="text-center text-happy-blue-1000 mb-8">
              <h1 className="text-4xl font-pop font-bold mb-4">
                Number Matching Game
              </h1>
              <p className="text-xl opacity-75 mb-8">
                Find and match the same numbers as quickly as possible!
              </p>
            </div>

            {/* Desktop game layout */}
            <div className="space-y-8">
              <div className="flex justify-center">
                <ProgressSlider />
              </div>

              <div className="grid grid-cols-3 gap-8 place-items-center max-w-lg mx-auto">
                <Dice
                  number={currentGameLevel.diceNumbers[0]}
                  selected={isSelected(currentGameLevel.diceNumbers[0])}
                  onClick={() =>
                    handleItemClick(currentGameLevel.diceNumbers[0])
                  }
                />
                <NumberCard
                  number={currentGameLevel.cardNumber}
                  selected={isSelected(currentGameLevel.cardNumber)}
                  onClick={() => handleItemClick(currentGameLevel.cardNumber)}
                />
                <Dice
                  number={currentGameLevel.diceNumbers[1]}
                  selected={isSelected(currentGameLevel.diceNumbers[1])}
                  onClick={() =>
                    handleItemClick(currentGameLevel.diceNumbers[1])
                  }
                />
                <Dice
                  number={currentGameLevel.diceNumbers[2]}
                  selected={isSelected(currentGameLevel.diceNumbers[2])}
                  onClick={() =>
                    handleItemClick(currentGameLevel.diceNumbers[2])
                  }
                />
                <Dice
                  number={currentGameLevel.diceNumbers[3]}
                  selected={isSelected(currentGameLevel.diceNumbers[3])}
                  onClick={() =>
                    handleItemClick(currentGameLevel.diceNumbers[3])
                  }
                />
                <Dice
                  number={currentGameLevel.diceNumbers[4]}
                  selected={isSelected(currentGameLevel.diceNumbers[4])}
                  onClick={() =>
                    handleItemClick(currentGameLevel.diceNumbers[4])
                  }
                />
              </div>

              <div className="flex justify-center">
                <TipSection text={tipText} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timer Popup */}
      <TimerPopup isVisible={showTimerPopup} onClose={handlePopupClose} />
    </>
  );
};

export default Index;
