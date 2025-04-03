import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow flex items-center z-50">
      <div className="container mx-auto px-4 flex justify-between">
        <Link href="/">Home</Link>
        <Link href="/about">Sobre</Link>
      </div>
    </nav>
  );
}
