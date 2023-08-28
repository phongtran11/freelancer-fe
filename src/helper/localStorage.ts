'use client'

import { TLocalStorageValue } from '@/types'

export const getItemFromLocalStorage = <T>(key: string) => {
  const item = localStorage.getItem(key)
  return item ? (JSON.parse(item) as T) : null
}

export const setItemInLocalStorage = (
  key: string,
  value: TLocalStorageValue
) => {
  localStorage.setItem(key, JSON.stringify(value))
}
