import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const CreateButton = styled.button`
  border-radius: 50%;
  background-color: ${colors.primary[400]};
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(99, 99, 99, 0.5);
  position: fixed;
  right: 50px;
  bottom: 50px;

  transition-duration: 0.3s;

  :active {
    transform: translateY(4px);
  }

  @media screen and ((min-width: 360px) and (max-width: 1023px)) {
    right: 20px;
    bottom: 20px;
  }
`
