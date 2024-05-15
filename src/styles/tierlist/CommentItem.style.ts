import { colors } from '@constants/colors'
import styled from '@emotion/styled'

interface ButtonProps {
  color: string
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  border-bottom: 1px solid ${colors.primary[200]};
  gap: 16px;
  padding-bottom: 16px;
`

export const OriginComment = styled.div`
  width: 100%;
  min-height: 140px;
  display: flex;
  border-bottom: 1px solid ${colors.primary[200]};

  :last-of-type {
    border-bottom: none;
  }
`

export const ProfileImg = styled.img`
  width: 65px;
  height: 65px;
  object-fit: cover;
  border-radius: 15px;
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`

export const TopBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  .nickname {
    font-size: 16px;
    font-weight: bold;
  }

  .date {
    font-size: 12px;
    color: ${colors.grey.primary};
  }
`

export const ButtonBlock = styled.div`
  display: flex;
  gap: 8px;
`

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  text-decoration: underline;
  text-underline-position: under;
`

export const CommentText = styled.p`
  font-size: 16px;
  line-height: 1.5;
`

export const Input = styled.div`
  width: 700px;
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

export const ReplyList = styled.div`
  width: 700px;
  display: flex;
  min-height: 140px;
  border-bottom: 1px solid ${colors.primary[200]};
`
