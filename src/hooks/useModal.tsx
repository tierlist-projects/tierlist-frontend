import { useCallback, useState } from 'react'
import { ModalProps } from 'types/common/modal.type'
import Modal from '@components/common/Modal'

type UseModalReturnType = {
  Modal: ({ children, isOpen, closeModal }: ModalProps) => JSX.Element
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const useModal = (): UseModalReturnType => {
  const [isOpen, setIsOpen] = useState(false)

  // 모달 열기
  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  // 모달 닫기
  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return {
    Modal,
    isOpen,
    openModal,
    closeModal,
  }
}

export default useModal
