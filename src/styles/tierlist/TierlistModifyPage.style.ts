import { colors } from '@constants/colors'
import styled from '@emotion/styled'

export const Container = styled.div`
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and ((min-width: 360px) and (max-width: 1023px)) {
    width: 90%;
  }
`

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 8px;

  .category {
    width: 100%;
    font-size: 16px;
    color: ${colors.primary[300]};

    @media screen and ((min-width: 360px) and (max-width: 767px)) {
      font-size: 14px;
    }
  }

  .title {
    width: 100%;
    font-size: 20px;
    font-weight: bold;

    @media screen and ((min-width: 360px) and (max-width: 767px)) {
      font-size: 16px;
    }
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

    @media screen and ((min-width: 360px) and (max-width: 767px)) {
      font-size: 14px;
    }
  }
`

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: bold;

  @media screen and ((min-width: 360px) and (max-width: 767px)) {
    font-size: 16px;
  }
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

  @media screen and ((min-width: 360px) and (max-width: 767px)) {
    gap: 20px;
  }
`
