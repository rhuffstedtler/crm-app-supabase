import { supabase } from '@/lib/supabaseClient';
import { handleError } from '@/lib/errorHandler';

export default async function AccountsPage() {
  const { data, error } = await supabase.from('accounts').select('*');
  if (error) handleError(error);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Accounts</h1>
      {data?.length ? (
        <ul>
          {data.map((account) => (
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
