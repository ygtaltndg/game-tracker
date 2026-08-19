import React, { useState } from 'react';

function GameForm({ onAddGame }) {
  const [title, setTitle] = useState('');
  const [platform, setPlatform] = useState('PC');
  const [status, setStatus] = useState('Oynanıyor');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddGame({
      id: Date.now(),
      title,
      platform,
      status
    });

    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-800 p-4 rounded-xl shadow-md mb-8 flex flex-col md:flex-row gap-3 border border-slate-700">
      <input
        type="text"
        placeholder="Oyun Adı..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="flex-1 bg-slate-900 text-white px-4 py-2 rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        value={platform}
        onChange={(e) => setPlatform(e.target.value)}
        className="bg-slate-900 text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none"
      >
        <option value="PC">PC</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="Switch">Switch</option>
      </select>
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="bg-slate-900 text-white px-3 py-2 rounded-lg border border-slate-700 focus:outline-none"
      >
        <option value="Oynanıyor">Hala Oynuyorum</option>
        <option value="Tamamlandı">Bitirdim</option>
        <option value="Ertelendi">Ertelendi/Bitmedi</option>
      </select>
      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium px-6 py-2 rounded-lg transition cursor-pointer"
      >
        Ekle
      </button>
    </form>
  );
}

export default GameForm;