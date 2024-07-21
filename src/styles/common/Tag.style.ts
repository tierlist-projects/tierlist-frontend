import { colors } from '@constants/colors'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

interface LinkProps {
  type: string
}

export const Container = styled(Link)<LinkProps>`
  width: fit-content;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 8px;
  background-color: ${(props) =>
    props.type === 'category' ? colors.primary[400] : colors.primary[500]};
  font-size: 12px;
  border-radius: 5px;

  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);

  a,
  &:visited,
  &:active {
    color: white;
  }

  &:hover {
    color: ${colors.primary[900]};
  }
`
