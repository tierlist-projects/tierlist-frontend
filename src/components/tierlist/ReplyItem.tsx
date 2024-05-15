import * as S from '@styles/tierlist/CommentItem.style'
import { images } from '@constants/images'
import { CommentType } from 'types/tierlist/comment.type'
import { formatDate } from '@utils/tierlist/tierlistUtil'

type Props = {
  comment: CommentType
}

const ReplyItem = ({ comment }: Props) => {
  return (
    <S.ReplyList>
      <S.ProfileImg
        src={
          comment.writer.profileImage
            ? `https://image.tierlist.site/tierlist/${comment.writer.profileImage}`
            : images.common.defaultProfile
        }
        alt="프로필사진"
      />
      <S.Content>
        <S.TopBlock>
          <S.CommentInfo>
            <p className="nickname">{comment.writer.nickname}</p>
            <p className="date">{formatDate(comment.createdAt)}</p>
          </S.CommentInfo>
        </S.TopBlock>
        <S.CommentText>{comment.content}</S.CommentText>
      </S.Content>
    </S.ReplyList>
  )
}

export default ReplyItem
