import Navbar from '@/components/navbar/navbar';
import './globals.css';

export const metadata = {
  title: 'TraduLibras',
  description: 'Protegendo Todos Seus Momentos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* <Navbar /> */}
        {/* Adicione padding top e bottom equivalente à altura do navbar e footer */}
        <div >{children}</div>
      </body>
    </html>
  );
}
