import { colors } from '@constants/colors'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const Layout = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  justify-content: center;
  background-color: #eeeeee;
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding-bottom: 20px;

  @media screen and ((min-width: 768px)) {
    width: 50%;
  }
`

export const SearchBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 20px;
  gap: 16px;

  img {
    width: 24px;
    height: 24px;
  }

  input {
    flex: 1;
    font-size: 16px;

    ::placeholder {
      color: ${colors.grey.second};
      font-weight: bold;
    }
  }
`
export const CategoryUl = styled.ul`
  width: 100%;
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

export const CategoryLi = styled.li`
  width: 100%;
`

export const CategoryLink = styled(Link)`
  display: block;
  width: 100%;
  padding: 20px;
  font-size: 16px;
  color: black;

  :hover {
    background-color: ${colors.primary[50]};
    transition: all 150ms ease-in-out;
  }
`
