export default function HomePage() {
  const links = [
    { name: 'Accounts', href: '/accounts' },
    { name: 'Contacts', href: '/contacts' },
    { name: 'Opportunities', href: '/opportunities' },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-blue-600 mb-8">Welcome to the CRM</h1>
      <p className="text-gray-700 text-lg mb-4">Manage your business data effectively.</p>
      <ul className="flex flex-col space-y-4">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="block px-4 py-2 bg-blue-600 text-white rounded-md text-center shadow-sm hover:bg-blue-700 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
