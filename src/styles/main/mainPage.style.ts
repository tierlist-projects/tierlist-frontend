import styled from '@emotion/styled'

export const MainPageContainer = styled.div`
  width: 75%;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and ((min-width: 360px) and (max-width: 1023px)) {
    width: 90%;
    padding: 0px;
  }
`

export const MiddleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 30px;

  @media screen and ((min-width: 360px) and (max-width: 1023px)) {
    flex-direction: column;
    gap: 30px;
  }
`

// 컴포넌트들의 제목
export const ContentsTitle = styled.p`
  width: 100%;
  font-weight: bold;
  font-size: 20px;
`
