import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const ContentsContainer = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  gap: 20px;

  @media screen and ((min-width: 360px) and (max-width: 1023px)) {
    width: 100%;
    padding: 16px;
  }
`

export const TierList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-items: center;
  padding: 10px;
  gap: 16px;
  max-height: 400px;
  overflow: auto;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const TierListMobile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const EmptyText = styled.div`
  width: 600px;
  font-size: 16px;
  color: ${colors.grey.primary};
`
