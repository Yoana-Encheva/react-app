import { Toast } from "react-bootstrap";
import { useNotificationContext } from "../../store/notification-context";

import classes from "./Notification.module.css";

const Notification = () => {
  const { notification, hideNotification } = useNotificationContext();

  if (!notification.show) {
    return null;
  }

  return (
    <Toast
      className={`${classes["notification"]} d-inline-block m-1`}
      bg={notification.type}
      onClose={hideNotification}
    >
      <Toast.Body>{notification.message}</Toast.Body>
    </Toast>
  );
};

export default Notification;
