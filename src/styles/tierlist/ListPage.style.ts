import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 850px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 50px;
`

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .favorite {
    width: 48px;
    height: 48px;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`

export const TierlistBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 20px;
  place-items: center;
`

export const BottomBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

export const TierlistSearch = styled.div`
  display: flex;
  gap: 10px;

  select {
    border-radius: 5px;
    border: 1px solid ${colors.grey.primary};
    padding: 5px;
  }
`

export const SearchBarContainer = styled.div`
  width: 300px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  border: 1px solid ${colors.grey.primary};
  padding: 10px;
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 20px;
      height: 20px;
    }
  }
`

export const Search = styled.input`
  width: 100%;
  height: 100%;
  font-size: 14px;
  margin-right: 10px;
`
