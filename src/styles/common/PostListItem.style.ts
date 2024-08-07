import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 303px;
  display: flex;

  & > img {
    width: 120px;
    height: 110px;
    border-radius: 5px 0px 0px 5px;
  }
`

export const InfoBlock = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 8px;
`

export const Title = styled.p`
  width: 100%;
  min-height: 30px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  line-height: 1.2;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-all;

  font-weight: bold;
  font-size: 12px;
`

export const TagBlock = styled.div`
  display: flex;
  gap: 4px;
`

export const Author = styled.p`
  font-size: 10px;
  font-weight: bold;
`

export const NumberWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  img {
    width: 16px;
    height: 16px;
  }

  p {
    font-size: 10px;
    color: ${colors.grey.primary};
  }
`

export const NumericalInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 6px;
`
