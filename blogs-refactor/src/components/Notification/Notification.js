import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledNotification = styled.div`
  width: 500px;
  position: absolute;
  top: 10px;
  right: ${({ showing }) => (showing ? '24px' : '-500px')};
  transition: right 1s ease-in;
  padding: 10px;
  background-color: #fff;
  color: ${({ type }) => (type === 'success' ? '#339933' : '#ff1a1a')};
  border-color: ${({ type }) => (type === 'success' ? '#339933' : '#ff1a1a')};
  border-width: 2px;
  border-style: solid;
  font-size: 24px;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  z-index: 2000;
`;

const Notification = () => {
  const message = useSelector(({ notification }) => notification.message);
  const type = useSelector(({ notification }) => notification.notificationType);
  const visible = useSelector(({ notification }) => notification.visible);

  return (
    <StyledNotification type={type} showing={visible}>
      {message}
    </StyledNotification>
  );
};

export default Notification;
