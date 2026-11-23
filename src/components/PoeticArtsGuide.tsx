import React, { useState } from 'react';
import { Feather, Search, Sparkles, BookOpen, Layers } from 'lucide-react';
import { POETIC_ARTS } from '../data/poeticArts';
import { ArtEncyclopediaEntry } from '../types';

export const PoeticArtsGuide: React.FC = () => {
  const [search, setSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'maʼnaviy' | 'lafziy'>('all');
  const [selectedArt, setSelectedArt] = useState<ArtEncyclopediaEntry>(POETIC_ARTS[0]);

  const filteredArts = POETIC_ARTS.filter(art => {
    const matchesCat = categoryFilter === 'all' || art.category === categoryFilter;
    const matchesSearch =
      art.name.toLowerCase().includes(search.toLowerCase()) ||
      art.definition.toLowerCase().includes(search.toLowerCase()) ||
      art.exampleBayt.toLowerCase().includes(search.toLowerCase()) ||
      art.arabicName.includes(search);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Feather className="w-6 h-6 text-amber-700" />
              Sheʼriy Sanʼatlar Qomusi (Ilmi Badiʼ)
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              Mumtoz Sharq poetikasida soʻz sanʼati (badiʼ ilmi) maʼnaviy va lafziy goʻzallik vositalariga boʻlinadi. Bu yerda Alisher Navoiy va boshqa mumtoz shoirlar gʻazallarida qoʻllangan asosiy sheʼriy sanʼatlarning ilmiy taʼrifi va tahliliy misollari jamlangan.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-lg">
            <button
              onClick={() => setCategoryFilter('all')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                categoryFilter === 'all' ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Barchasi ({POETIC_ARTS.length})
            </button>
            <button
              onClick={() => setCategoryFilter('maʼnaviy')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                categoryFilter === 'maʼnaviy' ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Maʼnaviy sanʼatlar
            </button>
            <button
              onClick={() => setCategoryFilter('lafziy')}
              className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                categoryFilter === 'lafziy' ? 'bg-amber-600 text-white shadow-xs' : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              Lafziy sanʼatlar
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Sanʼat nomi (tashbeh, tajnis, tazod, talmeh...) yoki misol boʻyicha qidirish..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      {/* Main Grid: List + Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left List */}
        <div className="lg:col-span-4 space-y-2 max-h-[640px] overflow-y-auto pr-1">
          {filteredArts.map((art) => {
            const isSelected = selectedArt.id === art.id;
            return (
              <div
                key={art.id}
                onClick={() => setSelectedArt(art)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-amber-100/80 border-amber-400 shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-serif font-bold text-sm text-stone-900">
                    {art.name}
                  </h4>
                  <span className="font-serif text-sm text-amber-800 font-bold" dir="rtl">
                    {art.arabicName}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-stone-500">
                  <span className={`px-2 py-0.5 rounded capitalize text-[11px] font-medium ${
                    art.category === 'maʼnaviy' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-purple-50 text-purple-700 border border-purple-200'
                  }`}>
                    {art.category} sanʼat
                  </span>
                  <span className="text-stone-400 text-[11px] truncate max-w-[140px]">
                    {art.subtypes?.length || 0} ta tur
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Detail */}
        {selectedArt && (
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-stone-200 pb-4 flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize ${
                    selectedArt.category === 'maʼnaviy' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {selectedArt.category} sanʼat
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-serif text-stone-900">
                  {selectedArt.name}
                </h3>
              </div>
              <div className="text-right">
                <span className="text-2xl font-serif text-amber-800 font-bold" dir="rtl">
                  {selectedArt.arabicName}
                </span>
                <span className="block text-xs text-stone-400 mt-0.5">Mumtoz atama</span>
              </div>
            </div>

            {/* Definition */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-700" />
                Ilmiy Taʼrifi:
              </h5>
              <p className="text-sm text-stone-800 bg-stone-50 p-4 rounded-xl border border-stone-200 leading-relaxed font-sans">
                {selectedArt.definition}
              </p>
            </div>

            {/* Example Bayt */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Alisher Navoiy Gʻazaliyotidan Misol:
              </h5>
              <div className="bg-stone-900 text-amber-100 p-5 rounded-xl border border-amber-900/40 text-center font-serif text-base sm:text-lg leading-relaxed shadow-inner">
                {selectedArt.exampleBayt}
              </div>
              <div className="text-right text-xs text-stone-400 italic">
                Shoir: {selectedArt.poet}
              </div>
            </div>

            {/* Academic Analysis */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Olimlar tomonidan tahlili:
              </h5>
              <div className="text-xs sm:text-sm text-stone-700 bg-amber-50/50 p-4 rounded-xl border border-amber-200 leading-relaxed">
                {selectedArt.analysis}
              </div>
            </div>

            {/* Subtypes */}
            {selectedArt.subtypes && selectedArt.subtypes.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-stone-100">
                <h5 className="text-xs font-bold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-700" />
                  Ichki turlari va koʻrinishlari:
                </h5>
                <div className="flex flex-wrap gap-2">
                  {selectedArt.subtypes.map((sub, sIdx) => (
                    <span key={sIdx} className="text-xs px-3 py-1 bg-stone-100 text-stone-800 rounded-lg border border-stone-200 font-medium">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
