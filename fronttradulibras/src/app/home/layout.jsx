import Navbar from "@/components/navbar/navbar";



export const metadata = {
  title: 'TraduLibras',
  description: 'Protegendo Todos Seus Momentos',
};

export default function HomeLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar>
          {/* Adicione padding top e bottom equivalente à altura do navbar e footer */}
        <div className="pt-16 pb-16">{children}</div>
        </Navbar>
        
      
      </body>
    </html>
  );
}
