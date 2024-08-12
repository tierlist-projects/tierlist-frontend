import { colors } from '@constants/colors'
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

  @media screen and ((min-width: 768px) and ((max-width: 1023px))) {
    width: 600px;
    height: 400px;
  }

  @media screen and ((min-width: 360px) and ((max-width: 767px))) {
    width: 300px;
    height: 400px;
    padding: 16px;
    gap: 30px;
  }
`

export const Title = styled.p`
  font-size: 28px;
  font-weight: bold;

  @media screen and ((min-width: 360px) and ((max-width: 767px))) {
    font-size: 20px;
  }
`

export const Content = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 50px;

  @media screen and ((min-width: 768px) and ((max-width: 1023px))) {
    width: 80%;
    gap: 30px;
  }

  @media screen and ((min-width: 360px) and ((max-width: 767px))) {
    width: 95%;
    gap: 30px;
  }
`

export const InputBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 40px;

  & > p {
    width: 30%;
    font-size: 24px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: end;

    @media screen and ((min-width: 360px) and ((max-width: 767px))) {
      width: 25%;
      font-size: 14px;
    }
  }

  @media screen and ((min-width: 360px) and ((max-width: 767px))) {
    gap: 20px;
  }
`

export const InputWithDrop = styled.div`
  flex: 1;
  position: relative;
`

export const Input = styled.input`
  border-bottom: 1px solid #999999;
  width: 100%;
  height: 28px;
  font-size: 20px;
  padding-bottom: 5px;
  padding-left: 5px;

  ::placeholder {
    color: ${colors.grey.primary};
  }

  @media screen and ((min-width: 360px) and ((max-width: 767px))) {
    font-size: 14px;
  }
`

export const Drop = styled.ul`
  position: absolute;
  width: 100%;
  max-height: 200px;
  overflow: auto;
  border: 1px solid #999999;
  background-color: white;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and ((min-width: 360px) and ((max-width: 767px))) {
    max-height: 150px;
  }
`

export const DropContent = styled.li`
  width: 100%;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  cursor: pointer;

  :hover {
    background-color: ${colors.primary[50]};
    transition: all 0.2s ease-in-out;
  }

  & > img {
    width: 16px;
    height: 16px;
  }

  p {
    font-size: 14px;
    font-weight: bold;
  }
`

export const Pagination = styled.div`
  padding: 5px 0px;
`

export const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
`
