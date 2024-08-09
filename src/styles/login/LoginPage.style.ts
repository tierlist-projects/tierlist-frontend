import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

export const Title = styled.h3`
  font-size: 20px;
  text-align: center;
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const Input = styled.input`
  width: 303px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid ${colors.grey.second};
  padding: 14px 20px;

  ::placeholder {
    color: ${colors.grey.second};
    font-weight: bold;
  }
`

export const ErrorMsg = styled.p`
  color: ${colors.error};
  font-size: 12px;
`

export const LoginButton = styled.button`
  width: 303px;
  border-radius: 5px;
  background-color: ${colors.primary[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 0px;
`

export const SignupButton = styled.button`
  font-size: 14px;
  color: ${colors.grey.primary};
`
