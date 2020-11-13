import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  padding: 5px;
  margin-bottom: 24px;
  border-bottom: 4px solid #3f51b5;
`;

const Header = ({ text }) => {
  return <StyledHeader>{text}</StyledHeader>;
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
