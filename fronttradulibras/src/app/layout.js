import Navbar from '@/components/navbar/navbar';
import './globals.css';
import Footer from '@/components/footer/footer';

export const metadata = {
  title: 'Prime Secure',
  description: 'Protegendo Todos Seus Momentos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Navbar />
        {/* Adicione padding top e bottom equivalente à altura do navbar e footer */}
        <div className="pt-16 pb-16">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
