import styled from '@emotion/styled'
import { colors } from '@constants/colors'

export const SearchBarContainer = styled.div`
  width: 300px;
  height: 40px;
  position: relative;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  align-items: center;
  img {
    position: absolute;
    left: 19px;
    top: 8px;
    width: 24px;
    height: 24px;
  }
`

export const Search = styled.input`
  padding-left: 50px;
  width: 100%;
  height: 100%;
  font-size: 16px;
`

export const SearchResultContainer = styled.div`
  z-index: 3;
  width: 300px;
  background-color: white;
  position: absolute;
  top: 50px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
`

export const SearchResultWrap = styled.ul`
  max-height: 300px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const SearchResult = styled.li`
  padding: 12px 20px;
  width: 100%;
  font-size: 16px;
  position: relative;
  border-top: 1px solid #dedede;

  :first-of-type {
    border: 0;
    padding-top: 24px;
    border-radius: 20px 20px 0px 0px;
  }

  :last-of-type {
    padding-bottom: 24px;
    border-radius: 0px 0px 20px 20px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${colors.primary[50]};
    transition: all 150ms ease-in-out;
  }
`
