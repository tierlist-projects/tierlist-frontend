import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`
export const InputBlock = styled.div`
  width: 500px;
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

  .notice {
    font-size: 12px;
    color: ${colors.error};
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
