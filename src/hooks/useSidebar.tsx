import { useCallback, useState } from 'react'
import { SidebarProps } from 'types/common/sidebar.type'
import Sidebar from '@components/common/Sidebar'

type UseSideberReturn = {
  Sidebar: ({ children, isOpen, closeSidebar }: SidebarProps) => JSX.Element
  isOpen: boolean
  openSidebar: () => void
  closeSidebar: () => void
}

const useSidebar = (): UseSideberReturn => {
  const [isOpen, setIsOpen] = useState(false)

  const openSidebar = useCallback(() => {
    setIsOpen(true)
    document.body.style.overflow = 'hidden'
  }, [])

  const closeSidebar = useCallback(() => {
    setIsOpen(false)
    document.body.style.removeProperty('overflow')
  }, [])

  return { Sidebar, isOpen, openSidebar, closeSidebar }
}

export default useSidebar
