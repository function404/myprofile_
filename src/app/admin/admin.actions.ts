'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

import type { IProject, ITech } from '^/app/data/Projects/ProjectsData'

import { createClient } from '^/app/supabase/ServerSupabase'

import { IFormState } from '^/app/admin/admin.types'

export async function signOut() {
   const supabase = createClient()
   await supabase.auth.signOut()
   redirect('/login')
}

function parseProjectFormData(formData: FormData): Omit<IProject, 'id' | 'created_at'> {
   const title = formData.get('title') as string
   const description = formData.get('description') as string
   const img = formData.get('img') as string
   const link = formData.get('link') as string
   const type = formData.get('type') as 'web' | 'mobile'
   const order = Number(formData.get('order') || 0)
   const target = formData.get('target') === 'on'

   const techsString = formData.get('techs') as string || ''
   const techs: ITech[] = techsString
      .split(';')
      .map(t => {
         const [name, iconName] = t.split(',').map(s => s.trim())
         return name && iconName ? { name, iconName } : null
      })
      .filter((t): t is ITech => t !== null)

   const imgsString = formData.get('imgs') as string || ''
   const imgs: string[] = imgsString
      ? imgsString.split(',').map(url => url.trim()).filter(url => url.length > 0)
      : []

   return {
      title,
      description,
      img,
      link,
      type,
      "order": order,
      target,
      techs,
      imgs,
   }
}

export async function addProject(
   prevState: IFormState,
   formData: FormData
): Promise<IFormState> {
   const supabase = createClient()
   const { data: { user } } = await supabase.auth.getUser()
   if (!user) return { message: 'Não autorizado.', type: 'error' }

   try {
      const projectData = parseProjectFormData(formData)
      const { error } = await supabase.from('projects').insert(projectData)

      if (error) throw error
      revalidatePath('/')
      revalidatePath('/admin')
      return { message: 'Projeto adicionado com sucesso!', type: 'success' }
   } catch (e: any) {
      console.error('Add Project Error:', e)
      return { message: `Erro ao adicionar: ${e.message}`, type: 'error' }
   }
}

export async function updateProject(
   prevState: IFormState,
   formData: FormData
): Promise<IFormState> {
   const supabase = createClient()
   const { data: { user } } = await supabase.auth.getUser()
   if (!user) return { message: 'Não autorizado.', type: 'error' }

   const projectId = Number(formData.get('id'))
   if (!projectId) return { message: 'ID do projeto inválido.', type: 'error' }

   try {
      const projectData = parseProjectFormData(formData)
      const { error } = await supabase
         .from('projects')
         .update(projectData)
         .eq('id', projectId)

      if (error) throw error
      revalidatePath('/')
      revalidatePath('/admin')
      revalidatePath(`/admin/edit/${projectId}`)
      return { message: 'Projeto atualizado com sucesso!', type: 'success' }
   } catch (e: any) {
      console.error('Update Project Error:', e)
      return { message: `Erro ao atualizar: ${e.message}`, type: 'error' }
   }
}

export async function deleteProject(formData: FormData): Promise<{ message: string, type: 'success' | 'error' }> {
   const supabase = createClient()
   const { data: { user } } = await supabase.auth.getUser()
   if (!user) return { message: 'Não autorizado.', type: 'error' }

   const projectId = Number(formData.get('id'))
   if (!projectId) return { message: 'ID do projeto inválido.', type: 'error' }

   try {
      const { error } = await supabase
         .from('projects')
         .delete()
         .eq('id', projectId)

      if (error) throw error

      revalidatePath('/')
      revalidatePath('/admin')
      return { message: 'Projeto deletado com sucesso!', type: 'success' }
   } catch (e: any) {
      console.error('Delete Project Error:', e)
      return { message: `Erro ao deletar: ${e.message}`, type: 'error' }
   }
}