import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  position: relative;
`

export const CloseButton = styled.button`
  img {
    width: 28px;
    height: 28px;
  }
  position: absolute;
  top: 28px;
  right: 28px;
  cursor: pointer;
`
