import React, { useState } from 'react';
import { Compass, Search, BookOpen, Sparkles } from 'lucide-react';
import { SUFI_SYMBOLS } from '../data/sufiSymbols';
import { SufiSymbolEntry } from '../types';

export const SufiSymbolsGuide: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSymbol, setSelectedSymbol] = useState<SufiSymbolEntry>(SUFI_SYMBOLS[0]);

  const filteredSymbols = SUFI_SYMBOLS.filter(sym => {
    const query = search.toLowerCase();
    return (
      sym.symbol.toLowerCase().includes(query) ||
      sym.literalMeaning.toLowerCase().includes(query) ||
      sym.sufiMeaning.toLowerCase().includes(query) ||
      sym.exampleBayt.toLowerCase().includes(query) ||
      sym.classicalContext.toLowerCase().includes(query)
    );
  });

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Compass className="w-6 h-6 text-emerald-700" />
              Tasavvufiy Timsollar va Majozlar Qomusi
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              Mumtoz gʻazallarda «Al-majozu qantaratur-haqiqa» (Majoz – haqiqat koʻprigidir) qoidasiga koʻra, moddiy timsollar orqali yuksak ilohiy haqiqatlar, qalb kechinmalari va maʼrifat nurlari ifodalangan.
            </p>
          </div>

          <div className="text-xs font-semibold px-3 py-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg">
            {SUFI_SYMBOLS.length} ta asosiy irfoniy istiloh
          </div>
        </div>

        {/* Search */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Ramz nomi (may, soqiy, zulf, xol, fano, tavhid...) yoki maʼno boʻyicha qidirish..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      {/* Grid: Symbols list + Selected Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Symbol Cards */}
        <div className="lg:col-span-5 space-y-2 max-h-[640px] overflow-y-auto pr-1">
          {filteredSymbols.map((item) => {
            const isSelected = selectedSymbol.id === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setSelectedSymbol(item)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-emerald-100/70 border-emerald-400 shadow-xs'
                    : 'bg-white hover:bg-stone-50 border-stone-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif font-bold text-base text-stone-900">
                    {item.symbol}
                  </span>
                </div>
                <p className="text-xs text-stone-600 line-clamp-2 mt-1.5 leading-relaxed">
                  <strong className="text-emerald-900">Irfoniy maʼnosi:</strong> {item.sufiMeaning}
                </p>
              </div>
            );
          })}
        </div>

        {/* Right Column: Deep Meaning View */}
        {selectedSymbol && (
          <div className="lg:col-span-7 bg-white border border-stone-200 rounded-xl p-5 sm:p-7 shadow-sm space-y-6">
            <div className="border-b border-stone-200 pb-4">
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                Tasavvufiy ramz
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900">
                «{selectedSymbol.symbol}»
              </h3>
            </div>

            {/* Zohiriy vs Botiniy Side-by-Side */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  Zohiriy (Lafziy) Maʼnosi:
                </span>
                <p className="text-xs sm:text-sm text-stone-800 leading-relaxed font-sans">
                  {selectedSymbol.literalMeaning}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                  <Compass className="w-4 h-4 text-emerald-700" />
                  Botiniy (Tasavvufiy) Maʼnosi:
                </span>
                <p className="text-xs sm:text-sm text-stone-900 leading-relaxed font-sans">
                  {selectedSymbol.sufiMeaning}
                </p>
              </div>
            </div>

            {/* Illustrative Bayt */}
            <div className="space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Alisher Navoiy Gʻazalidan Misol:
              </h5>
              <div className="bg-stone-900 text-amber-100 p-5 rounded-xl border border-amber-900/40 text-center font-serif text-base sm:text-lg leading-relaxed shadow-inner">
                {selectedSymbol.exampleBayt}
              </div>
            </div>

            {/* In-depth Philosophical Explanation */}
            <div className="space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Akademik Sharh (Najmiddin Komilov tahlillari asosida):
              </h5>
              <p className="text-xs sm:text-sm text-stone-700 bg-stone-50 p-4 rounded-xl border border-stone-200 leading-relaxed font-sans">
                {selectedSymbol.classicalContext}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
