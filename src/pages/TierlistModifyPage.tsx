import * as S from '@styles/tierlist/TierlistModifyPage.style'
import Tierlist from '@components/tierlist/Tierlist'
import CButton from '@components/common/CButton'
import { colors } from '@constants/colors'
import UploadImage from '@components/tierlist/UploadImage'
import useModify from '@hooks/tierlist/useModify'
import { Mobile, TabletAndPC } from '@components/common/MediaQuery'
import Toggle from '@components/mypage/Toggle'

const TierlistModifyPage = () => {
  const {
    navigate,
    postDetail,
    ranks,
    contentRef,
    titleRef,
    setRanks,
    setThumbnail,
    savePost,
  } = useModify()

  if (!postDetail) return null

  return (
    <S.Container>
      <S.TitleBlock>
        <p className="category">
          {postDetail.topic.category.name} / {postDetail.topic.name}
        </p>
        <input
          type="text"
          className="title"
          defaultValue={postDetail?.title}
          ref={titleRef}
        />
        <Toggle
          tierlistId={postDetail.id}
          initialState={postDetail.isPublished}
        />
      </S.TitleBlock>
      <Tierlist
        ranks={ranks}
        setRanks={setRanks}
        categoryId={postDetail.topic.category.id}
      />
      <S.ContentBlock>
        <S.SubTitle>글</S.SubTitle>
        <textarea
          placeholder="내용을 입력하세요."
          defaultValue={postDetail.content || ''}
          ref={contentRef}
        />
      </S.ContentBlock>
      <S.ThumbnailBlock>
        <S.SubTitle>썸네일</S.SubTitle>
        <UploadImage
          thumbnail={postDetail.thumbnailImage}
          setFile={setThumbnail}
        />
      </S.ThumbnailBlock>
      <TabletAndPC>
        <S.ButtonBlock>
          <CButton
            text="저장"
            fontSize={20}
            hPadding={12}
            vPadding={36}
            onClick={savePost}
          />
          <CButton
            text="취소"
            fontSize={20}
            hPadding={12}
            vPadding={36}
            backgroundColor={colors.grey.primary}
            onClick={() => navigate(-1)}
          />
        </S.ButtonBlock>
      </TabletAndPC>
      <Mobile>
        <S.ButtonBlock>
          <CButton text="저장" fontSize={16} onClick={savePost} />
          <CButton
            text="취소"
            fontSize={16}
            backgroundColor={colors.grey.primary}
            onClick={() => navigate(-1)}
          />
        </S.ButtonBlock>
      </Mobile>
    </S.Container>
  )
}

export default TierlistModifyPage
