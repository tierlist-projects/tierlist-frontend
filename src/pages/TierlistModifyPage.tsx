import React from 'react'
import * as S from '@styles/tierlist/TierlistModifyPage.style'
import Tierlist from '@components/tierlist/Tierlist'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import { useNavigate } from 'react-router-dom'
import UploadImage from '@components/tierlist/UploadImage'

const TierlistModifyPage = () => {
  const navigate = useNavigate()
  return (
    <S.Container>
      <S.TitleBlock>
        <p className="category">카테고리 / 토픽</p>
        <p className="title">제목</p>
      </S.TitleBlock>
      <Tierlist />
      <S.ContentBlock>
        <S.SubTitle>글</S.SubTitle>
        <textarea placeholder="내용을 입력하세요." />
      </S.ContentBlock>
      <S.ThumbnailBlock>
        <S.SubTitle>썸네일</S.SubTitle>
        <UploadImage />
      </S.ThumbnailBlock>
      <S.ButtonBlock>
        <CButton text="저장" fontSize={20} hPadding={12} vPadding={36} />
        <CButton
          text="취소"
          fontSize={20}
          hPadding={12}
          vPadding={36}
          backgroundColor={colors.grey.primary}
          onClick={() => navigate(-1)}
        />
      </S.ButtonBlock>
    </S.Container>
  )
}

export default TierlistModifyPage
