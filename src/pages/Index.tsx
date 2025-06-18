import StatusBar from "../components/StatusBar";
import ProgressSlider from "../components/ProgressSlider";
import Dice from "../components/Dice";
import NumberCard from "../components/NumberCard";
import TipSection from "../components/TipSection";
import ActionButtons from "../components/ActionButtons";

const Index = () => {
  return (
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
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
          {/* Game Grid */}
          <div className="w-full max-w-md">
            <div className="grid grid-cols-3 gap-6 sm:gap-8 lg:gap-12 place-items-center">
              {/* First row */}
              <div className="flex justify-center">
                <Dice number={0} />
              </div>
              <div className="flex justify-center">
                <NumberCard number={0} />
              </div>
              <div className="flex justify-center">
                <Dice number={1} />
              </div>

              {/* Second row */}
              <div className="flex justify-center">
                <Dice number={2} />
              </div>
              <div className="flex justify-center">
                <Dice number={3} />
              </div>
              <div className="flex justify-center">
                <Dice number={4} />
              </div>
            </div>
          </div>
        </div>

        {/* Tip Section at bottom */}
        <div className="px-6 pb-6 mt-auto">
          <TipSection />
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
              <Dice number={0} />
              <NumberCard number={0} />
              <Dice number={1} />
              <Dice number={2} />
              <Dice number={3} />
              <Dice number={4} />
            </div>

            <div className="flex justify-center">
              <TipSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
