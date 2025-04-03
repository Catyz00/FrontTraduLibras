export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-16 bg-white shadow flex items-center">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} TraduLibras. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
