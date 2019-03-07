import React from 'react'
import styled from '@emotion/styled'
import {
  fontSize,
  fontWeight,
  lineHeight,
  space,
  colorStyle,
  color,
} from 'styled-system'
import tag from 'clean-tag'
import PropTypes from 'prop-types'

const BaseButton = styled(tag.button)`
  font-family: ${({ theme }) => theme.fontSans};
  margin: 0;
  border: 0;
  ${fontSize};
  ${fontWeight};
  ${lineHeight};
  ${colorStyle};
  ${color};
  ${space};
`

export const Button = props => (
  <BaseButton
    fontSize={[2, null, 3]}
    fontWeight="normal"
    lineHeight={[2, null, 3]}
    colors="button"
    mt={[2, null, 3]}
    py={1}
    px={[2, null, 3]}
    {...props}
  />
)

Button.propTypes = {
  children: PropTypes.node,
}