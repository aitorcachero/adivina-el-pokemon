export default function Score({ score }) {
  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-6 z-10">
      <div className="bg-gradient-to-br from-slate-800/95 to-slate-900/95 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-slate-700/50 min-w-[160px]">
        <h3 className="text-lg font-bold text-white mb-3 text-center border-b border-slate-600 pb-2">
          📊 Puntuación
        </h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-green-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Aciertos:
            </span>
            <span className="text-white font-bold text-lg">{score.good}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-red-400 font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-red-400 rounded-full"></span>
              Fallos:
            </span>
            <span className="text-white font-bold text-lg">{score.fail}</span>
          </div>
          <div className="pt-2 border-t border-slate-600">
            <div className="flex items-center justify-between">
              <span className="text-yellow-400 font-medium text-sm">
                Precisión:
              </span>
              <span className="text-yellow-400 font-bold">
                {score.good + score.fail > 0
                  ? Math.round((score.good / (score.good + score.fail)) * 100)
                  : 0}
                %
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
