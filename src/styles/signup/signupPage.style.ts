import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and ((min-width: 768px) and (max-width: 1023px)) {
    width: 55%;
  }

  @media screen and ((min-width: 360px) and (max-width: 767px)) {
    width: 90%;
  }
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;

  @media screen and ((min-width: 360px) and (max-width: 767px)) {
    font-size: 20px;
  }
`
export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const TextBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  .title {
    font-size: 16px;
    font-weight: bold;
  }

  .error {
    flex: 1;
    font-size: 12px;
    color: ${colors.error};
  }

  .correct {
    font-size: 12px;
    color: ${colors.correct};
  }
`

export const InputWithButton = styled.div`
  width: 100%;
  height: 40px;
  display: inline-flex;
  input {
    flex: 1;
    height: 100%;
    font-size: 14px;
    padding: 12px 16px;
    border-radius: 5px 0px 0px 5px;
    border: 2px solid ${colors.grey.second};
    ::placeholder {
      color: ${colors.grey.second};
      font-weight: bold;
    }
  }

  button {
    width: 120px;
    height: 100%;
    border-radius: 0px 5px 5px 0px;
    color: white;
    background-color: ${colors.primary[300]};
    font-size: 12px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 14px;
  padding: 12px 16px;
  border-radius: 5px;
  border: 2px solid ${colors.grey.second};
  ::placeholder {
    color: ${colors.grey.second};
    font-weight: bold;
  }
`

export const ButtonBlock = styled.div`
  display: flex;
  gap: 24px;
`
