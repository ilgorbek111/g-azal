import React, { useState } from 'react';
import { Music, BookOpen, Sparkles, Layers, Info } from 'lucide-react';

interface BahrInfo {
  name: string;
  popularUsage: string;
  formula: string;
  pattern: string;
  description: string;
  example: string;
}

const COMMON_BAHRS: BahrInfo[] = [
  {
    name: 'Ramali musammani maqsur / mahzuf',
    popularUsage: 'Navoiy gʻazaliyotida eng koʻp (50% dan ortiq) qoʻllangan shoh vazn',
    formula: 'Foilotun foilotun foilotun foilun (foilot)',
    pattern: '- V - - / - V - - / - V - - / - V -',
    description: 'Qalb tebranishlari, firoq, hasrat va teran lirik kechinmalarni ifodalash uchun gʻoyat qulay, ohangdor va mayin vazn.',
    example: 'Qaro koʻzum, kel-u mardumligʻ emdi fan qilgʻil,\nKoʻzum qorasida mardum kibi vatan qilgʻil.'
  },
  {
    name: 'Hazaji musammani solim',
    popularUsage: 'Navoiy gʻazallarida ikkinchi oʻrinda turuvchi eng faol vazn',
    formula: 'Mafoiylun mafoiylun mafoiylun mafoiylun',
    pattern: 'V - - - / V - - - / V - - - / V - - -',
    description: 'Musiqiyligi yuqori, shiddatli va ehtirosli tuygʻularni, falsafiy-ijtimoiy norozilik yoki shodu xurramlikni ifodalovchi teng oʻlchovli vazn.',
    example: 'Koʻngillar nolasi zulfung kamandin nogahon koʻrgach,\nErur andoqki, qushlar qichqirishqaylar yilon koʻrgach.'
  },
  {
    name: 'Hazaji musaddasi mahzuf / maqsur',
    popularUsage: 'Dostonchilik ("Farhod va Shirin") va lirik gʻazallarda',
    formula: 'Mafoiylun mafoiylun fauvlun (faʼul)',
    pattern: 'V - - - / V - - - / V - -',
    description: 'Ixcham, yurakka yaqin va dramatik bayon uchun xos vazn.',
    example: 'Bihamdillohki, qildi baxt yori,\nKi yetti vasl ayyomi xumori.'
  },
  {
    name: 'Mutaqoribi musammani mahzuf',
    popularUsage: 'Qahramonlik ("Shohnoma", "Saddi Iskandariy") va shijoat',
    formula: 'Faulun faulun faulun faul',
    pattern: 'V - - / V - - / V - - / V -',
    description: 'Jangovar ruhiyat, qatʼiyat va tantanavorlik baxsh etuvchi ritm.',
    example: 'Chu Iskandar oldi jahon kishvarin,\nBaland ayladi himmati axtarin.'
  },
  {
    name: 'Rajazi musammani matviyi maxbun',
    popularUsage: 'Falsafiy va oʻynoqi gʻazallarda',
    formula: 'Muftailun mafoilun muftailun mafoilun',
    pattern: '- V V - / V - V - / - V V - / V - V -',
    description: 'Raqs ohangiga yaqin, tezkor va dinamik ichki harakatga ega vazn.',
    example: 'Orazing ochki, subhidam lolai xandon oʻlgʻusi,\nZulfing yoyki, shomi gʻam mushki parishon oʻlgʻusi.'
  }
];

