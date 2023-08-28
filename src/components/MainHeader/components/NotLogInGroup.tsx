'use client'

import Link from 'next/link'
import { Button } from '@mui/material'

export const NotLogInGroup = () => {
  return (
    <div className="flex items-center gap-6">
      <Link href="/authenticate/login">
        <Button sx={{ color: 'white' }}>Đăng Nhập</Button>
      </Link>

      <Link href="/authenticate/register">
        <Button sx={{ color: 'white' }}>Đăng Ký</Button>
      </Link>
    </div>
  )
}
