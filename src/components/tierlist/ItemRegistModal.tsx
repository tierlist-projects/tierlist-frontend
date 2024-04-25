import React from 'react'
import * as S from '@styles/tierlist/createModal.style'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import UploadImage from './UploadImage'

type Props = {
  closeModal: () => void
}

const ItemRegistModal = ({ closeModal }: Props) => {
  return (
    <S.Container>
      <S.Title>아이템 등록</S.Title>
      <S.Content>
        <S.InputBlock>
          <p>이미지</p>
          <UploadImage />
        </S.InputBlock>
        <S.InputBlock>
          <p>이름</p>
          <S.Input type="text" />
        </S.InputBlock>
      </S.Content>
      <S.ButtonBlock>
        <CButton
          text="등록"
          fontSize={20}
          onClick={() => {
            console.log('등록')
            closeModal()
          }}
        />
        <CButton
          text="취소"
          fontSize={20}
          backgroundColor={colors.grey.primary}
          onClick={closeModal}
        />
      </S.ButtonBlock>
    </S.Container>
  )
}

export default ItemRegistModal
