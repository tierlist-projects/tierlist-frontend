import { colors } from '@constants/colors'
import styled from '@emotion/styled'

interface PublicProps {
  isPublic: boolean
}

export const Container = styled.div<PublicProps>`
  width: 80px;
  height: 26px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.isPublic ? colors.primary[300] : colors.grey.primary};
`

export const Circle = styled.span<PublicProps>`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  transition: all 0.5s ease-in-out;
  transform: translateX(${(props) => (props.isPublic ? '56' : '3')}px);
`
export const Text = styled.p<PublicProps>`
  flex: 1;
  font-size: 12px;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(${(props) => (props.isPublic ? '-18' : 0)}px);
`
