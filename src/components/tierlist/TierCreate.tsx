import React from 'react'
import * as S from '@styles/tierlist/tierCreate.style'
import { images } from '@constants/images'
import useModal from '@hooks/useModal'
import CreateModal from './CreateModal'

const TierCreate = () => {
  const { Modal, isOpen, openModal, closeModal } = useModal()
  return (
    <>
      <S.CreateButton type="button" onClick={openModal}>
        <img src={images.common.plus} alt="게시글 작성" />
      </S.CreateButton>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <CreateModal closeModal={closeModal} />
      </Modal>
    </>
  )
}

export default TierCreate
