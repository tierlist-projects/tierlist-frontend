import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const TierList = styled.div`
  display: grid;
  padding: 0px 5px 5px 0px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-height: 400px;
  overflow: auto;
  width: 600px;

  ::-webkit-scrollbar {
    display: none;
  }
`

export const EmptyText = styled.div`
  width: 600px;
  font-size: 16px;
  color: ${colors.grey.primary};
`
