import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function HelpForm() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-50 to-orange-100">
      {/* Título separado, no topo da tela com borda inferior azul */}
      <div className="w-full bg-white py-4 shadow-sm mb-10">
        <h2 className="text-xl sm:text-2xl font-semibold border-b-4 border-blue-400 w-fit mx-auto px-4 py-1 rounded-md">Ajuda</h2>
      </div>
      
      <div className="w-full max-w-full sm:max-w-2xl mx-auto p-4 sm:p-6 rounded-xl shadow-lg bg-white">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="overflow-hidden py-3">
            <AccordionTrigger className="text-left text-lg sm:text-xl font-medium">Como faço para redefinir minha senha?</AccordionTrigger>
            <AccordionContent className="overflow-x-hidden break-words text-base sm:text-lg pt-2">
              Acesse a área de login, clique em "Esqueci minha senha" e siga as instruções enviadas para seu e-mail.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2" className="overflow-hidden py-3">
            <AccordionTrigger className="text-left text-lg sm:text-xl font-medium">Como realizo a tradução?</AccordionTrigger>
            <AccordionContent className="overflow-x-hidden break-words text-base sm:text-lg pt-2">
              Digite ou cole a frase desejada na caixa de tradução e clique no botão "Traduzir".
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3" className="overflow-hidden py-3">
            <AccordionTrigger className="text-left text-lg sm:text-xl font-medium">Como envio sugestões de frases ou palavras?</AccordionTrigger>
            <AccordionContent className="overflow-x-hidden break-words text-base sm:text-lg pt-2">
              Vá até a seção de sugestões e envie sua frase ou palavra por meio do formulário.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4" className="overflow-hidden py-3">
            <AccordionTrigger className="text-left text-lg sm:text-xl font-medium">Como funciona os cursos e apostilas?</AccordionTrigger>
            <AccordionContent className="overflow-x-hidden break-words text-base sm:text-lg pt-2">
              Para acessá-los e utilizar, basta entrar na área de cursos e acessar o link das vídeo aulas ou baixar o PDF.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
