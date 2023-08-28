'use client'

import { Badge } from '@mui/material'
import Notification2LineIcon from 'remixicon-react/Notification2LineIcon'
import Chat2LineIcon from 'remixicon-react/Chat2LineIcon'

export const LoggedInGroup = () => {
  return (
    <div className="flex items-center gap-8">
      <Badge badgeContent={4} color="primary">
        <Notification2LineIcon className="text-white" />
      </Badge>
      <Badge badgeContent={4} color="primary">
        <Chat2LineIcon className="text-white" />
      </Badge>
    </div>
  )
}
