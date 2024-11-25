export const handleError = (error: Error | { message?: string }) => {
  console.error('Supabase Error:', error.message);
  throw new Error(error.message || 'Unexpected error occurred.');
};
