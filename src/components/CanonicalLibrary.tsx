import React, { useState } from 'react';
import { BookMarked, Search, UserCheck, Layers, BookOpen, Sparkles, Feather, Compass, ArrowRight } from 'lucide-react';
import { CANONICAL_GHAZALS } from '../data/canonicalGhazals';
import { CanonicalGhazal } from '../types';

interface CanonicalLibraryProps {
  onSelectGhazalForAnalysis?: (ghazal: CanonicalGhazal) => void;
}

export const CanonicalLibrary: React.FC<CanonicalLibraryProps> = ({ onSelectGhazalForAnalysis }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedScholar, setSelectedScholar] = useState<string>('all');
  const [selectedGhazal, setSelectedGhazal] = useState<CanonicalGhazal>(CANONICAL_GHAZALS[0]);

  const scholars = Array.from(new Set(CANONICAL_GHAZALS.map(g => g.commentator)));

  const filteredGhazals = CANONICAL_GHAZALS.filter(g => {
    const matchesScholar = selectedScholar === 'all' || g.commentator === selectedScholar;
    const matchesSearch =
      g.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.commentator.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.meter.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesScholar && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header info */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <BookMarked className="w-6 h-6 text-amber-700" />
              Akademik Sharhlar Xazinasi
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              Alisher Navoiy asarlariga atoqli adabiyotshunoslar (Najmiddin Komilov, Dilnavoz Yusupova, Erkin Vohidov, Ibrohim Haqqul, Muhammad Ali, Abdurashid Abdugʻafurov, Jamol Kamol) tomonidan bitilgan fundamental ilmiy-badiiy tahlillar majmuasi.
            </p>
          </div>

          {/* Filter by Scholar */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold text-stone-500 uppercase">Olim:</span>
            <select
              value={selectedScholar}
              onChange={(e) => setSelectedScholar(e.target.value)}
              className="text-xs bg-stone-50 border border-stone-300 rounded-lg px-3 py-1.5 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              <option value="all">Barcha olimlar sharhlari ({CANONICAL_GHAZALS.length})</option>
              {scholars.map((s, idx) => (
                <option key={idx} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mt-4 relative">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Gʻazal matlaʼsi, sarlavhasi, aruz vazni yoki kalit soʻz boʻyicha qidirish..."
            className="w-full pl-10 pr-4 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:bg-white focus:outline-none"
          />
        </div>
      </div>

      {/* Main Content: Sidebar + Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Ghazal List Sidebar */}
        <div className="lg:col-span-4 space-y-2 max-h-[720px] overflow-y-auto pr-1">
          {filteredGhazals.map((g) => {
            const isSelected = selectedGhazal?.id === g.id;
            return (
              <div
                key={g.id}
                onClick={() => setSelectedGhazal(g)}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-amber-100/70 border-amber-400 shadow-sm'
                    : 'bg-white hover:bg-stone-50 border-stone-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                  <span className="font-semibold text-amber-900">{g.poet}</span>
                  <span className="px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                    {g.couplets.length} bayt
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-stone-900 line-clamp-1 mb-1">
                  {g.firstLine}
                </h4>
                <div className="flex items-center justify-between text-xs text-stone-500 mt-2">
                  <span className="flex items-center gap-1 text-amber-800">
                    <UserCheck className="w-3.5 h-3.5" />
                    {g.commentator}
                  </span>
                  <span className="text-[11px] text-stone-400 italic">
                    {g.sourceBook.split('(')[0]}
                  </span>
                </div>
              </div>
            );
          })}

          {filteredGhazals.length === 0 && (
            <div className="p-8 text-center text-stone-500 bg-white rounded-xl border border-stone-200">
              Qidiruv boʻyicha gʻazal topilmadi.
            </div>
          )}
        </div>

        {/* Ghazal Deep Detail View */}
        {selectedGhazal && (
          <div className="lg:col-span-8 bg-white border border-stone-200 rounded-xl p-5 sm:p-7 shadow-sm space-y-6">
            {/* Header info */}
            <div className="border-b border-stone-200 pb-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 border border-amber-200">
                  {selectedGhazal.genre}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-100 text-stone-800 border border-stone-200">
                  {selectedGhazal.compositionType}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Sharhlovchi: {selectedGhazal.commentator}
                </span>
              </div>
              <h3 className="text-2xl font-bold font-serif text-stone-900">
                {selectedGhazal.title}
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Muallif: <strong className="text-stone-800">{selectedGhazal.poet}</strong> • Manba: {selectedGhazal.sourceBook} {selectedGhazal.divan ? `• (${selectedGhazal.divan})` : ''}
              </p>
            </div>

            {/* Original Full Text Display */}
            <div className="bg-stone-900 text-amber-50 p-6 rounded-xl border border-amber-900/40 font-serif text-center text-base sm:text-lg leading-loose tracking-wide shadow-inner">
              {selectedGhazal.text}
            </div>

            {/* Aruz and Rhythm Card */}
            <div className="bg-stone-50 border border-stone-200 rounded-lg p-4 space-y-2">
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Layers className="w-4 h-4 text-amber-700" />
                <span>Aruz Vazni: {selectedGhazal.meter.name}</span>
              </div>
              <p className="text-xs font-mono text-stone-800 bg-white p-2 rounded border border-stone-200">
                <span className="font-semibold text-stone-600">Ruknlar:</span> {selectedGhazal.meter.rukns} • <span className="font-semibold text-stone-600">Qolip:</span> {selectedGhazal.meter.pattern}
              </p>
              <p className="text-xs text-stone-600 italic">
                {selectedGhazal.meter.rhythmEffect}
              </p>
            </div>

            {/* Baytma-bayt Scholarly Commentaries */}
            <div className="space-y-4">
              <h4 className="text-base font-bold font-serif text-stone-900 flex items-center gap-2">
                <Feather className="w-5 h-5 text-amber-700" />
                Baytma-bayt Ilmiy Sharhlar
              </h4>

              <div className="space-y-4">
                {selectedGhazal.couplets.map((couplet, idx) => (
                  <div key={idx} className="border border-stone-200 rounded-xl p-4 bg-stone-50/40 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded-full">
                        {couplet.number}-Bayt
                      </span>
                    </div>

                    <div className="font-serif text-sm sm:text-base font-bold text-stone-900 whitespace-pre-line pl-3 border-l-2 border-amber-600">
                      {couplet.originalText}
                    </div>

                    <div className="text-xs sm:text-sm text-stone-700 bg-white p-3 rounded-lg border border-stone-200">
                      <strong className="text-stone-900 block mb-1 text-xs uppercase tracking-wider">Nasriy Bayoni:</strong>
                      {couplet.proseTranslation}
                    </div>

                    {couplet.poeticArts && couplet.poeticArts.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                          Sheʼriy Sanʼatlar:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {couplet.poeticArts.map((art, aIdx) => (
                            <div key={aIdx} className="bg-white p-2.5 rounded-lg border border-amber-200 text-xs">
                              <span className="font-bold text-amber-900 font-serif mr-1.5">{art.name}:</span>
                              <span className="text-stone-600">{art.explanation}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1 text-xs">
                      <div className="bg-white p-2.5 rounded-lg border border-blue-100">
                        <span className="font-bold text-blue-900 block mb-0.5">Zohiriy (Insoniy) maʼno:</span>
                        <p className="text-stone-600">{couplet.literalMeaning}</p>
                      </div>
                      <div className="bg-white p-2.5 rounded-lg border border-emerald-100">
                        <span className="font-bold text-emerald-900 block mb-0.5">Botiniy (Tasavvufiy) maʼno:</span>
                        <p className="text-stone-600">{couplet.sufiMeaning || '—'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scholar Insights Summary */}
            <div className="bg-gradient-to-br from-amber-50/70 to-stone-100 border border-amber-300/80 rounded-xl p-5 space-y-4">
              <div className="flex items-center space-x-2 text-amber-900 font-bold text-sm">
                <Compass className="w-5 h-5 text-amber-700" />
                <span>Olimning Xulosasi va Falsafiy Mazmun</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-800 leading-relaxed">
                {selectedGhazal.overallMeaning}
              </p>

              <div className="bg-white/80 p-3.5 rounded-lg border border-amber-200">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block mb-1">
                  Kosa Tagidagi Nimkosa (Tagmatn):
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedGhazal.nimkosaSubtext}
                </p>
              </div>

              <div className="bg-white/80 p-3.5 rounded-lg border border-emerald-200">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block mb-1">
                  Didaktik Saboq:
                </span>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {selectedGhazal.didacticConclusion}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
