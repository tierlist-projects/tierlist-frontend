import * as S from '@styles/tierlist/createModal.style'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import { images } from '@constants/images'
import { Pagination } from '@mui/material'
import useCreateModal from '@hooks/tierlist/useCreateModal'

type Props = {
  closeModal: () => void
}

const CreateModal = ({ closeModal }: Props) => {
  const {
    category,
    topic,
    categoryList,
    topicList,
    isDropCategories,
    isDropTopics,
    categoryPages,
    topicPages,
    categoryTotalPages,
    topicTotalPages,
    titleRef,
    onChangeCategory,
    onChangeTopic,
    onClickCategory,
    onClickTopic,
    onClickCreateCategory,
    onClickCategoryPage,
    onClickTopicPage,
    onClickTierlistCreate,
    onClickCreateTopic,
  } = useCreateModal()

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
              value={category}
              onChange={onChangeCategory}
            />
            {isDropCategories && (
              <S.Drop>
                <S.DropContent onMouseDown={onClickCreateCategory}>
                  <img src={images.common.plusBlack} alt="카테고리 생성" />
                  <p>생성</p>
                </S.DropContent>
                {categoryList.length > 0 &&
                  categoryList.map((item) => (
                    <S.DropContent
                      key={`category${item.id}`}
                      onMouseDown={() => {
                        onClickCategory(item.id, item.name)
                      }}
                    >
                      {item.name}
                    </S.DropContent>
                  ))}
                {categoryTotalPages > 0 && (
                  <Pagination
                    count={categoryTotalPages}
                    page={categoryPages}
                    size="small"
                    onChange={onClickCategoryPage}
                  />
                )}
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
              value={topic}
              onChange={onChangeTopic}
            />
            {isDropTopics && (
              <S.Drop>
                <S.DropContent onClick={onClickCreateTopic}>
                  <img src={images.common.plusBlack} alt="토픽 생성" />
                  <p>생성</p>
                </S.DropContent>
                {topicList.map((item) => (
                  <S.DropContent
                    key={item.id}
                    onMouseDown={() => {
                      onClickTopic(item.id, item.name)
                    }}
                  >
                    {item.name}
                  </S.DropContent>
                ))}
                {topicTotalPages > 0 && (
                  <Pagination
                    count={topicTotalPages}
                    page={topicPages}
                    size="small"
                    onChange={onClickTopicPage}
                  />
                )}
              </S.Drop>
            )}
          </S.InputWithDrop>
        </S.InputBlock>
        <S.InputBlock>
          <p>제목</p>
          <S.Input
            type="text"
            placeholder="제목을 입력하세요."
            ref={titleRef}
          />
        </S.InputBlock>
      </S.Content>
      <S.ButtonBlock>
        <CButton
          text="생성"
          fontSize={20}
          onClick={() => {
            onClickTierlistCreate(closeModal)
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
