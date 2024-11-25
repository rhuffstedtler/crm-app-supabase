import { supabaseServer } from '@/lib/supabaseServerClient';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { data, error } = await supabaseServer.from('accounts').select('*');
    if (error) throw error;
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching accounts:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
