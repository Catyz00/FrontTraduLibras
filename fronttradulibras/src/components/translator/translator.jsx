"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

// Mapeamento de palavras para vídeos
const WORD_TO_VIDEO = {
  "cadeira": "/videos/cadeira.mp4",
  "balanço": "/videos/balanco.mp4",
  "aranha": "/videos/aranha.mp4",
  // Adicione mais mapeamentos conforme necessário
  "default": "/videos/default.mp4"
};

export default function Translator() {
  const [isDark, setIsDark] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("searchHistory");
    if (stored) {
      setSearchHistory(JSON.parse(stored));
    }
  }, []);

  const getVideoForWord = (word) => {
    const lowerWord = word.toLowerCase();
    return WORD_TO_VIDEO[lowerWord] || WORD_TO_VIDEO["default"];
  };

  const handleSearch = () => {
    if (!input.trim()) return;
    
    setIsLoading(true);
    
    const newEntry = {
      text: input,
      video: getVideoForWord(input),
      timestamp: new Date().toLocaleTimeString()
    };
    
    const updatedHistory = [newEntry, ...searchHistory];
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
    
    setTimeout(() => {
      setIsLoading(false);
      setInput("");
    }, 2000);
  };

  return (
    <div
      className={`min-h-screen p-4 flex flex-col justify-between ${
        isDark
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-br from-gray-100 to-orange-100 text-gray-900"
      } rounded-xl`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="mx-auto">
          <h2 className="text-xl font-semibold border-b-4 border-blue-400 w-fit mx-auto px-4 py-1 rounded-md">
            Tradução
          </h2>
        </div>
      </div>

      {/* Área de histórico (chat) */}
      <div className="flex-grow overflow-y-auto mb-4">
        <div className="space-y-4 w-full max-w-md mx-auto">
          {searchHistory.map((entry, index) => (
            <div key={index} className="flex flex-col items-end space-y-1">
              {/* Vídeo */}
              <div className="rounded-lg bg-white shadow-md p-2 border w-full">
                <video controls className="rounded-md w-full">
                  <source src={entry.video} type="video/mp4" />
                  Seu navegador não suporta o vídeo.
                </video>
              </div>
              
              {/* Texto */}
              <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-md w-fit chat-bubble">
                {entry.text}
                <div className="text-xs text-gray-500 text-right mt-1">
                  {entry.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Input fixado abaixo */}
      <div className="mt-auto w-full flex justify-center">
        <div className="relative flex items-center w-full max-w-md">
          {/* Bolha de digitação */}
          {input.length > 0 && (
            <div className="absolute -top-12 right-0 bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-md max-w-xs chat-bubble animate-pulse">
              <span className="dot-typing">...</span>
            </div>
          )}

          {/* Input */}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            placeholder='Exemplo : "Aranha"'
            className="transition-all duration-300 ease-in-out flex-grow p-3 rounded-l-lg border border-gray-300 text-gray-700 focus:outline-none bg-bluetradu/20"
          />

          {/* Botão */}
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="bg-darkbluetradu text-white px-5 py-3 rounded-r-lg hover:bg-darkbluetradu/70 disabled:opacity-50"
          >
            {isLoading ? '...' : '>'}
          </button>
        </div>
      </div>

      {/* Estilos da bolha */}
      <style jsx>{`
        .chat-bubble {
          position: relative;
        }
        .chat-bubble::after {
          content: "";
          position: absolute;
          bottom: -8px;
          right: 12px;
          width: 0;
          height: 0;
          border: 8px solid transparent;
          border-top-color: white;
        }

        .dot-typing::before {
          content: "...";
          font-weight: bold;
          animation: blink 1s infinite;
        }

        @keyframes blink {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
}