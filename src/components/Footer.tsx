export default function Footer() {
  return (
    <footer className="bg-neutral-100 dark:bg-neutral-900 text-neutral-700 dark:text-neutral-300 border-t dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Left Side: Logo or Title */}
          <div className="text-lg font-semibold">
            Library Management
          </div>

          {/* Center: Navigation Links */}
          <div className="flex gap-4 text-sm flex-wrap justify-center">
            <a href="/" className="hover:underline">
              Books
            </a>
            <a href="/borrow-book" className="hover:underline">
              Borrow Summary
            </a>
            <a href="/add-book" className="hover:underline">
              Add Book
            </a>
          </div>

          {/* Right Side: Copyright */}
          <div className="text-sm text-neutral-500 dark:text-neutral-400 text-center">
            © {new Date().getFullYear()} Library System. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
