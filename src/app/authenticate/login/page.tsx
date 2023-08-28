'use client'

import { useRouter } from 'next/navigation'
import { auth, provider } from '@/lib/firebase'
import { getRedirectResult, signInWithRedirect } from 'firebase/auth'
import { useEffect } from 'react'
import { Button } from '@mui/material'

const Login = () => {
  const router = useRouter()

  useEffect(() => {
    getRedirectResult(auth).then(async (userCred) => {
      if (!userCred) {
        return
      }

      const token = await userCred.user.getIdToken()
      console.log(token)
    })
  }, [router])

  const signIn = () => {
    signInWithRedirect(auth, provider)
  }

  return
}

export default Login
