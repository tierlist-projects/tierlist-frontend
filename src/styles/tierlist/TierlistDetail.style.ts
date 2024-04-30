import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
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

export const Menu = styled.div`
  position: absolute;
  top: 12px;
  right: 8px;
  display: flex;
  flex-direction: column;
  align-items: end;

  img {
    width: 24px;
    height: 24px;
  }
`

export const DropMenu = styled.ul`
  background-color: white;
  border: 1px solid ${colors.grey.second};
  border-radius: 5px;

  li {
    :hover {
      background-color: ${colors.primary[50]};
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    button {
      font-size: 16px;
      padding: 10px 20px;
    }
  }
`
