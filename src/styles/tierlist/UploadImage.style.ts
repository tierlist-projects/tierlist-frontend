import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.label<{ active: boolean }>`
  width: 320px;
  height: 180px;
  border: ${(props) =>
    props.active
      ? `2px solid ${colors.primary[400]}`
      : `1px solid ${colors.primary[200]}`};
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  background-color: ${(props) => (props.active ? `${colors.primary[50]}` : '')};

  .preview {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`

export const FileInput = styled.input`
  display: none;
`

export const InnerDiv = styled.div`
  width: 100%;
  height: 100%;
  border: 3px dashed ${colors.primary[200]};
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  img {
    width: 70px;
    height: 70px;
  }

  p {
    font-size: 14px;
    color: ${colors.primary[200]};
  }
`
