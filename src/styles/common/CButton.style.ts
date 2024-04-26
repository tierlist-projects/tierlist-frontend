import { colors } from '@constants/colors'
import styled from '@emotion/styled'
import React from 'react'

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  hPadding?: number
  vPadding?: number
  radius?: number
  backgroundColor?: string
  color?: string
  fontSize?: number
  medium?: boolean
}

export const Button = styled.button<ButtonProps>`
  text-align: center;
  padding: ${(props) => (props.hPadding ? props.hPadding : 8)}px
    ${(props) => (props.vPadding ? props.vPadding : 20)}px;
  box-shadow: 0px 2px 4px rgba(177, 177, 177, 0.5);
  font-size: ${(props) => (props.fontSize ? props.fontSize : 16)}px;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-weight: ${(props) => (props.medium ? '' : 'bold')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.primary[300]};
  border-radius: ${(props) => (props.radius ? props.radius : 20)}px;
`
