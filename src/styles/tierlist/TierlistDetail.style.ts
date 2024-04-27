import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const TitleBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .category {
    font-size: 16px;
    color: ${colors.primary[300]};
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }
`

export const PostInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;

  .left {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .view {
    display: flex;
    align-items: center;
    gap: 4px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const Cotent = styled.p`
  width: 100%;
  min-height: 250px;
  font-size: 14px;
  line-height: 1.5;
`

export const LikeButton = styled.button`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 24px;
  border-radius: 15px;
  border: 1px solid ${colors.primary[100]};
  img {
    width: 28px;
    height: 28px;
  }

  font-size: 16px;
`
