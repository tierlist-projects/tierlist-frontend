import { colors } from '@constants/colors'
import styled from '@emotion/styled'

interface ListMobileProps {
  type: string
}

export const Container = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  gap: 50px;

  @media screen and ((min-width: 360px) and (max-width: 1023px)) {
    width: 95%;
    padding: 0px 16px;
    gap: 20px;
  }
`

export const TitleBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .favorite {
    width: 48px;
    height: 48px;

    @media screen and ((min-width: 360px) and (max-width: 767px)) {
      width: 32px;
      height: 32px;
    }
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;

  a {
    color: black;
  }

  @media screen and ((min-width: 360px) and (max-width: 767px)) {
    font-size: 20px;
  }
`

export const TierlistBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  column-gap: 10px;
  row-gap: 20px;
  place-items: center;
`

export const ListMobile = styled.div<ListMobileProps>`
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: ${(props) => (props.type === 'NONE' ? '400px' : '')};
  overflow: ${(props) => (props.type === 'NONE' ? 'auto' : '')};

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background-color: ${colors.primary[200]}; /* 스크롤바의 색상 */

    border-radius: 15px;
    /* border: 12px solid white; */
  }
  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background: rgba(202, 222, 252, 0.4);
  }
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

  @media screen and ((min-width: 360px) and (max-width: 767px)) {
    width: 100%;
  }
`

export const Search = styled.input`
  width: 100%;
  height: 100%;
  font-size: 14px;
  margin-right: 10px;
`

export const EmptyContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.grey.primary};
  font-size: 24px;
`
