import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  height: 500px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
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

export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`

export const Content = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 50px;
`

export const InputBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;

  p {
    font-size: 24px;
    font-weight: bold;
  }
`

export const InputWithDrop = styled.div`
  width: 400px;
  position: relative;
`

export const Input = styled.input`
  border-bottom: 1px solid #999999;
  width: 400px;
  height: 28px;
  font-size: 20px;
  padding-bottom: 5px;
  padding-left: 5px;
`

export const Drop = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  border: 1px solid #999999;
  background-color: white;
`

export const DropContent = styled.li`
  padding: 10px 5px;
`

export const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
`
