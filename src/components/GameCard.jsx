import React from 'react';

function GameCard({ game, onToggleStatus, onDeleteGame }) {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Tamamlandı':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'Oynanıyor':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/30';
      default:
        return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
    }
  };

  return (
    <div className="bg-slate-800 p-4 rounded-xl flex items-center justify-between border border-slate-700 shadow-sm hover:border-slate-600 transition">
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggleStatus(game.id)}
          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition cursor-pointer ${
            game.status === 'Tamamlandı'
              ? 'bg-emerald-500 border-emerald-500 text-white'
              : 'border-slate-500 hover:border-indigo-400'
          }`}
          title="Durumu Değiştir"
        >
          {game.status === 'Tamamlandı' && '✓'}
        </button>
        <div>
          <h3 className={`font-semibold ${game.status === 'Tamamlandı' ? 'line-through text-slate-500' : 'text-slate-100'}`}>
            {game.title}
          </h3>
          <div className="flex gap-2 text-xs mt-1">
            <span className="bg-slate-700 text-slate-300 px-2 py-0.5 rounded">{game.platform}</span>
            <span className={`px-2 py-0.5 rounded border ${getBadgeStyle(game.status)}`}>
              {game.status}
            </span>
          </div>
        </div>
      </div>

      <button
        onClick={() => onDeleteGame(game.id)}
        className="text-slate-400 hover:text-rose-400 p-2 transition cursor-pointer"
        title="Oyunu Sil"
      >
        🗑️
      </button>
    </div>
  );
}

export default GameCard;