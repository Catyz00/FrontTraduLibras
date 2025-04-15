import Navbar from "@/components/navbar/navbar";

export const metadata = {
  title: 'TraduLibras',
  description: 'Protegendo Todos Seus Momentos',
};

export default function TranslatorLayout({ children }) {
  return (
    <>
      <Navbar />
      <div> {/* Ajuste se o Navbar for fixo */}
        {children}
      </div>
    </>
  );
}
