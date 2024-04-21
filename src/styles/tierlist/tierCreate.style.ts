import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`

export const CreateButton = styled.button`
  cursor: pointer;
  border-radius: 50%;
  background-color: ${colors.primary[400]};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(99, 99, 99, 0.5);
  position: fixed;
  right: 100px;
  bottom: 50px;

  transition-duration: 0.3s;

  img {
    width: 40px;
    height: 40px;
  }

  :active {
    transform: translateY(4px);
  }
`
