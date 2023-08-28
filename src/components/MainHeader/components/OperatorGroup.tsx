'use client'

import { LoggedInGroup } from './LoggedInGroup'
import { NotLogInGroup } from './NotLogInGroup'

export const OperatorGroup = () => {
  return (
    <div className="flex items-center gap-8">
      <LoggedInGroup />
      <NotLogInGroup />
    </div>
  )
}
