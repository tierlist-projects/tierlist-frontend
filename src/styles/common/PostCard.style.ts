import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const PostCardContainer = styled.div`
  width: 200px;
  height: 240px;
  border-radius: 15px;
  box-shadow: 2px 2px 4px rgba(187, 187, 187, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;

  & > img {
    width: 100%;
    height: 140px;
    border-radius: 15px 15px 0px 0px;
    object-fit: cover;
  }
`

export const PostInfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
`

export const Title = styled.p`
  width: 100%;
  height: 39px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  line-height: 1.2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;

  font-weight: bold;
  font-size: 16px;
`

export const CategoryAndAuthor = styled.p`
  font-size: 12px;
  color: ${colors.grey.primary};
`

export const BottomBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const NumericalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const NumberWithIcon = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 14px;
    height: 14px;
    margin-right: 6px;
  }

  p {
    font-size: 10px;
    color: ${colors.grey.primary};
  }
`
