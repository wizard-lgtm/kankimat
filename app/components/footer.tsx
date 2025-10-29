export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            © {currentYear} kankimat.com.tr | Matematiğin Kankası
          </p>
        </div>
      </div>
    </footer>
  );
}
