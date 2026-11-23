import React, { useState } from 'react';
import { Sparkles, BookOpen, Feather, Layers, Compass, Copy, Check, Printer, AlertCircle, RefreshCw, ChevronRight } from 'lucide-react';
import { GhazalAnalysis } from '../types';
import { CANONICAL_GHAZALS } from '../data/canonicalGhazals';

export const GhazalAnalyzer: React.FC = () => {
  const [ghazalText, setGhazalText] = useState<string>('');
  const [poet, setPoet] = useState<string>('Alisher Navoiy');
  const [specificQuestion, setSpecificQuestion] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<GhazalAnalysis | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeCoupletTab, setActiveCoupletTab] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'all' | 'single'>('all');

  // Quick load canonical sample
  const handleLoadSample = (sampleId: string) => {
    const found = CANONICAL_GHAZALS.find(g => g.id === sampleId);
    if (found) {
      setGhazalText(found.text);
      setPoet(found.poet);
      setAnalysis({
        id: found.id,
        title: found.title,
        poet: found.poet,
        genre: found.genre,
        compositionType: found.compositionType,
        meter: found.meter,
        rhymeAndRadif: found.rhymeAndRadif,
        vocabulary: found.vocabulary,
        couplets: found.couplets,
        overallMeaning: found.overallMeaning,
        nimkosaSubtext: found.nimkosaSubtext,
        didacticConclusion: found.didacticConclusion,
        commentator: found.commentator,
        sourceBook: found.sourceBook,
      });
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!ghazalText.trim()) {
      setError('Iltimos, avval tahlil qilish uchun gʻazal matnini kiriting.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/analyze-ghazal', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ghazalText,
          author: poet,
          specificQuestions: specificQuestion
        }),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Server xatosi: ${res.status}`);
      }

      const data: GhazalAnalysis = await res.json();
      setAnalysis(data);
      setActiveCoupletTab(0);
    } catch (err: any) {
      console.error(err);
      setError(err?.message || 'Tahlil jarayonida xatolik yuz berdi.');
    } finally {
      setLoading(false);
    }
  };

  const copyAnalysisText = () => {
    if (!analysis) return;
    const text = `
=== ${analysis.title} (${analysis.poet}) ===
Janr: ${analysis.genre} | Kompozitsiya: ${analysis.compositionType}
Aruz vazni: ${analysis.meter.name} (${analysis.meter.rukns})

[LUGʻAT]:
${analysis.vocabulary.map(v => `• ${v.word}: ${v.definition} (${v.origin || ''}) ${v.symbolism ? '— Ramzi: ' + v.symbolism : ''}`).join('\n')}

[BAYTMA-BAYT TAHLIL]:
${analysis.couplets.map(c => `
${c.number}-Bayt:
${c.originalText}
Nasriy bayoni: ${c.proseTranslation}
Sheʼriy sanʼatlar: ${c.poeticArts.map(a => `${a.name} [${a.targetWords}]: ${a.explanation}`).join('; ')}
Zohiriy maʼnosi: ${c.literalMeaning}
${c.sufiMeaning ? `Botiniy/Tasavvufiy maʼnosi: ${c.sufiMeaning}` : ''}
`).join('\n')}

[GʻOYAVIY MAZMUN]:
${analysis.overallMeaning}

[KOSA TAGIDAGI NIMKOSA]:
${analysis.nimkosaSubtext}

[DIDAKTIK XULOSA]:
${analysis.didacticConclusion}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Introduction Hero Card */}
      <div className="bg-gradient-to-br from-amber-50/80 via-stone-100 to-amber-100/40 border border-amber-900/15 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Feather className="w-6 h-6 text-amber-700" />
              Gʻazal Tahlili Laboratoriyasi
            </h2>
            <p className="text-sm text-stone-700 leading-relaxed max-w-3xl">
              Foydalanuvchi yuborgan gʻazalni akademik navoiyshunoslik metodologiyasi (Najmiddin Komilov, Dilnavoz Yusupova, Erkin Vohidov) asosida chuqur tahlil qiling: sheʼriy sanʼatlar (tashbeh, tajnis, tazod, talmeh, husni taʼlil, iyhom), aruz vazni, baytlar nasriy bayoni va irfoniy-falsafiy mazmuni.
            </p>
          </div>

          {/* Quick presets */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider">Namunalar:</span>
            <select
              onChange={(e) => {
                if (e.target.value) handleLoadSample(e.target.value);
              }}
              className="text-xs bg-white border border-stone-300 rounded-lg px-3 py-1.5 text-stone-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer"
            >
              <option value="">Mumtoz namuna tanlang...</option>
              {CANONICAL_GHAZALS.map(g => (
                <option key={g.id} value={g.id}>
                  {g.firstLine.slice(0, 42)}... ({g.commentator.split(' ')[0]})
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Input Section */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2 space-y-2">
            <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider">
              Gʻazal matni (Har bir bayt alohida qatorda)
            </label>
            <textarea
              value={ghazalText}
              onChange={(e) => setGhazalText(e.target.value)}
              placeholder={`Masalan:
Har labing oʻlganni tirguzmakda jono, jon эrur,
Bu jihatdan bir-birisi birla jonojon эrur.

Jonim andoq toʻldi jonondinki, boʻlmas fahmkim,
Jon эrur, jonon эmas, yo jon эmas, jonon эrur...`}
              rows={8}
              className="w-full p-3.5 text-sm sm:text-base font-serif bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:bg-white focus:outline-none leading-relaxed transition-all placeholder:text-stone-400 placeholder:font-sans"
            />
          </div>

          <div className="space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Shoir / Manba
                </label>
                <input
                  type="text"
                  value={poet}
                  onChange={(e) => setPoet(e.target.value)}
                  placeholder="Alisher Navoiy, Bobur, Lutfiy..."
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wider mb-1">
                  Alohida urgʻu berilsin (ixtiyoriy)
                </label>
                <input
                  type="text"
                  value={specificQuestion}
                  onChange={(e) => setSpecificQuestion(e.target.value)}
                  placeholder="Masalan: Tasavvufiy ramzlar yoki tajnis sanʼati..."
                  className="w-full px-3 py-2 text-sm bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="w-full py-3 px-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium rounded-lg shadow-sm flex items-center justify-center space-x-2 transition-all disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  <span>Olim tahlil qilmoqda...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 text-amber-200" />
                  <span>Gʻazalni Chuqur Tahlil Qilish</span>
                </>
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 bg-red-50 border border-red-200 text-red-800 rounded-lg text-sm">
            <div className="flex items-start space-x-2.5">
              <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-600" />
              <div className="space-y-1">
                <p className="font-semibold text-red-900">Tahlil amalga oshmadi</p>
                <p className="text-red-700 leading-relaxed">{error}</p>
              </div>
            </div>
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white font-medium text-xs rounded-md shadow-sm flex items-center space-x-1.5 transition-colors self-end sm:self-center cursor-pointer shrink-0"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
              <span>Qayta urinish</span>
            </button>
          </div>
        )}
      </div>

      {/* Analysis Result Output */}
      {analysis && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Result Banner & Actions */}
          <div className="bg-stone-900 text-stone-100 rounded-xl p-5 sm:p-6 shadow-md border border-amber-800/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  {analysis.genre}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-stone-800 text-stone-300 border border-stone-700">
                  {analysis.compositionType}
                </span>
                {analysis.commentator && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/40">
                    Manba: {analysis.commentator}
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-serif text-amber-100">
                {analysis.title}
              </h3>
              <p className="text-sm text-stone-400 mt-0.5">
                Muallif: <span className="text-amber-300 font-medium">{analysis.poet}</span> • {analysis.couplets.length} bayt
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={copyAnalysisText}
                className="flex items-center space-x-1.5 px-3.5 py-2 bg-stone-800 hover:bg-stone-700 text-xs font-medium rounded-lg border border-stone-700 text-stone-200 transition-colors"
                title="Tahlil matnini nusxalash"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Nusxalandi!' : 'Nusxalash'}</span>
              </button>
              <button
                onClick={handlePrint}
                className="flex items-center space-x-1.5 px-3.5 py-2 bg-amber-600 hover:bg-amber-500 text-xs font-semibold text-stone-950 rounded-lg transition-colors"
                title="Chop etish yoki PDF saqlash"
              >
                <Printer className="w-4 h-4" />
                <span>Chop etish</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics (Meter, Rhyme, Radif) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 font-semibold text-sm">
                <Layers className="w-4 h-4" />
                <h4>Aruz Vazni va Ritmik Xususiyati</h4>
              </div>
              <p className="text-base font-bold text-stone-900 font-serif">{analysis.meter.name}</p>
              <p className="text-xs text-stone-600 font-mono bg-stone-100 p-2 rounded border border-stone-200">
                <span className="font-semibold text-stone-800">Ruknlar:</span> {analysis.meter.rukns}<br />
                <span className="font-semibold text-stone-800">Taqtiʼ:</span> {analysis.meter.pattern}
              </p>
              <p className="text-xs text-stone-600 italic">
                {analysis.meter.rhythmEffect}
              </p>
            </div>

            <div className="bg-white border border-stone-200 rounded-xl p-4 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-amber-800 font-semibold text-sm">
                <Feather className="w-4 h-4" />
                <h4>Qofiya va Radif Tizimi</h4>
              </div>
              <div>
                <span className="text-xs text-stone-500 uppercase">Radif: </span>
                <span className="text-sm font-bold text-amber-900 font-serif">
                  {analysis.rhymeAndRadif.radif ? `«${analysis.rhymeAndRadif.radif}»` : 'Muvashshah / Muraddaf emas'}
                </span>
              </div>
              <div>
                <span className="text-xs text-stone-500 uppercase">Qofiyadosh soʻzlar: </span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {analysis.rhymeAndRadif.qofiyaWords.map((word, i) => (
                    <span key={i} className="text-xs px-2 py-0.5 bg-amber-50 text-amber-800 border border-amber-200 rounded">
                      {word}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-xs text-stone-600">{analysis.rhymeAndRadif.rhymeType}</p>
            </div>
          </div>

          {/* Section: Sharhi Alfoz (Lug'at) */}
          {analysis.vocabulary && analysis.vocabulary.length > 0 && (
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-3">
              <h4 className="text-base font-bold font-serif text-stone-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-700" />
                Sharhi Alfoz (Gʻazaldagi qiyin va istilohiy soʻzlar lugʻati)
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-stone-200 bg-stone-50 text-stone-700">
                      <th className="py-2.5 px-3 font-semibold">Soʻz</th>
                      <th className="py-2.5 px-3 font-semibold">Kelib chiqishi</th>
                      <th className="py-2.5 px-3 font-semibold">Lugʻaviy maʼnosi</th>
                      <th className="py-2.5 px-3 font-semibold">Tasavvufiy / Ramziy maʼnosi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    {analysis.vocabulary.map((item, idx) => (
                      <tr key={idx} className="hover:bg-amber-50/40 transition-colors">
                        <td className="py-2.5 px-3 font-bold font-serif text-amber-900 whitespace-nowrap">{item.word}</td>
                        <td className="py-2.5 px-3 text-stone-500 italic whitespace-nowrap">{item.origin || 'mumtoz'}</td>
                        <td className="py-2.5 px-3 text-stone-800">{item.definition}</td>
                        <td className="py-2.5 px-3 text-amber-800 font-medium">{item.symbolism || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Section: Baytma-bayt Badiiy Tahlil */}
          <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-4">
              <div>
                <h4 className="text-lg sm:text-xl font-bold font-serif text-stone-900 flex items-center gap-2">
                  <Feather className="w-5 h-5 text-amber-700" />
                  Har Bir Baytning Alohida Akademik Tahlili
                </h4>
                <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
                  «Gʻazallar, sharhlar» va Dilnavoz Yusupova metodologiyasi asosida har bir baytning nasriy bayoni, sheʼriy sanʼatlari hamda zohiriy-botiniy qatlamlari
                </p>
              </div>

              {/* View mode toggle */}
              <div className="flex items-center bg-stone-100 p-1 rounded-lg border border-stone-200 shrink-0 self-start md:self-auto">
                <button
                  onClick={() => setViewMode('all')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === 'all'
                      ? 'bg-amber-800 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Barcha baytlar (Toʻliq mutolaa)
                </button>
                <button
                  onClick={() => setViewMode('single')}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                    viewMode === 'single'
                      ? 'bg-amber-800 text-white shadow-xs'
                      : 'text-stone-600 hover:text-stone-900'
                  }`}
                >
                  Alohida bayt (Fokus)
                </button>
              </div>
            </div>

            {/* Quick jump navigation pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 border-b border-stone-100">
              <span className="text-xs font-semibold text-stone-500 shrink-0 mr-1">Baytlar:</span>
              {analysis.couplets.map((c, idx) => {
                const isMatla = c.number === 1;
                const isMaqta = c.number === analysis.couplets.length;
                const label = isMatla ? '1 (Matlaʼ)' : isMaqta ? `${c.number} (Maqtaʼ)` : `${c.number}`;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveCoupletTab(idx);
                      if (viewMode === 'all') {
                        const el = document.getElementById(`bayt-card-${c.number}`);
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                      }
                    }}
                    className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                      activeCoupletTab === idx
                        ? 'bg-amber-700 text-white shadow-xs font-bold'
                        : 'bg-stone-100 hover:bg-stone-200 text-stone-700'
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            {/* View Mode: ALL COUPLETS (Sequential scholarly book view) */}
            {viewMode === 'all' ? (
              <div className="space-y-6">
                {analysis.couplets.map((couplet, cIdx) => {
                  const isMatla = couplet.number === 1;
                  const isMaqta = couplet.number === analysis.couplets.length;
                  return (
                    <div
                      key={cIdx}
                      id={`bayt-card-${couplet.number}`}
                      className="space-y-4 bg-stone-50/70 p-5 sm:p-6 rounded-xl border border-stone-300/80 shadow-xs relative transition-all hover:border-amber-400/80"
                    >
                      {/* Couplet Header */}
                      <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-amber-950 bg-amber-200/80 px-3 py-1 rounded-full uppercase tracking-wider font-serif">
                            {isMatla ? '1-Bayt (Matlaʼ)' : isMaqta ? `${couplet.number}-Bayt (Maqtaʼ)` : `${couplet.number}-Bayt`}
                          </span>
                          {isMatla && (
                            <span className="text-xs text-amber-800 italic hidden sm:inline">
                              Gʻazal debochasi va musiqiy-ruhiy kaliti
                            </span>
                          )}
                          {isMaqta && (
                            <span className="text-xs text-amber-800 italic hidden sm:inline">
                              Shoir taxallusi va gʻoyaviy xulosasi
                            </span>
                          )}
                        </div>
                        <span className="text-xs font-medium text-stone-400">
                          {couplet.number} / {analysis.couplets.length}
                        </span>
                      </div>

                      {/* Original text */}
                      <div className="bg-stone-900 text-amber-100 p-4 sm:p-5 rounded-lg text-center shadow-inner font-serif text-base sm:text-xl whitespace-pre-line leading-relaxed tracking-wide border border-amber-900/40">
                        {couplet.originalText}
                      </div>

                      {/* Prose translation */}
                      <div className="space-y-1.5">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4 text-amber-700" />
                          Nasriy Bayoni (Zamonaviy adabiy sharh):
                        </h5>
                        <p className="text-sm text-stone-800 bg-white p-3.5 rounded-lg border border-stone-200 leading-relaxed font-sans">
                          {couplet.proseTranslation}
                        </p>
                      </div>

                      {/* Poetic Arts in this couplet */}
                      <div className="space-y-2">
                        <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                          <Sparkles className="w-4 h-4 text-amber-600" />
                          Ushbu Baytdagi Sheʼriy Sanʼatlar (Ilmi Badiʼ):
                        </h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {couplet.poeticArts.map((art, aIdx) => (
                            <div key={aIdx} className="bg-white p-3.5 rounded-lg border border-amber-200/90 shadow-xs space-y-1.5">
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-bold text-xs sm:text-sm text-amber-950 font-serif">
                                  {art.name}
                                </span>
                                <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-900 rounded font-mono font-medium border border-amber-200">
                                  «{art.targetWords}»
                                </span>
                              </div>
                              <p className="text-xs text-stone-600 leading-relaxed">
                                {art.explanation}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Dual Layers: Zohiriy vs Botiniy */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                        <div className="bg-white p-3.5 rounded-lg border border-blue-200/80 space-y-1.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            Zohiriy (Majoziy / Insoniy) Maʼnosi:
                          </span>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                            {couplet.literalMeaning}
                          </p>
                        </div>

                        <div className="bg-white p-3.5 rounded-lg border border-emerald-200/80 space-y-1.5">
                          <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                            <Compass className="w-3.5 h-3.5 text-emerald-600" />
                            Botiniy (Irfoniy / Tasavvufiy) Maʼnosi:
                          </span>
                          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                            {couplet.sufiMeaning || 'Ushbu baytda oshiqning olijanob insoniy kechinmasi va ruhiy komilligi asosiy oʻrinda turadi.'}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* View Mode: SINGLE COUPLET (Focused tab view) */
              analysis.couplets[activeCoupletTab] && (() => {
                const couplet = analysis.couplets[activeCoupletTab];
                const isMatla = couplet.number === 1;
                const isMaqta = couplet.number === analysis.couplets.length;
                return (
                  <div className="space-y-4 bg-stone-50/70 p-5 sm:p-6 rounded-xl border border-stone-300/80 shadow-xs">
                    {/* Couplet Header */}
                    <div className="flex items-center justify-between border-b border-stone-200 pb-2.5">
                      <span className="text-xs font-bold text-amber-950 bg-amber-200/80 px-3 py-1 rounded-full uppercase tracking-wider font-serif">
                        {isMatla ? '1-Bayt (Matlaʼ)' : isMaqta ? `${couplet.number}-Bayt (Maqtaʼ)` : `${couplet.number}-Bayt`}
                      </span>
                      <span className="text-xs text-stone-400">
                        Jami {analysis.couplets.length} baytdan {couplet.number}-si
                      </span>
                    </div>

                    {/* Original text */}
                    <div className="bg-stone-900 text-amber-100 p-4 sm:p-5 rounded-lg text-center shadow-inner font-serif text-base sm:text-xl whitespace-pre-line leading-relaxed tracking-wide border border-amber-900/40">
                      {couplet.originalText}
                    </div>

                    {/* Prose translation */}
                    <div className="space-y-1.5">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-amber-700" />
                        Nasriy Bayoni:
                      </h5>
                      <p className="text-sm text-stone-800 bg-white p-3.5 rounded-lg border border-stone-200 leading-relaxed font-sans">
                        {couplet.proseTranslation}
                      </p>
                    </div>

                    {/* Poetic Arts in this couplet */}
                    <div className="space-y-2">
                      <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600" />
                        Ushbu Baytdagi Sheʼriy Sanʼatlar:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {couplet.poeticArts.map((art, aIdx) => (
                          <div key={aIdx} className="bg-white p-3.5 rounded-lg border border-amber-200/90 shadow-xs space-y-1.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="font-bold text-xs sm:text-sm text-amber-950 font-serif">
                                {art.name}
                              </span>
                              <span className="text-xs px-2 py-0.5 bg-amber-50 text-amber-900 rounded font-mono font-medium border border-amber-200">
                                «{art.targetWords}»
                              </span>
                            </div>
                            <p className="text-xs text-stone-600 leading-relaxed">
                              {art.explanation}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dual Layers: Zohiriy vs Botiniy */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                      <div className="bg-white p-3.5 rounded-lg border border-blue-200/80 space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          Zohiriy (Majoziy / Insoniy) Maʼnosi:
                        </span>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {couplet.literalMeaning}
                        </p>
                      </div>

                      <div className="bg-white p-3.5 rounded-lg border border-emerald-200/80 space-y-1.5">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5 text-emerald-600" />
                          Botiniy (Irfoniy / Tasavvufiy) Maʼnosi:
                        </span>
                        <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {couplet.sufiMeaning || 'Ushbu baytda oshiqning olijanob insoniy kechinmasi va ruhiy kamoloti asosiy oʻrinda turadi.'}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })()
            )}
          </div>

          {/* Section: Falsafiy Mazmun, Nimkosa & Didaktik Xulosa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-stone-900 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-700" />
                Umumiy Gʻoyaviy Mazmun
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                {analysis.overallMeaning}
              </p>
            </div>

            <div className="bg-amber-50/70 border border-amber-300/80 rounded-xl p-5 shadow-sm space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-amber-950 flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-700" />
                Kosa Tagidagi Nimkosa (Tagmatn)
              </h4>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed">
                {analysis.nimkosaSubtext}
              </p>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-300/80 rounded-xl p-5 shadow-sm space-y-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-2">
                <Feather className="w-4 h-4 text-emerald-700" />
                Didaktik va Maʼnaviy Saboq
              </h4>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                {analysis.didacticConclusion}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
