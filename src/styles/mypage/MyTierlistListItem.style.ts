import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const ListItemContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  cursor: pointer;

  & > img {
    width: 40%;
    border-radius: 5px 0px 0px 5px;
    object-fit: cover;
  }
`

export const PostInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: space-between;
  padding: 12px;
  gap: 8px;
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
  font-size: 14px;
`

export const TagBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const BottomBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const NumericalInfo = styled.div`
  width: 100%;
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

export const Menu = styled.div`
  position: absolute;
  top: 12px;
  left: 8px;
  display: flex;
  flex-direction: column;
  align-items: start;

  img {
    width: 20px;
    height: 20px;
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
      font-size: 12px;
      padding: 5px 10px;
    }
  }
`
