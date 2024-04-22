import React from 'react'
import * as S from '@styles/tierlist/createModal.style'
import { images } from '@constants/images'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import { useNavigate } from 'react-router-dom'

type Props = {
  closeModal: () => void
}

const CreateModal = ({ closeModal }: Props) => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.CloseButton type="button" onClick={closeModal}>
        <img src={images.common.close} alt="닫기" />
      </S.CloseButton>
      <S.Title>티어리스트 생성</S.Title>
      <S.Content>
        <S.InputBlock>
          <p>카테고리</p>
          <S.InputWithDrop>
            <S.Input type="text" />
            {/* Drop은 검색 결과 배열의 길이가 0 이상일 때만 출력 */}
            <S.Drop>
              <S.DropContent>하이</S.DropContent>
            </S.Drop>
          </S.InputWithDrop>
        </S.InputBlock>
        <S.InputBlock>
          <p>토픽</p>
          <S.InputWithDrop>
            <S.Input type="text" />
            <S.Drop>
              <S.DropContent>하이</S.DropContent>
            </S.Drop>
          </S.InputWithDrop>
        </S.InputBlock>
        <S.InputBlock>
          <p>제목</p>
          <S.Input type="text" />
        </S.InputBlock>
      </S.Content>
      <S.ButtonBlock>
        <CButton
          text="생성"
          fontSize={20}
          onClick={() => {
            navigate('/tierlist-modify')
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

export default CreateModal
