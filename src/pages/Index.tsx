const Index = () => {
  return (
    <div className="min-h-screen bg-happy-blue-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-pop font-bold text-happy-blue-1000 mb-4">
          숫자 매칭 게임
        </h1>
        <p className="text-xl text-happy-blue-900">게임이 로드되었습니다!</p>
        <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="w-20 h-20 bg-happy-blue-1000 rounded-2xl mx-auto mb-4"></div>
          <p className="text-happy-blue-1000">테스트 박스</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
