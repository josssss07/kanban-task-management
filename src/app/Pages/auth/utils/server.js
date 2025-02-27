import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  const cookieStore = await cookies(); 

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) => {
              // Next.js `cookies()` API does not allow modifying cookies inside Server Components
              console.warn(`Cannot set cookie "${name}" in a Server Component.`);
            });
          } catch (error) {
            console.error('Error setting cookies:', error);
          }
        },
      },
    }
  );
}
