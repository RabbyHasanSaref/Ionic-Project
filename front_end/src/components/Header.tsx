import React, { useState } from 'react';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonList,
  IonMenu,
  IonMenuButton,
  IonPopover,
  IonRouterLink,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

import { personOutline, ellipsisVertical, logOutOutline } from 'ionicons/icons';

const Header: React.FC = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [event, setEvent] = useState<MouseEvent | undefined>(undefined);

  const openPopover = (e: any) => {
    setEvent(e.nativeEvent);
    setShowPopover(true);
  };

  return (
    <>
      {/* Side Menu */}
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <IonIcon icon={personOutline} style={{ marginRight: '8px' }} />
              <IonRouterLink routerLink="/login" style={{ color: 'inherit', textDecoration: 'none' }}>
                Login
              </IonRouterLink>
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem lines="full">
              <h2>My Profile</h2>
            </IonItem>
            <IonItem button routerLink="/edit-profile">
              <IonIcon icon="information-circle-outline" slot="start" />
              Edit Profile
            </IonItem>
            <IonItem button routerLink="/change-password">
              <IonIcon icon="settings-outline" slot="start" />
              Change Password
            </IonItem>
            <IonItem button routerLink="/saved-articles">
              <IonIcon icon="bookmark-outline" slot="start" />
              Save Article
            </IonItem>

            <IonItem lines="full">
              <h2>General</h2>
            </IonItem>
            <IonItem button routerLink="/about">
              <IonIcon icon="information-circle-outline" slot="start" />
              About
            </IonItem>
            <IonItem button routerLink="/settings">
              <IonIcon icon="settings-outline" slot="start" />
              Settings
            </IonItem>
          </IonList>

          <IonList className="ion-padding">
            <IonButton expand="block">
              <IonIcon icon={logOutOutline} slot="start" />
              Logout
            </IonButton>
          </IonList>
        </IonContent>
      </IonMenu>

      {/* Header */}
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton>
              <IonIcon icon={personOutline} />
            </IonMenuButton>
          </IonButtons>
          <IonTitle className="ion-text-center" style={{ width: '100%' }}>
            News Paper
          </IonTitle>
          <IonButtons slot="end">
            <IonButton fill="clear" onClick={openPopover}>
              <IonIcon icon={ellipsisVertical} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      {/* Popover Menu */}
      <IonPopover isOpen={showPopover} event={event} onDidDismiss={() => setShowPopover(false)}>
        <IonList>
          <IonItem routerLink="/about">About</IonItem>
          <IonItem routerLink="/settings">Settings</IonItem>
        </IonList>
      </IonPopover>
    </>
  );
};

export default Header;
