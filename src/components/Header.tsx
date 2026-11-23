import React, { useState } from 'react';
import { BookOpen, Sparkles, Feather, Compass, MessageSquareQuote, Volume2, VolumeX, BookMarked, Music } from 'lucide-react';
import { orientalAudio } from '../utils/audioSynthesizer';

interface HeaderProps {
  activeTab: 'analyzer' | 'library' | 'arts' | 'sufi' | 'aruz' | 'chat';
  setActiveTab: (tab: 'analyzer' | 'library' | 'arts' | 'sufi' | 'aruz' | 'chat') => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleSound = () => {
    const newState = orientalAudio.toggle();
    setIsPlaying(newState);
  };

  const navItems = [
    { id: 'analyzer', label: 'Gʻazal Tahlili (AI)', icon: Sparkles },
    { id: 'library', label: 'Sharhlar Xazinasi', icon: BookMarked },
    { id: 'arts', label: 'Sheʼriy Sanʼatlar', icon: Feather },
    { id: 'sufi', label: 'Tasavvufiy Timsollar', icon: Compass },
    { id: 'aruz', label: 'Aruz va Ritmika', icon: Music },
    { id: 'chat', label: 'Olim bilan Muloqot', icon: MessageSquareQuote },
  ] as const;

  return (
    <header className="border-b border-amber-900/15 bg-gradient-to-r from-stone-900 via-amber-950 to-stone-900 text-stone-100 sticky top-0 z-40 shadow-md">
      {/* Top Banner with ornamentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 border-b border-amber-700/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/40 flex items-center justify-center shadow-inner">
              <BookOpen className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-xl font-bold tracking-wide text-amber-100 font-serif">
                  Gʻazalshunos
                </h1>
                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-sans">
                  Mumtoz Adabiyot Akademiyasi
                </span>
              </div>
              <p className="text-xs text-amber-200/70 font-sans hidden sm:block">
                Sheʼriy sanʼatlar, baytlar maʼnosi, aruz vazni va irfoniy-falsafiy mazmun tahlili
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {/* Audio ambiance button */}
            <button
              onClick={toggleSound}
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                isPlaying
                  ? 'bg-amber-600/30 border-amber-400 text-amber-200 shadow-sm'
                  : 'bg-stone-800/60 border-stone-700 text-stone-300 hover:text-amber-200 hover:border-amber-700'
              }`}
              title="Mumtoz Maqom Ohangi (Web Audio sintizator)"
            >
              {isPlaying ? <Volume2 className="w-4 h-4 text-amber-400 animate-pulse" /> : <VolumeX className="w-4 h-4" />}
              <span className="hidden md:inline">
                {isPlaying ? 'Maqom Ohangi: Yoqilgan' : 'Maqom Ohangi'}
              </span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex space-x-1 sm:space-x-2 overflow-x-auto py-2.5 no-scrollbar">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-amber-500 text-stone-950 font-semibold shadow-sm shadow-amber-500/20'
                    : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/70'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-stone-950' : 'text-amber-400/80'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
