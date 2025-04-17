"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowLeft, Moon, Sun } from "lucide-react";

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
  const bottomRef = useRef(null);

  useEffect(() => {
    const stored = localStorage.getItem("searchHistory");
    if (stored) {
      setSearchHistory(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [searchHistory]);

  const getVideoForWord = (word) => {
    const lower = word.toLowerCase();
    return WORD_TO_VIDEO[lower] || WORD_TO_VIDEO["default"];
  };

  const handleSearch = () => {
    if (!input.trim()) return;

    setIsLoading(true);

    const newEntry = {
      text: input,
      video: getVideoForWord(input),
      timestamp: new Date().toLocaleTimeString()
    };

    const updatedHistory = [...searchHistory, newEntry];
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
      {/* Header fixo com botão e título na mesma linha */}
      <div
  className={`sticky top-0 z-10 flex items-center p-4 ${
    isDark ? "bg-gray-800/90" : "bg-white/90"
  } backdrop-blur-md shadow-md`}
>
  {/* Botão Voltar com ícone ao lado do texto */}
  <button
    onClick={() => window.history.back()}
    className="bg-gray-300 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-400 absolute left-60 flex items-center"
  >
    <ArrowLeft size={20} className="mr-2" /> {/* Ícone */}
    Voltar {/* Texto */}
  </button>

  {/* Título Centralizado */}
  <h2 className="text-xl font-semibold border-b-4 border-blue-400 w-fit mx-auto px-4 py-1 rounded-md">
    Tradução
  </h2>
</div>
      {/* Conteúdo com rolagem */}
      <div className="flex-1 overflow-y-auto w-full">
        <div className="px-4 py-2 space-y-4 flex flex-col items-end justify-end min-h-[calc(100vh-144px)] max-w-md mx-auto">
          {searchHistory.map((entry, index) => (
            <div key={index} className="flex flex-col items-end space-y-1 w-full max-w-xs">
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
          ))}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input fixo abaixo */}
      <div
        className={`sticky bottom-0 z-10 ${
          isDark ? "bg-gray-800/90" : "bg-white/90"
        } backdrop-blur-md p-4 border-t`}
      >
        <div className="relative flex items-center w-full max-w-md mx-auto">
          {input.length > 0 && (
            <div className="absolute -top-12 right-0 flex justify-end w-full">
              <div className="bg-white text-gray-800 text-sm px-4 py-2 rounded-xl shadow-md max-w-xs chat-bubble animate-pulse">
                <span className="dot-typing">...</span>
              </div>
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

        html,
        body {
          height: 100%;
          margin: 0;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
