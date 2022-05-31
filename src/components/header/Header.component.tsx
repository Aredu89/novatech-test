import React from 'react';
import { HeaderContainer } from './Header.styles';

const Header = ({ title }: { title: string }) => (
  <HeaderContainer>{title}</HeaderContainer>
);

export default Header;
