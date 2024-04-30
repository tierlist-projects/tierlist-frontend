import React, { useCallback, useState } from 'react'
import * as S from '@styles/mypage/MyTierlistCard.style'
import { images } from '@constants/images'
import { useNavigate } from 'react-router-dom'
import Toggle from './Toggle'

const MyTierlistCard = () => {
  const navigate = useNavigate()
  const [isActive, setIsActive] = useState(false)
  const onClickMenu = useCallback(() => {
    setIsActive((prev) => !prev)
  }, [])

  const onClickRemove = () => {
    console.log('삭제')
  }

  return (
    <S.Container>
      <S.Menu>
        <button type="button" onClick={onClickMenu}>
          <img src={images.common.dotMenu} alt="메뉴" />
        </button>
        {isActive && (
          <S.DropMenu>
            <li>
              <button
                type="button"
                onClick={() => navigate('/tierlist-modify/1')}
              >
                수정
              </button>
            </li>
            <li>
              <button type="button" onClick={onClickRemove}>
                삭제
              </button>
            </li>
          </S.DropMenu>
        )}
      </S.Menu>
      <img
        src="https://search.pstatic.net/common/?src=http%3A%2F%2Fcafefiles.naver.net%2F20120222_75%2Fjhn_01_1329865502587f7ug7_JPEG%2Fd1.jpg&type=a340"
        alt="티어리스트 썸네일"
      />
      <S.PostInfoContainer>
        <S.Title>제목입니다.</S.Title>
        <S.CategoryAndAuthor>카테고리 / 토픽</S.CategoryAndAuthor>
        <S.BottomBlock>
          <S.NumericalInfo>
            <S.NumberWithIcon>
              <img src={images.common.postCard.heart} alt="좋아요" />
              <p>24</p>
            </S.NumberWithIcon>
            <S.NumberWithIcon>
              <img src={images.common.postCard.comment} alt="댓글" />
              <p>24</p>
            </S.NumberWithIcon>
            <S.NumberWithIcon>
              <img src={images.common.postCard.views} alt="조회수" />
              <p>24</p>
            </S.NumberWithIcon>
          </S.NumericalInfo>
          <Toggle />
        </S.BottomBlock>
      </S.PostInfoContainer>
    </S.Container>
  )
}

export default MyTierlistCard
