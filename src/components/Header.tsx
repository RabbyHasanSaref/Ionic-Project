import React from 'react';
import { IonHeader, IonToolbar, IonTitle} from '@ionic/react';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Header</IonTitle>
        </IonToolbar>
      </IonHeader>
    </>
  );
}

export default Header;