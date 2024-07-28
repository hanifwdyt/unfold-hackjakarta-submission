'use server';

import { createMenu, generativeAI, updateMenu } from '@/lib/menu';

export async function update(id, data) {
  const response = await updateMenu(id, data)
  return response
}

export async function genAI(data) {
  const response = await generativeAI(data)
  return response
}


export async function create(data) {
  const response = await createMenu(id, data)
  return response
}