import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Container = styled.nav`
  height: 100vh;
  width: 280px;
  background-color: white;
`

export const NavUl = styled.ul`
  width: 100%;
`

export const NavLi = styled.li`
  width: 100%;
  border-bottom: 1px solid rgba(217, 217, 217, 0.5);
`

export const StyledLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-weight: bold;
`

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 20px;

  img {
    width: 64px;
    height: 64px;
    object-fit: cover;
    border-radius: 50%;
  }

  p {
    font-size: 16px;
    font-weight: bold;
  }
`
