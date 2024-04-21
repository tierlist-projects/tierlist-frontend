import styled from '@emotion/styled'

export const MainPageContainer = styled.div`
  width: 1000px;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const MiddleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
// 메인 페이지를 구성하는 컴포넌트들의 컨테이너
export const ContentsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  gap: 20px;
`

// 컴포넌트들의 제목
export const ContentsTitle = styled.p`
  font-weight: bold;
  font-size: 24px;
`
