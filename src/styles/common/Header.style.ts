import styled from '@emotion/styled'

export const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 4px rgba(206, 206, 206, 0.5);
  margin-bottom: 50px;
  background-color: white;

  position: sticky;
  top: 0;
  z-index: 5;
`

export const ContentBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 500px;

  @media screen and (max-width: 800px) {
    gap: 200px;
  }
`

export const Logo = styled.button`
  font-size: 30px;
  font-weight: bold;
`

export const RightArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;

  @media screen and (max-width: 800px) {
    gap: 20px;
  }
`

export const LoginMyPageButton = styled.button`
  font-size: 20px;
  font-weight: bold;
`
