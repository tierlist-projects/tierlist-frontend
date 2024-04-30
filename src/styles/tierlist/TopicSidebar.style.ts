import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 200px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  background-color: white;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 150px;
  right: -220px;
`

export const Title = styled.p`
  font-size: 14px;
  font-weight: bold;
`

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 5px;
  border-bottom: 1px solid ${colors.grey.primary};
  img {
    width: 14px;
    height: 14px;
  }
`

export const Search = styled.input`
  width: 100%;
  height: 100%;
  font-size: 12px;
  margin-left: 5px;
`

export const TopicList = styled.ul`
  width: 100%;
  height: 100%;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background-color: ${colors.grey.second}; /* 스크롤바의 색상 */

    border-radius: 15px;
    /* border: 12px solid white; */
  }
  ::-webkit-scrollbar-track {
    border-radius: 15px;
    background: rgba(217, 217, 217, 0.4);
  }
`

export const TopicItem = styled.li`
  width: 100%;
  font-size: 12px;
  padding: 5px;
  cursor: pointer;

  :hover {
    color: ${colors.primary[400]};
    text-decoration: underline;
    text-underline-position: under;
    /* transition: all 0.1s ease-in-out; */
  }
`
