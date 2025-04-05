import { BookOpen, GraduationCap, Infinity, Plus } from "lucide-react";

export default function ContentHome() {
    return (
<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-50 to-orange-100 p-6">
      <h1 className="text-4xl font-bold text-gray-900 text-center">
        Boas-vindas ao <span className="text-black px-2 rounded-md bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300 bg-clip-text text-transparent">Tradulibras</span>
      </h1>
      <p className="text-gray-600 mt-2">Traduzindo palavras em inclusão...</p>
      
      <div className="mt-6 flex items-center w-full max-w-md">
        <input
          type="text"
          placeholder='Exemplo : "Aranha"'
          className="w-full p-3 rounded-l-lg border border-gray-300 text-gray-700 focus:outline-none"
        />
        <button className="bg-darkbluetradu text-white px-5 py-3 rounded-r-lg hover:bg-darkbluetradu/70">&gt;</button>
      </div>
      
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <button className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center">
          <BookOpen className="text-darkbluetradu w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-orangetradu mt-2">Traduzir</h3>
          <p className="text-gray-600 text-sm">Converta palavras em Libras de forma rápida e intuitiva.</p>
        </button>
        <button className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center">
          <GraduationCap className="text-darkbluetradu w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-orangetradu mt-2">Aprender</h3>
          <p className="text-gray-600 text-sm">Descubra novos sinais e amplie seu conhecimento em Libras.</p>
        </button>
        <button className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105 flex flex-col items-center">
          <Infinity className="text-darkbluetradu w-12 h-12 mb-2" />
          <h3 className="text-lg font-semibold text-orangetradu mt-2">Incluir</h3>
          <p className="text-gray-600 text-sm">Facilite a comunicação e torne o diálogo mais acessível.</p>
        </button>

    </div>
</div>
    );
}