import React, { useState, useEffect } from 'react';
import GameForm from './components/GameForm';
import GameCard from './components/GameCard';

function App() {
  const [games, setGames] = useState(() => {
    const saved = localStorage.getItem('game_backlog_data');
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState('Tümü');

  useEffect(() => {
    localStorage.setItem('game_backlog_data', JSON.stringify(games));
  }, [games]);

  const handleAddGame = (newGame) => {
    setGames([newGame, ...games]);
  };

  const handleToggleStatus = (id) => {
    setGames(games.map(game => {
      if (game.id === id) {
        const nextStatus = game.status === 'Tamamlandı' ? 'Oynanıyor' : 'Tamamlandı';
        return { ...game, status: nextStatus };
      }
      return game;
    }));
  };

  const handleDeleteGame = (id) => {
    setGames(games.filter(game => game.id !== id));
  };

  const filteredGames = games.filter(game => {
    if (filter === 'Tümü') return true;
    return game.status === filter;
  });

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-6 md:p-12">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-indigo-400">Game Tracker</h1>
          <p className="text-slate-400 mt-2 text-sm">Oynanan, biten ve ertelenen oyunların listesi</p>
        </header>

        <GameForm onAddGame={handleAddGame} />

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {['Tümü', 'Oynanıyor', 'Tamamlandı', 'Ertelendi'].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 text-sm rounded-lg border transition cursor-pointer ${
                filter === tab
                  ? 'bg-indigo-600 text-white border-indigo-600'
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {filteredGames.length === 0 ? (
            <p className="text-center text-slate-500 py-10">Bu filtrede gösterilecek oyun bulunamadı.</p>
          ) : (
            filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onToggleStatus={handleToggleStatus}
                onDeleteGame={handleDeleteGame}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;