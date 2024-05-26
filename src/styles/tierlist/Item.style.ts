import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
`

export const Item = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  object-fit: cover;
`

export const Name = styled.p`
  font-size: 12px;
`

export const RemoveButton = styled.button`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(99, 99, 99, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -10px;

  img {
    width: 12px;
    height: 12px;
  }
`
