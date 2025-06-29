import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* Header */}
      <header className="w-full p-4 border-b border-gray-200 dark:border-gray-700 shadow-sm bg-white dark:bg-gray-900">
        <nav className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-violet-700 dark:text-violet-400">
              Instagram
            </span>
          </div>

          {/* Ações do topo */}
          <div className="flex items-center gap-4 text-sm">
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition"
            >
              Ajuda
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition"
            >
              Idioma
            </a>
            <button className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm hover:bg-violet-700 transition">
              Criar conta
            </button>
          </div>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
          {/* Texto */}
          <section className="md:w-1/2 text-center md:text-left">
            <article>
              <h2 className="text-3xl font-bold mb-4">Join for Free</h2>
              <p className="mb-2 text-gray-700 dark:text-gray-300">
                Post your travels, food, and all things you love.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                More than 14 million people are on Instagram.
              </p>
            </article>
          </section>

          {/* Formulário */}
          <aside className="md:w-1/3 w-full bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg">
            <form className="flex flex-col gap-4 font-mono">
              <div>
                <label htmlFor="email" className="block mb-1 font-semibold">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-900"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-1 font-semibold">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-zinc-900"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="bg-violet-600 hover:bg-violet-700 text-white p-2 rounded-full transition"
              >
                Enter
              </button>
            </form>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 dark:bg-gray-800 mt-12">
        <div className="max-w-6xl mx-auto py-6 px-4 flex flex-col md:flex-row justify-between text-sm text-gray-600 dark:text-gray-400">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Instagram Clone</p>
            <p>All rights reserved.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              About
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
