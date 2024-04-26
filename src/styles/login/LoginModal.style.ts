import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 15px;
  position: relative;
`

export const CloseButton = styled.button`
  position: fixed;
  top: 28px;
  right: 28px;
  img {
    width: 28px;
    height: 28px;
  }
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
  margin-top: 60px;
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;
`

export const Input = styled.input`
  width: 350px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid ${colors.grey.second};
  padding: 12px 16px;

  ::placeholder {
    color: ${colors.grey.second};
    font-weight: bold;
  }
`

export const errorText = styled.p`
  color: ${colors.error};
  font-size: 12px;
`

export const LoginButton = styled.button`
  width: 350px;
  background-color: ${colors.primary[300]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 16px;
`

export const SignUpButton = styled.button`
  font-size: 12px;
  color: ${colors.grey.primary};
  margin-top: 16px;
`
