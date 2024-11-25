'use client';

import { useEffect, useState } from 'react';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await fetch('/api/accounts', { cache: 'no-store' });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Failed to fetch accounts');
        setAccounts(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // TypeScript now knows err is an Error
        } else {
          setError('An unknown error occurred'); // Fallback for unexpected error types
        }
      }
    };
    fetchAccounts();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Accounts</h1>
      {accounts.length ? (
        <ul>
          {accounts.map((account: any) => (
            <li key={account.id} className="p-2 border-b">
              {account.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No accounts found.</p>
      )}
    </div>
  );
}
