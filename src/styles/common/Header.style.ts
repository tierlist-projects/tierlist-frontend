import { colors } from '@constants/colors'
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

export const Menu = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: end;

  .nickname {
    font-size: 20px;
    font-weight: bold;
  }
`

export const DropMenu = styled.ul`
  position: absolute;
  top: 130%;
  left: 0;
  width: 130px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);

  li {
    :hover {
      background-color: ${colors.primary[50]};
      border-radius: 5px;
      transition: all 0.3s ease-in-out;
    }

    button {
      width: 100%;
      font-size: 16px;
      padding: 10px;
    }
  }
`
