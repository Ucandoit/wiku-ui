import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  border-radius: 5px;
  background-color: ${props => (props.secondary ? '#F7A072' : '#a1cdf1')};
  color: #fff;
  padding: 10px 15px;
  font-size: ${props => {
    if (props.big) return '20px';
    return '16px';
  }};
  outline: none;
  border: none;
  cursor: pointer;
  margin: 15px;
  border: 2px solid ${props => (props.secondary ? '#F7A072' : '#a1cdf1')};
  ${props => {
    return (
      props.inverse &&
      css`
        background-color: #fff;
        color: #a1cdf1;
      `
    );
  }}
`;

interface ButtonProps {
  secondary?: boolean;
  big?: boolean;
  inverse?: boolean;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  secondary,
  big,
  inverse,
  ...props
}: ButtonProps): JSX.Element => {
  return <StyledButton secondary={secondary} big={big} inverse={inverse} {...props} />;
};

export default Button;
