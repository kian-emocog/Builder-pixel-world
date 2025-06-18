import StatusBar from "../components/StatusBar";
import ProgressSlider from "../components/ProgressSlider";
import Dice from "../components/Dice";
import NumberCard from "../components/NumberCard";
import TipSection from "../components/TipSection";
import ActionButtons from "../components/ActionButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-happy-blue-100 flex flex-col">
      {/* Mobile container with max width */}
      <div className="w-full max-w-sm mx-auto bg-happy-blue-100 min-h-screen flex flex-col md:max-w-md lg:max-w-lg">
        {/* Status Bar */}
        <StatusBar />

        {/* Header with progress slider and action buttons */}
        <div className="flex flex-col gap-4 px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Progress Section */}
            <div className="flex-1">
              <ProgressSlider />
            </div>

            {/* Action Buttons */}
            <ActionButtons />
          </div>
        </div>

        {/* Main Game Area */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          {/* Game Grid */}
          <div className="grid grid-cols-3 gap-8 mb-8 max-w-md">
            {/* First row */}
            <Dice number={0} />
            <NumberCard number={0} />
            <Dice number={1} />

            {/* Second row */}
            <Dice number={2} />
            <Dice number={3} />
            <Dice number={4} />
          </div>
        </div>

        {/* Tip Section at bottom */}
        <div className="px-6 pb-6">
          <TipSection />
        </div>
      </div>

      {/* Desktop/Tablet responsive wrapper */}
      <div className="hidden md:block fixed inset-0 bg-happy-blue-100/50 backdrop-blur-sm pointer-events-none">
        <div className="flex items-center justify-center min-h-screen p-8">
          <div className="text-center text-happy-blue-1000">
            <h1 className="text-3xl font-pop font-bold mb-4">
              Number Matching Game
            </h1>
            <p className="text-lg opacity-75">
              Best experienced on mobile devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
