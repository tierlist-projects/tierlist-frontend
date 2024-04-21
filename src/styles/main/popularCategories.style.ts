import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const PopularList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 200px;
  max-height: 400px;
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

  .lank {
    width: 10%;
    text-align: right;
  }

  .category {
    flex: 1;
    word-break: break-all;
  }

  &:hover {
    color: ${colors.primary[500]};
  }
`
