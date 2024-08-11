import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;

  @media screen and ((min-width: 360px) and (max-width: 1023px)) {
    width: 90%;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const List = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  place-items: center;
  gap: 20px;
`

export const ListOnMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  max-height: 400px;
  overflow: auto;

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
