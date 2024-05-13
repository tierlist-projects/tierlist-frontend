import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
`

export const UserInfo = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;
`

export const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  border-right: 1px solid ${colors.primary[100]};
  padding-right: 30px;
`

export const ProfileImage = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
`

export const FileInput = styled.input`
  display: none;
`

export const ProfileLabel = styled.label`
  text-align: center;
  padding: 8px 20px;
  box-shadow: 0px 2px 4px rgba(177, 177, 177, 0.5);
  font-size: 16px;
  color: white;
  background-color: ${colors.primary[300]};
  border-radius: 10px;
  cursor: pointer;
`

export const NicknameBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0px;
  gap: 20px;
`

export const Nickname = styled.p`
  font-size: 24px;
`

export const NicknameInput = styled.input`
  font-size: 24px;
  width: 300px;
  border-bottom: 3px solid ${colors.primary[200]};
`

export const Button = styled.button`
  text-align: start;
  font-size: 16px;
  color: ${colors.primary[400]};
  text-decoration: underline;
  text-underline-position: under;
  width: fit-content;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PasswordBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 30px;

  & > p {
    font-size: 16px;
    font-weight: bold;
  }
`

export const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  input {
    font-size: 16px;
    width: 400px;
    border-bottom: 3px solid ${colors.primary[200]};
    padding-bottom: 5px;

    ::placeholder {
      color: ${colors.grey.second};
    }
  }
`

export const ErrorText = styled.p`
  font-size: 12px;
  color: ${colors.error};
`
