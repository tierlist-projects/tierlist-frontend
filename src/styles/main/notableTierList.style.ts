import styled from '@emotion/styled'

export const TierList = styled.div`
  display: grid;
  padding: 0px 5px 5px 0px;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-height: 400px;
  overflow: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`
