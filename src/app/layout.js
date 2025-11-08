import "./globals.css";

export const metadata = {
  title: "Divyanshu’s Blog",
  description: "Personal blog of Divyanshu Sahu — thoughts, notes, and experiments.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased leading-relaxed font-sans">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-8 py-12">
          <header className="mb-12 border-b pb-6">
            <a href="/blog" className="text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity">
              Divyanshu’s Blog
            </a>
          </header>
          {children}
          <footer className="mt-16 text-sm text-gray-500 border-t pt-6">
            © {new Date().getFullYear()} Divyanshu Sahu. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
