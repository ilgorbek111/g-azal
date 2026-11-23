/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { GhazalAnalyzer } from './components/GhazalAnalyzer';
import { CanonicalLibrary } from './components/CanonicalLibrary';
import { PoeticArtsGuide } from './components/PoeticArtsGuide';
import { SufiSymbolsGuide } from './components/SufiSymbolsGuide';
import { AruzLab } from './components/AruzLab';
import { ScholarChat } from './components/ScholarChat';
import { BookOpen, Sparkles, Feather, Compass, Music, MessageSquareQuote } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'analyzer' | 'library' | 'arts' | 'sufi' | 'aruz' | 'chat'>('analyzer');

  return (
    <div className="min-h-screen bg-stone-100/70 text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-amber-950">
      {/* Navigation & Header */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'analyzer' && <GhazalAnalyzer />}
        {activeTab === 'library' && <CanonicalLibrary />}
        {activeTab === 'arts' && <PoeticArtsGuide />}
        {activeTab === 'sufi' && <SufiSymbolsGuide />}
        {activeTab === 'aruz' && <AruzLab />}
        {activeTab === 'chat' && <ScholarChat />}
      </main>

      {/* Academic Sources Footer */}
      <footer className="border-t border-stone-200 bg-white py-6 mt-12 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-amber-700" />
            <span className="font-serif font-bold text-stone-800">Gʻazalshunos</span>
            <span className="text-stone-400">|</span>
            <span>Mumtoz adabiyot va gʻazal tahlili ilmiy platformasi</span>
          </div>

          <div className="text-center sm:text-right text-stone-500">
            Ilmiy asoslar: Dilnavoz Yusupova, Najmiddin Komilov, Erkin Vohidov, Muhammad Ali, Abdurashid Abdugʻafurov tadqiqotlari
          </div>
        </div>
      </footer>
    </div>
  );
}
