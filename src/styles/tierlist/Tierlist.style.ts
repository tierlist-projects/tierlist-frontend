import { colors } from '@constants/colors'
import styled from '@emotion/styled'

interface LankProps {
  backgroundColor: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.primary[200]};
`

export const Item = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
`

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-spacing: 0px;
  border-collapse: collapse;
  background-color: ${colors.tierlist.background};
`

export const Tr = styled.tr`
  width: 100%;
  display: flex;
`

export const Lank = styled.td<LankProps>`
  width: 70px;
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.backgroundColor};
  -webkit-text-stroke: 1px black;
  font-size: 28px;
  color: white;
  font-weight: bold;

  border: 1px solid black;
`

export const LankCotent = styled.td`
  flex: 1;
  padding: 10px 5px;
  align-items: center;
  border: 1px solid black;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  place-items: center;
  gap: 10px;
`

export const ItemSearch = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    font-size: 16px;
  }
`

export const InputWithDrop = styled.div`
  flex: 1;
  height: 40px;
  position: relative;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  align-items: center;
  img {
    position: absolute;
    left: 8px;
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
  width: 100%;
  height: 200px;
  background-color: white;
  position: absolute;
  top: 50px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 16px;
`

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`

export const WaitingItemBlock = styled.div`
  width: 100%;
  min-height: 80px;
  max-height: 152px;
  padding: 10px;
  border: 1px solid ${colors.primary[200]};
  border-radius: 15px;

  display: grid;
  grid-template-columns: repeat(10, 1fr);
  place-items: center;
  gap: 5px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 30px;
  }
  ::-webkit-scrollbar-thumb {
    height: 30%; /* 스크롤바의 길이 */
    background-color: ${colors.primary[200]}; /* 스크롤바의 색상 */

    border-radius: 15px;
    border: 12px solid white;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
`
