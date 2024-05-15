import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  border-top: 1px solid ${colors.primary[200]};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 0px;
  gap: 20px;
`

export const Title = styled.p`
  width: 100%;
  font-size: 20px;
  font-weight: bold;
`

export const Input = styled.div`
  width: 95%;
  height: 80px;
  display: flex;
  border-radius: 10px;
  border: 1px solid ${colors.primary[500]};

  textarea {
    flex: 1;
    padding: 10px;
    resize: none;
    font-family: 'gmarket-sans';

    ::placeholder {
      color: ${colors.grey.primary};
    }
  }

  button {
    width: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.primary[500]};
    color: white;
    font-weight: bold;
    font-size: 16px;
    border-radius: 0px 10px 10px 0px;
  }
`

export const CommentList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  gap: 16px;
`

export const EmptyText = styled.div`
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: ${colors.grey.second};
`
