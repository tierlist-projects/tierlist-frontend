import React from 'react'
import * as S from '@styles/tierlist/createModal.style'
import { images } from '@constants/images'

type Props = {
  closeModal: () => void
}

const CreateModal = ({ closeModal }: Props) => {
  return (
    <S.Container>
      <S.CloseButton type="button" onClick={closeModal}>
        <img src={images.common.close} alt="닫기" />
      </S.CloseButton>
      CreateModal
    </S.Container>
  )
}

export default CreateModal
