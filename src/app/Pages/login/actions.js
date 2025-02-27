'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function emailLogin(FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email'),
    password: formData.get('password') ,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/login?message=Could not authenticate user')
  }

  revalidatePath('/', 'layout')
  redirect('/Board/1')
}

export async function signup( FormData) {
  const supabase = await createClient()

  const data = {
    email: formData.get('email') ,
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    redirect('/login?message=Error siging up ')
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}