import React from 'react'
import styled from 'styled-components/native'
import PropTypes from 'prop-types'

const StyledButton = styled.TouchableHighlight`
  backgroundColor: #4F772D;
  padding: 10px 30px;
  border-radius: 5px;
`

const StyledText = styled.Text`
  color: #FFFFFF;
`

export default Button = ({ children, onPress }) => (
  <StyledButton onPress={onPress}>
    <StyledText>{children}</StyledText>
  </StyledButton>
)

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onPress: PropTypes.string.isRequired,
}