export const AruzLab: React.FC = () => {
  const [testLine, setTestLine] = useState('Qaro koʻzum, kel-u mardumligʻ emdi fan qilgʻil');
  const [selectedBahr, setSelectedBahr] = useState<BahrInfo>(COMMON_BAHRS[0]);

  // Approximate phonetic syllable analysis for educational purpose
  const analyzeSyllables = (text: string) => {
    // Clean text
    const clean = text.replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, "").trim();
    const words = clean.split(/\s+/);

    return words.map(word => {
      // Split word into syllables approximately based on Uzbek vowels
      // Vowels: a, e, i, o, u, oʻ
      const vowelsRegex = /[aeiouoʻ]/gi;
      const syllables: { text: string; type: 'short' | 'long'; symbol: string }[] = [];

      // Simple heuristic syllable splitter
      const letters = word.split('');
      let currentSyl = '';

      for (let i = 0; i < letters.length; i++) {
        currentSyl += letters[i];
        const isVowel = /[aeiouáéíóú]/i.test(letters[i]);
        const nextLetter = letters[i + 1];
        const nextIsVowel = nextLetter && /[aeiouáéíóú]/i.test(nextLetter);

        if (isVowel) {
          // If ends with consonant or followed by consonant then vowel
          if (!nextLetter || nextIsVowel) {
            // Open syllable with short vowel -> Short (V)
            syllables.push({ text: currentSyl, type: 'short', symbol: 'V' });
            currentSyl = '';
          } else if (letters[i + 2] && !/[aeiouáéíóú]/i.test(letters[i + 2])) {
            // Closed syllable (CVCC) or heavy -> Long (-)
            currentSyl += nextLetter;
            i++;
            syllables.push({ text: currentSyl, type: 'long', symbol: '-' });
            currentSyl = '';
          } else {
            // Open syllable before CV
            syllables.push({ text: currentSyl, type: 'short', symbol: 'V' });
            currentSyl = '';
          }
        }
      }
      if (currentSyl) {
        syllables.push({ text: currentSyl, type: 'long', symbol: '-' });
      }

      return { word, syllables };
    });
  };

  const syllableBreakdown = analyzeSyllables(testLine);
  const patternDisplay = syllableBreakdown.flatMap(w => w.syllables.map(s => s.symbol)).join(' ');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
              <Music className="w-6 h-6 text-amber-700" />
              Aruz Vazni va Ritmika Laboratoriyasi
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
              Dilnavoz Yusupova tadqiqotlariga koʻra, Alisher Navoiy oʻzbek aruzini 17 ta bahrning 50 dan ziyod vazn turlari bilan boyitgan. Bu laboratoriyada qisqa (V) va choʻziq (-) hijolar taqtiʼsi hamda mumtoz vaznlar qolipini oʻrganasiz.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Syllable Checker */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold font-serif text-stone-900 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-600" />
          Misra Taqtiʼsi va Boʻgʻinlar Tahlili (Interaktiv)
        </h3>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-stone-600 uppercase tracking-wider block">
            Sinov uchun misrani kiriting:
          </label>
          <input
            type="text"
            value={testLine}
            onChange={(e) => setTestLine(e.target.value)}
            className="w-full px-4 py-2.5 text-base font-serif bg-stone-50 border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:bg-white focus:outline-none"
          />
        </div>

        {/* Visual Syllable blocks */}
        <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-3">
          <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
            Boʻgʻinma-boʻgʻin taqsimot:
          </span>
          <div className="flex flex-wrap gap-2">
            {syllableBreakdown.map((item, wIdx) => (
              <div key={wIdx} className="bg-white p-2 rounded-lg border border-stone-300 shadow-xs flex flex-col items-center">
                <span className="text-xs font-semibold text-stone-800 font-serif mb-1">{item.word}</span>
                <div className="flex gap-1">
                  {item.syllables.map((syl, sIdx) => (
                    <div
                      key={sIdx}
                      className={`px-2 py-0.5 rounded text-xs font-mono font-bold flex flex-col items-center ${
                        syl.symbol === '-'
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-blue-100 text-blue-900 border border-blue-300'
                      }`}
                    >
                      <span>{syl.text}</span>
                      <span className="text-xs opacity-75">{syl.symbol}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200 flex items-center justify-between text-xs">
            <span className="text-stone-600">
              Taxminiy ritmik formulasi: <strong className="font-mono text-stone-900">{patternDisplay}</strong>
            </span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-blue-700 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-400"></span> V = Qisqa boʻgʻin (mutaharrik)
              </span>
              <span className="flex items-center gap-1 text-amber-800 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> - = Choʻziq boʻgʻin (sokin)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Common Bahrs Catalog */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm space-y-4">
        <h3 className="text-base font-bold font-serif text-stone-900 flex items-center gap-2">
          <Layers className="w-5 h-5 text-amber-700" />
          Alisher Navoiy Gʻazallarida Eng Koʻp Qoʻllangan Bahriy Qoliplar
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COMMON_BAHRS.map((bahr, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedBahr(bahr)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                selectedBahr.name === bahr.name
                  ? 'bg-amber-100/70 border-amber-400 shadow-xs'
                  : 'bg-stone-50 hover:bg-white border-stone-200'
              }`}
            >
              <h4 className="font-serif font-bold text-sm text-stone-900 mb-1">
                {bahr.name}
              </h4>
              <p className="text-[11px] text-amber-900 font-semibold mb-2">
                {bahr.popularUsage}
              </p>
              <p className="text-xs font-mono bg-white p-2 rounded border border-stone-200 text-stone-800">
                {bahr.formula}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Bahr Deep Insight */}
        {selectedBahr && (
          <div className="bg-gradient-to-br from-amber-50/70 to-stone-50 border border-amber-200 p-5 rounded-xl space-y-3 mt-4">
            <div className="flex items-center justify-between">
              <h4 className="font-serif font-bold text-lg text-stone-900">
                {selectedBahr.name}
              </h4>
              <span className="text-xs px-2.5 py-1 bg-amber-200 text-amber-900 font-mono font-bold rounded">
                Qolip: {selectedBahr.pattern}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
              <strong className="text-stone-900">Estetik vazifasi:</strong> {selectedBahr.description}
            </p>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 block">
                Navoiydan Mashhur Misol:
              </span>
              <div className="bg-stone-900 text-amber-100 p-3.5 rounded-lg text-center font-serif text-sm whitespace-pre-line leading-relaxed">
                {selectedBahr.example}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Navoiy Aruz Innovations (Dilnavoz Yusupova research) */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 shadow-sm space-y-3">
        <h4 className="text-base font-bold font-serif text-stone-900 flex items-center gap-2">
          <Info className="w-5 h-5 text-amber-700" />
          Aruzdagi Nozik Qoidalar (Dilnavoz Yusupova monografiyasi asosida)
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
            <strong className="text-stone-900 font-serif text-sm block">1. Saktai malih (Yoqimli toʻxtam)</strong>
            <p className="text-stone-600 leading-relaxed">
              Misra oʻrtasida aruz qolipi talab qilgan qisqa tanaffus. Bu orqali baytga alohida hayajon va musiqiy joziba kiritiladi.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
            <strong className="text-stone-900 font-serif text-sm block">2. Vasl (Ulanish) Qoidasi</strong>
            <p className="text-stone-600 leading-relaxed">
              Undosh bilan tugagan soʻz keyingi unli bilan boshlangan soʻzga ulanib aytiladi ("kel-u" oʻrniga "ke-lu"), bu esa vazn ravonligini taʼminlaydi.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-stone-50 border border-stone-200 space-y-1">
            <strong className="text-stone-900 font-serif text-sm block">3. Musajjaʼ va Ichki Sajʼ</strong>
            <p className="text-stone-600 leading-relaxed">
              Misra ichida ritmik boʻlaklarning oʻzaro qofiyalanishi (masalan: "Tunum dayjur, oʻzum ranjur, ichim gʻamnoku bagʻrim chok").
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
