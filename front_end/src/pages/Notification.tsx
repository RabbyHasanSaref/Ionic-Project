import React, { useState } from 'react';
import {
  IonContent,
  IonItem,
  IonLabel,
  IonText,
  IonAvatar,
  IonButton,
  IonIcon,
} from '@ionic/react';
import { close } from 'ionicons/icons';

const initialNotifications = [
  {
    id: 1,
    title: 'New Message',
    message: 'You have received a new message from Alice.',
    time: '5 min ago',
    avatarUrl: 'https://i.pravatar.cc/40?img=1',
    read: false,
  },
  {
    id: 2,
    title: 'Update Available',
    message: 'Version 2.0 of the app is now available for download.',
    time: '1 hour ago',
    avatarUrl: '',
    read: true,
  },
  {
    id: 3,
    title: 'Friend Request',
    message: 'John sent you a friend request.',
    time: 'Yesterday',
    avatarUrl: 'https://i.pravatar.cc/40?img=5',
    read: false,
  },
];

const Notification: React.FC = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const handleDismiss = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  return (
    <IonContent>
      <h2 style={{ fontWeight: 600, fontSize: '1.5rem', marginBottom: '1rem' }}>Notifications</h2>
      {notifications.length === 0 && <p style={{ textAlign:'center' }}>No notifications</p>}
      {notifications.map((notification) => (
        <IonItem
          key={notification.id}
          lines="full"
          style={{
            backgroundColor: notification.read ? '#f5f5f5' : 'white',
            borderLeft: notification.read ? '4px solid transparent' : '4px solid #3880ff',
            borderRadius: 8,
            marginBottom: 12,
            boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
          }}
        >
          {notification.avatarUrl && (
            <IonAvatar slot="start">
              <img src={notification.avatarUrl} alt={notification.title} />
            </IonAvatar>
          )}

          <IonLabel>
            <h3 style={{ margin: 0, fontWeight: notification.read ? 'normal' : 'bold' }}>
              {notification.title}
            </h3>
            <p style={{ fontSize: 14, color: '#666', marginTop: 4 }}>
              {notification.message}
            </p>
            <IonText color="medium" style={{ fontSize: 12 }}>
              {notification.time}
            </IonText>
          </IonLabel>

          {/* Close button */}
          <IonButton
            fill="clear"
            slot="end"
            onClick={() => handleDismiss(notification.id)}
            aria-label="Dismiss notification"
          >
            <IonIcon icon={close} />
          </IonButton>
        </IonItem>
      ))}
    </IonContent>
  );
};

export default Notification;
