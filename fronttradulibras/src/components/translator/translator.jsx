"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

const WORD_TO_VIDEO = {
  "cadeira": "/videos/cadeira.mp4",
  "balanço": "/videos/balanco.mp4",
  "aranha": "/videos/aranha.mp4",
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
  }, []);  // Esta linha já garante que o histórico é recuperado
  
  const handleSearch = () => {
    if (!input.trim()) return;
  
    setIsLoading(true);
  
    const newEntry = {
      text: input,
      video: getVideoForWord(input),
      timestamp: new Date().toLocaleTimeString()
    };
  
    const updatedHistory = [newEntry, ...searchHistory]; // Previne sobrescrita do histórico
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  
    setTimeout(() => {
      setIsLoading(false);
      setInput("");
    }, 2000);
  };
  

  return (
    <div
      className={`h-screen flex flex-col ${
        isDark
          ? "bg-gray-800 text-white"
          : "bg-gradient-to-br from-gray-100 to-orange-100 text-gray-900"
      }`}
    >
      {/* Header fixo */}
      <div
        className={`sticky top-0 z-10 ${
          isDark ? "bg-gray-800/90" : "bg-white/90"
        } backdrop-blur-md p-4 shadow-md`}
      >
        <h2 className="text-xl font-semibold border-b-4 border-blue-400 w-fit mx-auto px-4 py-1 rounded-md">
          Tradução
        </h2>
      </div>

      {/* Conteúdo com rolagem */}
      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-4 w-full max-w-md mx-auto">
      {searchHistory.length > 0 ? (
  searchHistory.map((entry, index) => (
    <div key={index} className="flex flex-col items-end space-y-1">
      <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-md w-fit chat-bubble">
        {entry.text}
        <div className="text-xs text-gray-500 text-right mt-1">
          {entry.timestamp}
        </div>
      </div>
      <div className="rounded-lg bg-white shadow-md p-2 border w-full">
        <video controls className="rounded-md w-full">
          <source src={entry.video} type="video/mp4" />
          Seu navegador não suporta o vídeo.
        </video>
      </div>
    </div>
  ))
) : (
  <div className="flex justify-center items-center h-96">
    <p className="text-gray-500">Nenhuma tradução ainda.</p>
  </div>
)}

      </div>

      {/* Input fixo abaixo */}
      <div
        className={`sticky bottom-0 z-10 ${
          isDark ? "bg-gray-800/90" : "bg-white/90"
        } backdrop-blur-md p-4 border-t`}
      >
        <div className="relative flex items-center w-full max-w-md mx-auto">
          {input.length > 0 && (
            <div className="absolute -top-12 right-0 bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-md max-w-xs chat-bubble animate-pulse">
              <span className="dot-typing">...</span>
            </div>
          )}
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            placeholder='Exemplo : "Aranha"'
            className="transition-all duration-300 ease-in-out flex-grow p-3 rounded-l-lg border border-gray-300 text-gray-700 focus:outline-none bg-bluetradu/20"
          />
          <button
            onClick={handleSearch}
            disabled={isLoading}
            className="bg-darkbluetradu text-white px-5 py-3 rounded-r-lg hover:bg-darkbluetradu/70 disabled:opacity-50"
          >
            {isLoading ? "..." : ">"}
          </button>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style jsx>{`
        .chat-bubble {
          position: relative;
        }
        .chat-bubble::after {
          content: "";
          position: absolute;
          bottom: -8px;
          right: 12px; /* Posicionamento ajustado para a direita */
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

        /* Ajustes globais */
        html,
        body {
          height: 100%;
          margin: 0;
          overflow: hidden; /* Evita o scroll externo */
        }

        .flex {
          height: 100%;
        }

        .flex-1 {
          flex: 1;
          overflow-y: auto; /* Permite rolagem apenas dentro do conteúdo */
        }

        .overflow-y-auto {
          overflow-y: auto;
        }
      `}</style>
    </div>
  );
}
