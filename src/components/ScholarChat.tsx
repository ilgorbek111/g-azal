import React, { useState } from 'react';
import { MessageSquareQuote, Send, Sparkles, User, RefreshCw, BookOpen } from 'lucide-react';
import { ScholarChatMessage } from '../types';

export const ScholarChat: React.FC = () => {
  const [messages, setMessages] = useState<ScholarChatMessage[]>([
    {
      id: 'msg-welcome',
      role: 'assistant',
      content: `Assalomu alaykum va rahmatulloh, aziz adabiyot muxlisi. Men mumtoz Sharq adabiyoti, Navoiyshunoslik va gʻazal tahlili boʻyicha akademik olimman. 

Siz bilan Alisher Navoiy, Bobur, Lutfiy, Atoiy kabi mutafakkirlar gʻazallaridagi sheʼriy sanʼatlar, aruz vaznlari, tasavvufiy ramzlar ("may", "soqiy", "zulf", "oraz"), baytlarning zohiriy va botiniy maʼnolari haqida suhbatlashishdan mamnunman. Qanday savolingiz bor?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const suggestedQuestions = [
    "Navoiy gʻazallarida «may» va «mayxona» timsoli nima uchun bunchalik koʻp uchraydi?",
    "Tashbeh bilan istioraning oʻzaro farqini baytlar misolida tushuntirib bering.",
    "«Kosa tagidagi nimkosa» tushunchasining gʻazalshunoslikdagi oʻrni qanday?",
    "Alisher Navoiy aruz tizimiga qanday yangiliklar kiritgan?",
  ];

  const handleSend = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: ScholarChatMessage = {
      id: `usr-${Date.now()}`,
      role: 'user',
      content: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/ask-scholar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: textToSend }),
      });

      if (!res.ok) {
        const errJson = await res.json().catch(() => ({}));
        throw new Error(errJson.error || 'Serverdan javob olishda xatolik yuz berdi');
      }

      const data = await res.json();
      const assistantMsg: ScholarChatMessage = {
        id: `ast-${Date.now()}`,
        role: 'assistant',
        content: data.answer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, assistantMsg]);
    } catch (err: any) {
      const errorMsg: ScholarChatMessage = {
        id: `err-${Date.now()}`,
        role: 'assistant',
        content: err?.message || 'Uzr, soʻrovingizni qayta ishlashda kutilmagan texnik nosozlik yuz berdi. Iltimos, qayta urinib koʻring.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Intro */}
      <div className="bg-white border border-stone-200 rounded-xl p-5 sm:p-6 shadow-sm">
        <h2 className="text-xl sm:text-2xl font-bold font-serif text-stone-900 flex items-center gap-2">
          <MessageSquareQuote className="w-6 h-6 text-amber-700" />
          Mumtoz Adabiyot Olimi bilan Muloqot
        </h2>
        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-3xl">
          Gʻazal poetikasi, aruz vaznlari, tasavvufiy ramzlar yoki istalgan baytning zohiriy va botiniy sirlari boʻyicha olimga bevosita savol yoʻllang. Olim Najmiddin Komilov, Dilnavoz Yusupova va Erkin Vohidov anʼanalariga tayanib ilmiy va mukammal javob beradi.
        </p>

        {/* Quick suggestions */}
        <div className="mt-4 flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="text-xs px-3 py-1.5 bg-stone-100 hover:bg-amber-100/80 text-stone-800 hover:text-amber-900 rounded-lg border border-stone-200 transition-colors text-left"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Container */}
      <div className="bg-white border border-stone-200 rounded-xl shadow-sm flex flex-col h-[580px]">
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4">
          {messages.map((msg) => {
            const isUser = msg.role === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    isUser
                      ? 'bg-amber-600 text-white'
                      : 'bg-stone-900 text-amber-300 border border-amber-500/30'
                  }`}
                >
                  {isUser ? <User className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                </div>

                <div
                  className={`max-w-2xl rounded-xl p-4 text-xs sm:text-sm leading-relaxed ${
                    isUser
                      ? 'bg-amber-600 text-white shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-800 font-sans shadow-xs'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.content}</div>
                  <div
                    className={`text-[10px] mt-2 text-right ${
                      isUser ? 'text-amber-200' : 'text-stone-400'
                    }`}
                  >
                    {msg.timestamp}
                  </div>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-stone-900 text-amber-300 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-stone-500 flex items-center space-x-2">
                <RefreshCw className="w-4 h-4 animate-spin text-amber-600" />
                <span>Olim manbalarni tahlil qilib javob tayyorlamoqda...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input area */}
        <div className="p-3 sm:p-4 border-t border-stone-200 bg-stone-50 rounded-b-xl flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Olimga mumtoz adabiyot, gʻazal yoki sanʼatlar boʻyicha savol bering..."
            className="flex-1 px-4 py-2.5 text-sm bg-white border border-stone-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 disabled:opacity-50 text-white rounded-lg font-medium text-sm flex items-center space-x-1.5 transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Yuborish</span>
          </button>
        </div>
      </div>
    </div>
  );
};
