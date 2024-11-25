import './globals.css';

export const metadata = {
  title: 'CRM App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          <nav className="bg-blue-600 text-white p-4">CRM Navigation</nav>
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
