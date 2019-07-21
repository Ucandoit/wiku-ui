import * as React from 'react';
import styled from 'styled-components';

/**
 * Toggle icon container.
 */
const Toggle = styled.div`
  display: none;
  position: relative;
  padding: 5px;
  margin: 5px 0;
  flex-direction: column;
  justify-content: center;
  top: 0;
  height: 30px;
  width: 30px;
  cursor: pointer;
  z-index: 10;

  @media only screen and (max-width: 768px) {
    display: flex;
  }
`;
/**
 * Bar for toggle icon construction (3 bars).
 */
const IconBar = styled.div`
  height: 5px;
  background: white;
  margin: 3px 0;
`;

/**
 * Top bar of the icon.
 * @param {boolean} open status of the navbar
 */
const IconBarTop = styled(IconBar)<{ open: boolean }>`
  transition: all 0.2s ease;
  transform: ${props => (props.open ? 'rotate(-45deg) translate(-25%, 7px)' : 'rotate(0deg) translate(0px, 0px)')};
`;

/**
 * Middle bar of the icon.
 * @param {boolean} open status of the navbar
 */
const IconBarMiddle = styled(IconBar)<{ open: boolean }>`
  transition: all 0.1s ease;
  width: ${props => (props.open ? '0%' : '100%')};
`;

/**
 * Bottom bar of the icon.
 * @param {boolean} open status of the navbar
 */
const IconBarButtom = styled(IconBar)<{ open: boolean }>`
  transition: all 0.2s ease;
  transform: ${props => (props.open ? 'rotate(45deg) translate(-25%, -6px)' : 'rotate(0deg) translate(0px, 0px)')};
`;

/**
 * Toggle icon props
 */
interface ToggleIconProps {
  /** status of the navbar */
  open: boolean;
  /** event when clicking the button */
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

/**
 * Toggle icon to display when the screen is too small.
 */
const ToggleIcon: React.FunctionComponent<ToggleIconProps> = ({ open, onClick }): JSX.Element => {
  return (
    <Toggle role="button" onClick={onClick}>
      <IconBarTop open={open} />
      <IconBarMiddle open={open} />
      <IconBarButtom open={open} />
    </Toggle>
  );
};

export default ToggleIcon;
