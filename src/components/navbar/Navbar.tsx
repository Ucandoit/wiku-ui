import * as React from 'react';
import styled from 'styled-components';
import Link from './Link';
import ToggleIcon from './ToggleIcon';
import { transitionFromAuto, transitionToAuto, isClicked } from '../../utils/dom';

/**
 * Nav container.
 */
const NavContainer = styled.div`
  width: 100%;
  z-index: 10000;

  @media only screen and (max-width: 768px) {
    overflow: hidden;
    position: initial;
    height: 50px;
    transition: height 0.3s ease;
    -ms-overflow-style: none;
    &::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;

/**
 * Nav.
 */
const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #a1cdf1;
  color: white;
  min-height: 50px;

  @media only screen and (max-width: 768px) {
    position: relative;
    flex-direction: column;
    align-items: flex-start;
    min-width: 200px;
    min-height: 100%;
  }
`;

const Items = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style-type: none;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const Header = styled.li`
  list-style-type: none;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    z-index: 10;
  }
`;

const NavBar: React.FunctionComponent = (): JSX.Element => {
  const container = React.useRef<HTMLDivElement>(null);
  const [open, setOpen] = React.useState<boolean>(false);
  React.useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
  });

  const handleDocumentClick = (e: MouseEvent): void => {
    if (!isClicked(e, container.current) && open) {
      closeNav();
    }
  };

  const openNav = (): void => {
    setOpen(true);
    transitionToAuto(container.current);
  };

  const closeNav = (): void => {
    setOpen(false);
    transitionFromAuto(container.current, 50);
  };

  const toggle = (): void => {
    if (open) {
      closeNav();
    } else {
      openNav();
    }
  };

  return (
    <NavContainer ref={container}>
      <Nav>
        <Header>
          <ToggleIcon open={open} onClick={toggle} />
        </Header>
        <Items>
          <Link href="google.com" title="test"></Link>
          <Link href="google.com" title="test2"></Link>
        </Items>
      </Nav>
    </NavContainer>
  );
};

export default NavBar;
