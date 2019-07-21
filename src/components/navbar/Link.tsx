import * as React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  display: flex;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const Anchor = styled.a`
  display: block;
  color: white;
  text-decoration: none;
  margin: auto;
  padding: 10px;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

interface LinkProps {
  href: string;
  title: string;
}

const Link: React.FunctionComponent<LinkProps> = ({ title, href }): JSX.Element => {
  return (
    <ListItem>
      <Anchor href={href}>{title}</Anchor>
    </ListItem>
  );
};

export default Link;
