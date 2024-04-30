import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  .category {
    font-size: 16px;
    color: ${colors.primary[300]};
  }

  .title {
    font-size: 20px;
    font-weight: bold;
  }
`

export const ContentBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;

  padding-bottom: 20px;
  border-bottom: 1px solid ${colors.primary[200]};

  textarea {
    font-family: 'gmarket-sans';
    font-size: 16px;
    min-height: 200px;
    flex: 1;
    resize: none;

    ::placeholder {
      color: ${colors.grey.second};
    }

    ::-webkit-scrollbar {
      width: 6px;
    }
    ::-webkit-scrollbar-thumb {
      height: 30%; /* 스크롤바의 길이 */
      background-color: ${colors.primary[200]}; /* 스크롤바의 색상 */

      border-radius: 15px;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0);
    }
  }
`

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`

export const ThumbnailBlock = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  padding-bottom: 20px;
`

export const ButtonBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
`
