import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel, Button, ButtonGroup } from '@mui/material';
import CardContainer from '../components/CardContainer';
import NotificationItem from '../components/NotificationItem';
import { useAuth } from '../helpers/userContext';
import { useNotificationData } from '../hooks/notifications/useNotificationByEmailInterval';
import { useNotificationUpdater } from '../hooks/notifications/useNotificationUpdater';
import { useNotificationActivated } from '../hooks/notifications/useGetCurrentOnNotification';
import { useNotificationTypeUpdater } from '../hooks/notifications/useNotificationTypesUpdated';
import { useNotificationTypes } from '../hooks/notifications/useNotificationTypes';
import { NOTIFICATION_TYPES } from '../helpers/constants';

const Notifications = () => {
  const { getUserEmail } = useAuth();
  const notifications = useNotificationData(getUserEmail());
  const { notificationActivated } = useNotificationActivated(getUserEmail());
  const { notificationTypes } = useNotificationTypes(getUserEmail());
  const handleCheckboxChange = useNotificationUpdater(getUserEmail());
  const handleCheckboxNotificationType = useNotificationTypeUpdater(getUserEmail());

  const [initialCheckboxValue, setInitialCheckboxValue] = useState(false);
  const [vacancyChecked, setVacancyChecked] = useState(false);
  const [invitationChecked, setInvitationChecked] = useState(false);
  const [messageChecked, setMessageChecked] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [readNotifications, setReadNotifications] = useState([]);
  const itemsPerPage = 3;

  useEffect(() => {
    if (notificationActivated !== null) {
      setInitialCheckboxValue(notificationActivated);
      const vacancyType = notificationTypes.find(type => type.id === NOTIFICATION_TYPES.VACANCIES);
      const invitationType = notificationTypes.find(type => type.id === NOTIFICATION_TYPES.INVITATIONS);
      const messageType = notificationTypes.find(type => type.id === NOTIFICATION_TYPES.MESSAGES);
      if (vacancyType) setVacancyChecked(true);
      if (invitationType) setInvitationChecked(true);
      if (messageType) setMessageChecked(true);
      if (notifications.length > 0) {
        const readNotificationIds = notifications.filter(notification => notification.read).map(notification => notification.id);
        setReadNotifications(readNotificationIds);
      }
    }
  }, [notificationActivated, notificationTypes, notifications]);

  const handleDeleteNotification = (deletedNotificationId) => {
    setReadNotifications(prevState => prevState.filter(id => id !== deletedNotificationId));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleVacancyCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setVacancyChecked(newValue);
    handleCheckboxNotificationType(newValue, NOTIFICATION_TYPES.VACANCIES);
  };

  const handleInvitationCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setInvitationChecked(newValue);
    handleCheckboxNotificationType(newValue, NOTIFICATION_TYPES.INVITATIONS);
  };

  const handleMessageCheckboxChange = (event) => {
    const newValue = event.target.checked;
    setMessageChecked(newValue);
    handleCheckboxNotificationType(newValue, NOTIFICATION_TYPES.MESSAGES);
  };

  const renderNotifications = () => {
    if (!notifications || notifications.length === 0) {
      return <p>No notifications found</p>;
    }

    // Combine unread and read notifications
    const unreadNotifications = notifications.filter(notification => !readNotifications.includes(notification.id));
    const combinedNotifications = [...unreadNotifications, ...notifications.filter(notification => readNotifications.includes(notification.id))];

    // Calculate start and end index for pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    // Slice notifications for the current page
    const notificationsToShow = combinedNotifications.slice(startIndex, endIndex);

    return notificationsToShow.map(notification => (
      <NotificationItem
        key={notification.id}
        notification={notification}
        onNotificationRead={() => setReadNotifications([...readNotifications, notification.id])}
        onDelete={handleDeleteNotification}
        isRead={readNotifications.includes(notification.id)}
      />
    ));
  };

  return (
    <div>
      <CardContainer width='xs'>
        <FormControlLabel
          control={<Checkbox color="primary" checked={initialCheckboxValue} onChange={(event) => {
            const newValue = event.target.checked;
            setInitialCheckboxValue(newValue);
            handleCheckboxChange(newValue);
          }} />}
          label={initialCheckboxValue ? "Deactivate Notifications" : "Activate Notifications"}
        />
      </CardContainer>
      {initialCheckboxValue && (
        <CardContainer width='xs'>
          <FormControlLabel
            control={<Checkbox color="primary" checked={vacancyChecked} onChange={handleVacancyCheckboxChange} />}
            label="Vacancies"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={invitationChecked} onChange={handleInvitationCheckboxChange} />}
            label="Invitations"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={messageChecked} onChange={handleMessageCheckboxChange} />}
            label="Messages"
          />
        </CardContainer>
      )}
      {initialCheckboxValue && (
        <CardContainer width='sm'>
          {renderNotifications()}
          <ButtonGroup>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </Button>
            <Button style={{ color: 'black' }}>{currentPage}</Button>
            <Button style={{ color: 'black' }}>of</Button>
            <Button style={{ color: 'black' }}>{Math.ceil((notifications.length + readNotifications.length) / itemsPerPage)}</Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === Math.ceil((notifications.length + readNotifications.length) / itemsPerPage)}
            >
              Next
            </Button>
          </ButtonGroup>
        </CardContainer>
      )}
      {!initialCheckboxValue && (
        <div>
          <CardContainer width='xs'>
            <p>You need to activate the notifications</p>
          </CardContainer>
        </div>
      )}
    </div>
  );
};

export default Notifications;