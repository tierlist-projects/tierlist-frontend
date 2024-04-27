import React, { useCallback, useEffect, useState } from 'react'
import * as S from '@styles/tierlist/createModal.style'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import { useNavigate } from 'react-router-dom'
import useDebounce from '@hooks/useDebounce'
import { CategoryType, TopicType } from 'types/tierlist/category.type'
import { images } from '@constants/images'
import { Pagination } from '@mui/material'

type Props = {
  closeModal: () => void
}

const CreateModal = ({ closeModal }: Props) => {
  const navigate = useNavigate()

  const [category, setCategory] = useState('')
  const [categoryList, setCategoryList] = useState<CategoryType[]>([])
  const [isDropCategories, setIsDropCategories] = useState(false)

  const [topic, setTopic] = useState('')
  const [topicList, setTopicList] = useState<TopicType[]>([])
  const [isDropTopics, setIsDropTopics] = useState(false)

  const debouncedCategory = useDebounce(category, 1000)
  const debouncedTopic = useDebounce(topic, 1000)

  useEffect(() => {
    setCategoryList([{ id: 1, name: '카테고리1', isFavorite: false }])
  }, [debouncedCategory])

  useEffect(() => {
    setTopicList([])
  }, [debouncedTopic])

  const onChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(event.target.value)
  }

  const onChangeTopic = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTopic(event.target.value)
  }

  const onClickCategory = useCallback(() => {
    console.log('카테고리 선택')
  }, [])

  const onClickTopic = useCallback(() => {
    console.log('토픽 선택')
  }, [])

  return (
    <S.Container>
      <S.Title>티어리스트 생성</S.Title>
      <S.Content>
        <S.InputBlock>
          <p>카테고리</p>
          <S.InputWithDrop>
            <S.Input
              type="text"
              placeholder="카테고리를 입력하세요."
              onChange={onChangeCategory}
              onFocus={() => setIsDropCategories(true)}
              onBlur={() => setIsDropCategories(false)}
            />
            {isDropCategories && (
              <S.Drop>
                <S.DropContent>
                  <img src={images.common.plusBlack} alt="카테고리 생성" />
                  <p>생성</p>
                </S.DropContent>
                {categoryList.map((item) => (
                  <S.DropContent key={item.id} onMouseDown={onClickCategory}>
                    {item.name}
                  </S.DropContent>
                ))}
                <Pagination count={0} size="small" />
              </S.Drop>
            )}
          </S.InputWithDrop>
        </S.InputBlock>
        <S.InputBlock>
          <p>토픽</p>
          <S.InputWithDrop>
            <S.Input
              type="text"
              placeholder="토픽을 입력하세요."
              onChange={onChangeTopic}
              onFocus={() => setIsDropTopics(true)}
              onBlur={() => setIsDropTopics(false)}
            />
            {isDropTopics && (
              <S.Drop>
                <S.DropContent>
                  <img src={images.common.plusBlack} alt="토픽 생성" />
                  <p>생성</p>
                </S.DropContent>
                {topicList.map((item) => (
                  <S.DropContent key={item.id} onMouseDown={onClickTopic}>
                    {item.name}
                  </S.DropContent>
                ))}
                <Pagination count={0} size="small" />
              </S.Drop>
            )}
          </S.InputWithDrop>
        </S.InputBlock>
        <S.InputBlock>
          <p>제목</p>
          <S.Input type="text" placeholder="제목을 입력하세요." />
        </S.InputBlock>
      </S.Content>
      <S.ButtonBlock>
        <CButton
          text="생성"
          fontSize={20}
          onClick={() => {
            navigate('/tierlist-modify/1')
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
