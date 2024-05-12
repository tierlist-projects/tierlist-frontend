import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
  gap: 24px;
`
