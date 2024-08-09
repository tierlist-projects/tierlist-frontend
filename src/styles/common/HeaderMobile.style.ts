import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(206, 206, 206, 0.5);
  margin-bottom: 30px;
  background-color: white;
  padding: 0px 20px;

  position: sticky;
  top: 0;
  z-index: 5;

  @media screen and ((min-width: 768px) and (max-width: 1023px)) {
    padding: 0px 40px;
  }
`

export const Logo = styled(Link)`
  font-size: 20px;
  font-weight: bold;
`

export const IconBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 24px;
      height: 24px;
    }
  }
`
