import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const ContentsContainer = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  gap: 20px;
`

export const PopularList = styled.ul`
  width: 100%;
  max-height: 430px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const PopularCategory = styled.li`
  cursor: pointer;
  font-size: 16px;
  display: flex;
  gap: 8px;

  .category {
    flex: 1;
    word-break: break-all;
  }

  &:hover {
    color: ${colors.primary[500]};
  }
`
