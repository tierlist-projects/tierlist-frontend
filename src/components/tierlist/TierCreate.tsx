import React from 'react'
import * as S from '@styles/tierlist/tierCreate.style'
import { images } from '@constants/images'
import useModal from '@hooks/useModal'
import { useRecoilValue } from 'recoil'
import { userState } from '@atom/userAtom'
import CreateModal from './CreateModal'

const TierCreate = () => {
  const { Modal, isOpen, openModal, closeModal } = useModal()
  const user = useRecoilValue(userState)
  return (
    <>
      <S.CreateButton
        type="button"
        onClick={() => {
          if (user) openModal()
          else {
            alert('로그인을 해야 이용할 수 있습니다.')
          }
        }}
      >
        <img src={images.common.plus} alt="게시글 작성" />
      </S.CreateButton>
      <Modal isOpen={isOpen}>
        <CreateModal closeModal={closeModal} />
      </Modal>
    </>
  )
}

export default TierCreate
