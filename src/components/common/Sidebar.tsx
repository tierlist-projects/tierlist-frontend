import * as S from '@styles/common/Sidebar.style'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { SidebarProps } from 'types/common/sidebar.type'

const Sidebar = ({ children, isOpen, closeSidebar }: SidebarProps) => {
  const [portalElement, setPortalElement] = useState<Element | null>(null)

  const closeHandler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation()
    if (closeSidebar) closeSidebar()
  }

  useEffect(() => {
    setPortalElement(document.getElementById('portal'))
  }, [isOpen])
  return (
    <>
      {portalElement
        ? createPortal(
            <AnimatePresence>
              {isOpen && (
                <S.Overlay onClick={closeHandler} className="modal-overlay">
                  <S.Wrapper
                    onClick={(e) => e.stopPropagation()}
                    initial={{
                      x: '100%',
                    }}
                    animate={{
                      x: 0,
                      transition: {
                        ease: 'easeOut',
                        duration: 0.5,
                      },
                    }}
                    exit={{
                      x: '100%',
                      transition: {
                        ease: 'easeIn',
                        duration: 0.5,
                      },
                    }}
                  >
                    {children}
                  </S.Wrapper>
                </S.Overlay>
              )}
            </AnimatePresence>,
            portalElement,
          )
        : null}
    </>
  )
}

export default Sidebar
