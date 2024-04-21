import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const FavoritesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
`

export const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
`

export const FavoritesList = styled.ul`
  width: 100%;
`

export const Favorite = styled.li`
  display: flex;
  min-width: fit-content;
  padding: 8px 10px;
  margin: 8px 8px 0px 0px;
  align-items: center;
  border: 1px solid ${colors.primary[200]};
  border-radius: 5px;
  float: left;

  p {
    font-size: 16px;
    font-weight: bold;
    padding-top: 4px;
  }

  cursor: pointer;
  &:hover {
    background-color: ${colors.primary[50]};
    transition: 250ms ease-in-out;
  }
`

export const Star = styled.img`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 8px;
`
