import React from 'react';
import styled from 'styled-components';

const StyledSubHeader = styled.div`
  font-size: 18px;  
  color: #21318b;  
  font-weight: bolder;
  border-bottom: 2px solid #21318b;
  margin: 10px 0;
  padding: 5px;
`;

const SubHeader = ({ children }) => {
  return <StyledSubHeader>{children}</StyledSubHeader>;
};

export default SubHeader;
