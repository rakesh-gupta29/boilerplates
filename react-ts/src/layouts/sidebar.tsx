import React, { ReactNode } from 'react'

export default function SidebarWrapper({ children }: { children: ReactNode }) {
  return (
    <div>
      this is side bar wrapper
      {children}
    </div>
  )
}
